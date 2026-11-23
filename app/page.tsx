'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Nav from './components/Nav';
import Footer from './components/Footer';

// ─── Animated Counter ──────────────────────────────────────────────────────────
function Counter({ target, prefix = '', suffix = '' }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const step = target / 60;
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(start));
        }, 16);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
}

// ─── App UI: Dashboard Mockup ──────────────────────────────────────────────────
function DashboardMockup() {
  return (
    <div className="app-card p-6 w-full max-w-sm mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="font-mono-label" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>Sample dashboard</p>
          <p style={{ fontWeight: 600, color: 'var(--forest)', fontSize: '1rem' }}>Jordan&apos;s milestone view</p>
        </div>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold"
          style={{ background: 'var(--forest)', color: 'var(--ivory)' }}
        >
          J
        </div>
      </div>

      {/* Net Worth Card */}
      <div
        className="rounded-2xl p-4 mb-4"
        style={{ background: 'var(--forest)', color: 'var(--ivory)' }}
      >
        <p className="font-mono-label mb-1" style={{ color: 'rgba(245,243,235,0.5)', fontSize: '0.6rem' }}>Next Milestone</p>
        <p style={{ fontSize: '1.4rem', fontWeight: 700, letterSpacing: '-0.02em' }}>Buying a first home</p>
        <p style={{ color: 'rgba(245,243,235,0.6)', fontSize: '0.75rem', marginTop: '0.25rem' }}>
          <span style={{ color: 'var(--ivory)', fontWeight: 600 }}>3 of 5</span> readiness steps done (example)
        </p>
      </div>

      {/* Milestone steps */}
      <div className="space-y-3 mb-4">
        {[
          { label: 'Claim the full 401(k) match', pct: 80, color: '#8E4585' },
          { label: 'Education benefits plan', pct: 60, color: '#3D1A47' },
          { label: 'HSA / FSA elections reviewed', pct: 100, color: '#8E4585' },
        ].map(g => (
          <div key={g.label}>
            <div className="flex justify-between items-center mb-1">
              <span style={{ fontSize: '0.78rem', color: 'var(--charcoal)', fontWeight: 500 }}>{g.label}</span>
              <span className="font-mono-label" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>{g.pct}%</span>
            </div>
            <div className="rounded-full h-1.5" style={{ background: 'rgba(61,26,71,0.1)' }}>
              <div
                className="h-1.5 rounded-full"
                style={{ width: `${g.pct}%`, background: g.color, transition: 'width 1s ease' }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* AI Insight */}
      <div
        className="rounded-xl p-3 flex items-start gap-3"
        style={{ background: 'rgba(142,69,133,0.1)', border: '1px solid rgba(142,69,133,0.2)' }}
      >
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
          style={{ background: 'var(--olive)' }}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 5v6m0 4h.01" />
          </svg>
        </div>
        <p style={{ fontSize: '0.72rem', color: 'var(--forest)', lineHeight: 1.5 }}>
          <strong>Milestone Planner:</strong> Your employer&apos;s match may go unclaimed at your current contribution rate. Open enrollment is a good time to review it. Educational guidance only.
        </p>
      </div>
    </div>
  );
}

// ─── App UI: AI Chat Mockup ────────────────────────────────────────────────────
function ChatMockup() {
  const messages = [
    { role: 'user', text: 'I want to buy a home in a few years. What should I look at in my benefits first?' },
    { role: 'ai', text: 'A good first step is checking whether you\'re contributing enough to get your employer\'s full 401(k) match, since that\'s part of your compensation. Next, see whether an HSA or FSA fits your expected health costs. Open enrollment is a natural time to review both.' },
    { role: 'user', text: 'What else should I plan for before buying?' },
    { role: 'ai', text: 'Many first-time buyers plan for the cost of a down payment and closing costs, and check which employer benefits may help. I can walk you through each as a checklist. This is general education, not personalized advice.' },
  ];

  return (
    <div className="app-card p-5 w-full max-w-sm mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Chat header */}
      <div className="flex items-center gap-3 mb-4 pb-4" style={{ borderBottom: '1px solid rgba(61,26,71,0.08)' }}>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: 'var(--forest)' }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C8 2 4 6 4 10c0 5 8 12 8 12s8-7 8-12c0-4-4-8-8-8z" fill="#F5F3EB" opacity="0.9" />
          </svg>
        </div>
        <div>
          <p style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--forest)' }}>FutureReady Milestone Planner</p>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <p className="font-mono-label" style={{ color: 'var(--olive)', fontSize: '0.55rem' }}>Sample conversation</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="space-y-3 mb-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className="rounded-2xl px-3 py-2 max-w-[85%]"
              style={{
                background: msg.role === 'user' ? 'var(--forest)' : 'rgba(142,69,133,0.1)',
                color: msg.role === 'user' ? 'var(--ivory)' : 'var(--charcoal)',
                fontSize: '0.72rem',
                lineHeight: 1.5,
                borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div
        className="flex items-center gap-2 rounded-full px-4 py-2"
        style={{ background: 'rgba(61,26,71,0.06)', border: '1px solid rgba(61,26,71,0.1)' }}
      >
        <p style={{ fontSize: '0.72rem', color: 'rgba(61,26,71,0.35)', flex: 1 }}>Ask about a milestone or a benefit…</p>
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center"
          style={{ background: 'var(--forest)' }}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ background: 'var(--ivory)', color: 'var(--charcoal)' }}>
      <Nav />

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          background: 'linear-gradient(135deg, #2A0F33 0%, #3D1A47 40%, #4A2158 70%, #2A0F33 100%)',
          overflow: 'hidden',
        }}
      >
        {/* Animated grid background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(190,110,180,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(190,110,180,0.12) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Glow orbs */}
        <div
          className="absolute"
          style={{
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(190,110,180,0.2) 0%, transparent 70%)',
            top: '-100px',
            right: '-100px',
          }}
        />
        <div
          className="absolute"
          style={{
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(217,166,211,0.12) 0%, transparent 70%)',
            bottom: '100px',
            left: '-50px',
          }}
        />

        {/* Content */}
        <div
          className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-32 pb-20"
          style={{
            opacity: heroLoaded ? 1 : 0,
            transform: heroLoaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1s ease, transform 1s ease',
          }}
        >
          <div className="max-w-3xl">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full"
              style={{
                background: 'rgba(190,110,180,0.15)',
                border: '1px solid rgba(190,110,180,0.35)',
              }}
            >
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#D9A6D3' }} />
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', fontWeight: 500 }}>
                An employer-offered benefit for life&apos;s milestones
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: 'white',
                marginBottom: '1.5rem',
              }}
            >
              Get ready
              <br />
              <span style={{ color: '#D9A6D3' }}>for what&apos;s</span>
              <br />
              next.
            </h1>

            {/* Subheading */}
            <p
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: '1.15rem',
                lineHeight: 1.7,
                maxWidth: '520px',
                marginBottom: '2.5rem',
              }}
            >
              FutureReady helps employees understand and use the benefits they already have — 401(k) match, HSA/FSA, open enrollment — and plan for big moments like a first home, going back to school, growing a family, career changes and retirement.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/talk-to-sales"
                className="inline-flex items-center gap-2"
                style={{
                  background: '#8E4585',
                  color: 'white',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  padding: '0.875rem 2rem',
                  borderRadius: '10px',
                  transition: 'background 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#A0599A'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#8E4585'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Get Started Free
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/for-employers"
                className="inline-flex items-center gap-2"
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  padding: '0.875rem 2rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
              >
                For Employers
              </Link>
            </div>

            {/* Milestones */}
            <div className="flex flex-wrap items-center gap-2 mt-12">
              {['First home', 'Going back to school', 'Growing a family', 'Career changes', 'Retirement readiness'].map(m => (
                <span
                  key={m}
                  style={{
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '0.78rem',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '999px',
                    border: '1px solid rgba(255,255,255,0.18)',
                  }}
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PILLARS BAR ── */}
      <section style={{ background: '#3D1A47', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-5xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
                title: 'Privacy by design',
                desc: 'Employees control their data. Employers see only aggregate trends — never individual finances.',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 5v6m0 4h.01" />
                  </svg>
                ),
                title: 'A Milestone Planner',
                desc: 'Educational guidance that helps employees understand their benefits and map out the steps to each life milestone.',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                ),
                title: 'Built for every employee',
                desc: 'From a first job to a final decade before retirement — FutureReady meets employees at every life stage.',
              },
            ].map((pillar, i) => (
              <div key={i} className="flex items-start gap-4">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(245,243,235,0.1)', color: 'rgba(245,243,235,0.7)' }}
                >
                  {pillar.icon}
                </div>
                <div>
                  <p style={{ color: 'var(--ivory)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.35rem' }}>
                    {pillar.title}
                  </p>
                  <p style={{ color: 'rgba(245,243,235,0.5)', fontSize: '0.82rem', lineHeight: 1.6 }}>
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDITORIAL STATEMENT ── */}
      <section className="py-28 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono-label mb-8" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
            Why FutureReady
          </p>
          <h2 className="headline-lg mb-8" style={{ color: 'var(--forest)' }}>
            <em className="italic-accent">Why</em> employers choose
            <br />
            FutureReady
          </h2>
          <p style={{ color: 'rgba(61,26,71,0.6)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '520px', margin: '0 auto' }}>
            Most employees already have valuable benefits. FutureReady helps them understand those benefits and use them to prepare for the moments that matter most.
          </p>
        </div>
      </section>

      {/* ── FEATURES (Origin-inspired) ── */}
      <section className="pb-28 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: 'Make the Most of Your Benefits',
                body: 'Explain the 401(k) match, HSA/FSA options and open enrollment in plain language, so employees can use the benefits your company already provides.',
              },
              {
                label: 'Plan for Life\'s Big Moments',
                body: 'Step-by-step milestone guides for a first home, going back to school, growing a family, career changes and retirement readiness.',
              },
              {
                label: 'Flexible Pricing',
                body: 'Our pricing model scales with your team. Talk to us about a plan that fits your organization.',
              },
              {
                label: 'Dedicated Success Team',
                body: 'From onboarding to rollout to engagement campaigns, our customer success team is with you every step of the way—ensuring your program drives real adoption and impact.',
              },
            ].map((f, i) => (
              <div
                key={i}
                className="card-feature p-8"
                style={{ minHeight: '280px' }}
              >
                <p
                  className="font-mono-label mb-6"
                  style={{ color: 'var(--olive)', fontSize: '0.6rem', lineHeight: 1.5 }}
                >
                  {f.label}
                </p>
                <p style={{ color: 'var(--charcoal)', fontSize: '0.95rem', lineHeight: 1.75 }}>
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-28 px-6" style={{ background: 'var(--white)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="font-mono-label mb-6" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
              How It Works
            </p>
            <h2 className="headline-lg" style={{ color: 'var(--forest)' }}>
              From benefits to milestones,
              <br />
              <em className="italic-accent">ready for what&apos;s next.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                title: 'Choose a milestone',
                desc: 'Employees pick the moment they\'re preparing for — a first home, going back to school, growing a family, a career change or retirement.',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                ),
              },
              {
                num: '02',
                title: 'Understand your benefits',
                desc: 'The Milestone Planner explains the 401(k) match, HSA/FSA and open-enrollment choices that apply to that milestone.',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                ),
              },
              {
                num: '03',
                title: 'Plan the steps',
                desc: 'Employees get an educational, step-by-step checklist for their milestone, with timing tips around open enrollment and life events.',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                ),
              },
              {
                num: '04',
                title: 'Stay ready',
                desc: 'Employees revisit their plan as life changes and ask questions anytime — while employers see aggregate engagement metrics only.',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                ),
              },
            ].map((step, i) => (
              <div key={step.num} className="relative">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(61,26,71,0.08)', color: 'var(--forest)' }}
                >
                  {step.icon}
                </div>
                <p
                  className="font-mono-label mb-3"
                  style={{ color: 'rgba(61,26,71,0.25)', fontSize: '0.65rem' }}
                >
                  {step.num}
                </p>
                <h3
                  className="font-serif mb-3"
                  style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--forest)' }}
                >
                  {step.title}
                </h3>
                <p style={{ color: 'rgba(61,26,71,0.6)', fontSize: '0.88rem', lineHeight: 1.7 }}>
                  {step.desc}
                </p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-5 -right-3 z-10">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(61,26,71,0.2)" strokeWidth="1.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APP UI DEMO ── */}
      <section className="py-28 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="font-mono-label mb-6" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
              The Experience
            </p>
            <h2 className="headline-lg" style={{ color: 'var(--forest)' }}>
              A milestone plan
              <br />
              <em className="italic-accent">for every employee.</em>
            </h2>
            <p
              style={{
                color: 'rgba(61,26,71,0.55)',
                fontSize: '1rem',
                lineHeight: 1.8,
                maxWidth: '440px',
                margin: '1.5rem auto 0',
              }}
            >
              Employees get a milestone dashboard and a Milestone Planner for educational guidance — anytime.
            </p>
          </div>

          {/* Two-column UI demo */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Dashboard */}
            <div>
              <p className="font-mono-label mb-4" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>
                Milestone Dashboard
              </p>
              <p
                className="headline-md mb-6"
                style={{ color: 'var(--forest)', fontSize: '1.5rem' }}
              >
                A clear view of every milestone
              </p>
              <p style={{ color: 'rgba(61,26,71,0.55)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '2rem' }}>
                Employees see the next milestone they&apos;re preparing for, the benefit steps that matter, and what to do next — all in one calm, organized view. Sample dashboard shown for illustration.
              </p>
              <div className="animate-float">
                <DashboardMockup />
              </div>
            </div>

            {/* Right: AI Chat */}
            <div>
              <p className="font-mono-label mb-4" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>
                Milestone Planner
              </p>
              <p
                className="headline-md mb-6"
                style={{ color: 'var(--forest)', fontSize: '1.5rem' }}
              >
                Ask a question. Get a clear next step.
              </p>
              <p style={{ color: 'rgba(61,26,71,0.55)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '2rem' }}>
                The Milestone Planner gives educational guidance on benefits and life milestones. It does not provide investment, tax or legal advice.
              </p>
              <div className="animate-float-delay">
                <ChatMockup />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EMPLOYER SECTION ── */}
      <section className="py-28 px-6" style={{ background: 'var(--forest)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono-label mb-6" style={{ color: 'rgba(245,243,235,0.4)', fontSize: '0.65rem' }}>
                For Employers
              </p>
              <h2 className="headline-lg text-white mb-6">
                Help your team get more
                <br />
                <em className="italic-accent">from the benefits you offer.</em>
              </h2>
              <p style={{ color: 'rgba(245,243,235,0.65)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                Launch a benefit your employees will actually use. FutureReady helps them understand and use the benefits you already provide, from onboarding to open enrollment, while you see aggregate engagement metrics.
              </p>
              <div className="space-y-5">
                {[
                  { title: 'Simple rollout', desc: 'Deploy to your entire workforce in days, not months.' },
                  { title: 'Privacy by design', desc: 'Employers see aggregate data only. Individual finances stay private.' },
                  { title: 'Benefit engagement', desc: 'See how employees engage with benefits education and milestone planning.' },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(245,243,235,0.15)', border: '1px solid rgba(245,243,235,0.2)' }}
                    >
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p style={{ color: 'var(--ivory)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.2rem' }}>{item.title}</p>
                      <p style={{ color: 'rgba(245,243,235,0.55)', fontSize: '0.85rem' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/for-employers" className="btn-primary">
                  Learn More for Employers
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Employer dashboard mockup */}
            <div>
              <div
                className="rounded-2xl p-6"
                style={{
                  background: 'rgba(245,243,235,0.06)',
                  border: '1px solid rgba(245,243,235,0.1)',
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="font-mono-label" style={{ color: 'rgba(245,243,235,0.4)', fontSize: '0.6rem' }}>
                      Sample dashboard
                    </p>
                    <p style={{ color: 'var(--ivory)', fontWeight: 600, marginTop: '0.25rem' }}>Benefits Engagement Overview</p>
                  </div>
                  <div
                    className="px-3 py-1 rounded-full font-mono-label"
                    style={{ background: 'rgba(232,163,61,0.2)', color: 'var(--ivory)', fontSize: '0.6rem' }}
                  >
                    Example
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: 'Active Employees', value: '847', change: 'example data' },
                    { label: 'Milestone Plans Started', value: '412', change: 'example data' },
                    { label: 'Open Enrollment Guides Viewed', value: '2,341', change: 'example data' },
                    { label: 'Program Engagement', value: '68%', change: 'example data' },
                  ].map(stat => (
                    <div
                      key={stat.label}
                      className="rounded-xl p-4"
                      style={{ background: 'rgba(245,243,235,0.05)' }}
                    >
                      <p className="font-mono-label mb-2" style={{ color: 'rgba(245,243,235,0.35)', fontSize: '0.55rem' }}>
                        {stat.label}
                      </p>
                      <p style={{ color: 'var(--ivory)', fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
                        {stat.value}
                      </p>
                      <p style={{ color: 'rgba(245,243,235,0.6)', fontSize: '0.72rem', marginTop: '0.2rem' }}>{stat.change}</p>
                    </div>
                  ))}
                </div>

                <div
                  className="rounded-xl p-4 flex items-start gap-3"
                  style={{ background: 'rgba(232,163,61,0.1)', border: '1px solid rgba(232,163,61,0.2)' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E8A33D" strokeWidth="2" className="flex-shrink-0 mt-0.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <p style={{ color: 'rgba(245,243,235,0.7)', fontSize: '0.75rem', lineHeight: 1.5 }}>
                    <strong style={{ color: 'var(--ivory)' }}>Privacy protected:</strong> Employers see aggregate wellness trends — never individual financial data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-28 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono-label mb-8" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
            Get Started
          </p>
          <h2 className="headline-lg mb-8" style={{ color: 'var(--forest)' }}>
            Help your employees
            <br />
            <em className="italic-accent">get ready for what&apos;s next.</em>
          </h2>
          <p
            style={{
              color: 'rgba(61,26,71,0.55)',
              fontSize: '1rem',
              lineHeight: 1.8,
              maxWidth: '420px',
              margin: '0 auto 2.5rem',
            }}
          >
            Offer a benefit that helps employees use what they already have and plan for the moments ahead.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/talk-to-sales" className="btn-forest">
              Get Started
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/for-employers" className="btn-outline" style={{ color: 'var(--forest)', borderColor: 'rgba(61,26,71,0.3)' }}>
              For Employers
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
