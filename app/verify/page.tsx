'use client';

import { Suspense, useRef, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

type VerifyStep = 'phone' | 'code' | 'success';

const CODE_LENGTH = 6;

function Spinner({ color = 'white' }: { color?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="animate-spin" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="3" strokeOpacity="0.25" />
      <path d="M22 12a10 10 0 0 0-10-10" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function PageSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--ivory)' }}>
      <Spinner color="var(--forest)" />
    </div>
  );
}

function digitsOnly(value: string) {
  return value.replace(/\D/g, '');
}

function formatPhone(value: string) {
  const d = digitsOnly(value).replace(/^1(?=\d{10})/, '').slice(0, 10);
  if (d.length < 4) return d;
  if (d.length < 7) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

const headingStyle: React.CSSProperties = {
  fontFamily: 'Playfair Display, Georgia, serif',
  fontWeight: 600,
  fontSize: '1.5rem',
  color: 'var(--forest)',
};

const subtextStyle: React.CSSProperties = {
  color: 'rgba(61,26,71,0.7)',
  fontSize: '0.88rem',
  lineHeight: 1.6,
  marginBottom: '1.5rem',
};

const inputStyle: React.CSSProperties = {
  background: 'rgba(61,26,71,0.04)',
  border: '1px solid rgba(61,26,71,0.25)',
  color: 'var(--charcoal)',
  outline: 'none',
  fontFamily: 'Inter, sans-serif',
};

const primaryButtonStyle: React.CSSProperties = {
  background: 'var(--forest)',
  color: 'white',
  fontFamily: 'Inter, sans-serif',
  transition: 'background 0.2s',
};

function VerifyContent() {
  const searchParams = useSearchParams();

  const [step, setStep] = useState<VerifyStep>('phone');
  const [phone, setPhone] = useState(() => formatPhone(searchParams.get('phone') ?? ''));
  const [digits, setDigits] = useState<string[]>(Array(CODE_LENGTH).fill(''));
  const [error, setError] = useState('');
  const [isBusy, setIsBusy] = useState(false);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const phoneDigits = digitsOnly(phone);
  const code = digits.join('');

  // NOTE: This page is a front-end flow only (same as the other forms on this site).
  // Wire handleSendCode and handleVerify to your SMS provider's verification endpoints
  // before relying on it for real verification.
  const handleSendCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneDigits.length !== 10) {
      setError('Please enter a valid 10-digit U.S. mobile number.');
      return;
    }
    setError('');
    setIsBusy(true);
    setTimeout(() => {
      setIsBusy(false);
      setDigits(Array(CODE_LENGTH).fill(''));
      setStep('code');
      setTimeout(() => inputRefs.current[0]?.focus(), 0);
    }, 900);
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length !== CODE_LENGTH) {
      setError('Please enter the 6-digit code.');
      return;
    }
    setError('');
    setIsBusy(true);
    setTimeout(() => {
      setIsBusy(false);
      setStep('success');
    }, 900);
  };

  const handleDigitChange = (index: number, value: string) => {
    const cleaned = digitsOnly(value);
    if (!cleaned) {
      setDigits(prev => prev.map((d, i) => (i === index ? '' : d)));
      return;
    }
    // Typing or pasting: spread the digits across the boxes starting at this one.
    setDigits(prev => {
      const next = [...prev];
      cleaned.split('').slice(0, CODE_LENGTH - index).forEach((ch, offset) => {
        next[index + offset] = ch;
      });
      return next;
    });
    const focusIndex = Math.min(index + cleaned.length, CODE_LENGTH - 1);
    inputRefs.current[focusIndex]?.focus();
    setError('');
  };

  const handleDigitKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === 'ArrowLeft' && index > 0) inputRefs.current[index - 1]?.focus();
    if (e.key === 'ArrowRight' && index < CODE_LENGTH - 1) inputRefs.current[index + 1]?.focus();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12" style={{ background: 'var(--ivory)' }}>
      <div
        className="w-full max-w-sm rounded-2xl overflow-hidden"
        style={{ background: 'white', boxShadow: '0 20px 60px rgba(61,26,71,0.14)' }}
      >
        {/* Decorative amber bar (decoration only) */}
        <div style={{ height: '6px', background: 'var(--accent)' }} />

        <div className="px-8 py-10 flex flex-col items-center text-center">
          {/* Wordmark */}
          <Link href="/" className="flex items-center gap-2 mb-8" aria-label="FutureReady home">
            <span
              className="flex items-center justify-center rounded-lg"
              style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, var(--forest) 0%, var(--olive) 100%)' }}
            >
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: '0.9rem', color: 'white', lineHeight: 1 }}>F</span>
            </span>
            <span
              style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontWeight: 600,
                fontSize: '1.35rem',
                color: 'var(--forest)',
                letterSpacing: '-0.01em',
              }}
            >
              FutureReady
            </span>
          </Link>

          {/* ── STEP 1: Phone ── */}
          {step === 'phone' && (
            <form onSubmit={handleSendCode} className="w-full" noValidate>
              <h1 className="mb-2" style={headingStyle}>Verify your number.</h1>
              <p style={subtextStyle}>Enter your mobile number and we&apos;ll text you a 6-digit code.</p>

              <label htmlFor="verify-phone" className="sr-only">Mobile phone number</label>
              <input
                id="verify-phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                value={phone}
                onChange={e => { setPhone(formatPhone(e.target.value)); setError(''); }}
                placeholder="(555) 555-5555"
                className="w-full px-4 py-3 rounded-xl text-sm mb-3"
                style={{ ...inputStyle, textAlign: 'center' }}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? 'verify-error' : undefined}
              />

              {error && (
                <p id="verify-error" role="alert" style={{ fontSize: '0.78rem', color: '#B91C1C', marginBottom: '0.75rem' }}>
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={isBusy}
                className="w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
                style={{ ...primaryButtonStyle, opacity: isBusy ? 0.7 : 1, cursor: isBusy ? 'not-allowed' : 'pointer' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--olive)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--forest)')}
              >
                {isBusy ? (<><Spinner /> Sending…</>) : 'Send code'}
              </button>

              {/* Transactional SMS disclosure */}
              <p style={{ fontSize: '0.7rem', color: 'rgba(61,26,71,0.7)', lineHeight: 1.6, marginTop: '1rem', textAlign: 'left' }}>
                By clicking &quot;Send code,&quot; I agree to receive Transactional Account Notification SMS messages from FutureReady at the phone number provided. I understand I may opt out at any time by replying STOP. Reply HELP for help. Message and data rates may apply. Message frequency varies. Consent is not required as a condition of purchasing any products or services. See our{' '}
                <Link href="/terms" style={{ color: 'var(--olive)', textDecoration: 'underline' }}>Terms of Service</Link>
                {' '}and{' '}
                <Link href="/privacy" style={{ color: 'var(--olive)', textDecoration: 'underline' }}>Privacy Policy</Link>.
              </p>
            </form>
          )}

          {/* ── STEP 2: 6-digit code ── */}
          {step === 'code' && (
            <form onSubmit={handleVerify} className="w-full" noValidate>
              <h1 className="mb-2" style={headingStyle}>Enter your code.</h1>
              <p style={subtextStyle}>We sent a 6-digit code to {phone}.</p>

              <div className="flex justify-center gap-2 mb-3" role="group" aria-label="6-digit verification code">
                {digits.map((digit, i) => (
                  <input
                    key={i}
                    ref={el => { inputRefs.current[i] = el; }}
                    type="text"
                    inputMode="numeric"
                    autoComplete={i === 0 ? 'one-time-code' : 'off'}
                    maxLength={CODE_LENGTH}
                    value={digit}
                    onChange={e => handleDigitChange(i, e.target.value)}
                    onKeyDown={e => handleDigitKeyDown(i, e)}
                    onFocus={e => e.currentTarget.select()}
                    aria-label={`Digit ${i + 1} of ${CODE_LENGTH}`}
                    className="rounded-xl text-center"
                    style={{ ...inputStyle, width: '42px', height: '50px', fontSize: '1.25rem', fontWeight: 600 }}
                  />
                ))}
              </div>

              {error && (
                <p role="alert" style={{ fontSize: '0.78rem', color: '#B91C1C', marginBottom: '0.75rem' }}>
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={isBusy}
                className="w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 mt-2"
                style={{ ...primaryButtonStyle, opacity: isBusy ? 0.7 : 1, cursor: isBusy ? 'not-allowed' : 'pointer' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--olive)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--forest)')}
              >
                {isBusy ? (<><Spinner /> Verifying…</>) : 'Verify'}
              </button>

              <div className="flex items-center justify-center gap-4 mt-4" style={{ fontSize: '0.8rem' }}>
                <button
                  type="button"
                  onClick={() => { setStep('phone'); setError(''); }}
                  style={{ color: 'var(--olive)', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  Change number
                </button>
                <button
                  type="button"
                  onClick={() => { setDigits(Array(CODE_LENGTH).fill('')); setError(''); inputRefs.current[0]?.focus(); }}
                  style={{ color: 'var(--accent-dark)', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}
                >
                  Resend code
                </button>
              </div>
            </form>
          )}

          {/* ── STEP 3: Success ── */}
          {step === 'success' && (
            <div className="w-full" role="status">
              <div
                className="flex items-center justify-center rounded-full mx-auto mb-5"
                style={{ width: '64px', height: '64px', background: 'var(--forest)' }}
              >
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h1 className="mb-2" style={headingStyle}>Number verified.</h1>
              <p style={subtextStyle}>{phone} is confirmed. You&apos;re ready for what&apos;s next.</p>
              <Link href="/signup" className="w-full py-3 rounded-xl text-sm font-semibold inline-block" style={primaryButtonStyle}>
                Continue
              </Link>
            </div>
          )}

          <p className="font-mono-label mt-8" style={{ color: '#6B7280', fontSize: '0.62rem' }}>
            Secured by FutureReady
          </p>
        </div>
      </div>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={<PageSpinner />}>
      <VerifyContent />
    </Suspense>
  );
}
