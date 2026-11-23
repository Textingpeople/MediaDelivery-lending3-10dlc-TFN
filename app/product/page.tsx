'use client';

import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function ProductPage() {
  return (
    <div style={{ background: 'var(--ivory)', color: 'var(--charcoal)' }}>
      <Nav />

      {/* ── HERO ── */}
      <section
        className="relative pt-48 pb-28 px-6"
        style={{ background: 'var(--forest)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-mono-label mb-8" style={{ color: 'rgba(245,243,235,0.45)', fontSize: '0.65rem' }}>
            The Product
          </p>
          <h1 className="headline-xl text-white mb-8">
            Ready for
            <br />
            <em className="italic-accent">every milestone.</em>
          </h1>
          <p style={{ color: 'rgba(245,243,235,0.65)', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '520px', margin: '0 auto 2.5rem' }}>
            FutureReady brings together benefits education, milestone planning and a Milestone Planner for educational guidance — all in one calm, unified experience.
          </p>
          <Link href="/talk-to-sales" className="btn-primary">
            Get Started
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── CORE FEATURES ── */}
      <section className="py-28 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="font-mono-label mb-6" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
              Core Features
            </p>
            <h2 className="headline-lg" style={{ color: 'var(--forest)' }}>
              Everything employees need
              <br />
              <em className="italic-accent">to get ready for what&apos;s next.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Milestone Planner',
                desc: 'Employees can ask the Milestone Planner about their benefits and life milestones — what to know before a first home, how open enrollment works, what a career change means for their 401(k). It gives educational guidance, not investment, tax or legal advice.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 5v6m0 4h.01" />
                  </svg>
                ),
              },
              {
                title: 'Milestone Dashboard',
                desc: 'A clear, calm view of the milestones an employee is preparing for and the benefit steps that matter for each. Employees see what to do next — without feeling overwhelmed.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                  </svg>
                ),
              },
              {
                title: 'Milestone Plans',
                desc: 'Step-by-step plans for a first home, student-loan payoff, growing a family, a career change or retirement readiness. Employees can revisit their plan as life changes.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                ),
              },
              {
                title: 'Open Enrollment Guidance',
                desc: 'Plain-language explanations of medical, dental, HSA/FSA and other enrollment choices, with reminders of key dates so employees can choose with confidence.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                ),
              },
              {
                title: 'Student-Loan Payoff Planning',
                desc: 'Educational guides to common student-loan payoff approaches, plus whether an employer student-loan benefit may be available, so employees can plan the road to payoff.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4l3 3" />
                  </svg>
                ),
              },
              {
                title: 'Benefits & Retirement Readiness',
                desc: 'Help employees understand their 401(k) match, HSA/FSA and other benefits they already have, with plain-language explanations that support confident decisions.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                ),
              },
            ].map((feature, i) => (
              <div key={i} className="card-feature p-8">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(61,26,71,0.08)', color: 'var(--forest)' }}
                >
                  {feature.icon}
                </div>
                <h3
                  className="font-serif mb-3"
                  style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--forest)' }}
                >
                  {feature.title}
                </h3>
                <p style={{ color: 'rgba(61,26,71,0.6)', fontSize: '0.9rem', lineHeight: 1.75 }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRIVACY SECTION ── */}
      <section className="py-28 px-6" style={{ background: 'var(--white)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono-label mb-6" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
                Privacy First
              </p>
              <h2 className="headline-lg mb-6" style={{ color: 'var(--forest)' }}>
                Financial data is
                <br />
                <em className="italic-accent">deeply personal.</em>
              </h2>
              <p style={{ color: 'rgba(61,26,71,0.6)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                FutureReady is built with privacy at its core. Employees control exactly what they connect and share. Their individual financial data is never visible to their employer.
              </p>
              <div className="space-y-5">
                {[
                  { title: 'Bank-level encryption', desc: 'All financial data is encrypted in transit and at rest.' },
                  { title: 'Employee-controlled access', desc: 'Employees connect accounts themselves and can disconnect anytime.' },
                  { title: 'Employer sees only aggregates', desc: 'Companies see program engagement metrics — never individual data.' },
                  { title: 'No data selling', desc: 'We never sell or share employee financial data with third parties.' },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(61,26,71,0.1)' }}
                    >
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="var(--forest)" strokeWidth="3">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, color: 'var(--forest)', fontSize: '0.9rem', marginBottom: '0.2rem' }}>{item.title}</p>
                      <p style={{ color: 'rgba(61,26,71,0.55)', fontSize: '0.85rem' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Privacy visual */}
            <div
              className="rounded-2xl p-8"
              style={{ background: 'var(--ivory)', border: '1px solid rgba(61,26,71,0.1)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center"
                  style={{ background: 'var(--forest)' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontWeight: 600, color: 'var(--forest)', fontSize: '0.9rem' }}>Your Financial Data</p>
                  <p className="font-mono-label" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>You control what you share</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { label: 'Milestone selections', connected: true },
                  { label: 'Benefit elections', connected: true },
                  { label: 'Plan checklists', connected: true },
                  { label: 'Retirement accounts', connected: false },
                  { label: 'Credit score', connected: false },
                ].map(item => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between p-3 rounded-xl"
                    style={{ background: 'rgba(61,26,71,0.04)', border: '1px solid rgba(61,26,71,0.08)' }}
                  >
                    <span style={{ fontSize: '0.85rem', color: 'var(--charcoal)', fontWeight: 500 }}>{item.label}</span>
                    <div
                      className="w-9 h-5 rounded-full flex items-center px-0.5 transition-all"
                      style={{ background: item.connected ? 'var(--olive)' : 'rgba(61,26,71,0.15)' }}
                    >
                      <div
                        className="w-4 h-4 bg-white rounded-full shadow-sm transition-all"
                        style={{ transform: item.connected ? 'translateX(16px)' : 'translateX(0)' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '0.72rem', color: 'rgba(61,26,71,0.4)', marginTop: '1rem', textAlign: 'center' }}>
                Conceptual — employees control their own permissions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 px-6" style={{ background: 'var(--forest)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="headline-lg text-white mb-8">
            Ready to help your team
            <br />
            <em className="italic-accent">get ready for what&apos;s next?</em>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/talk-to-sales" className="btn-primary">
              Get Started →
            </Link>
            <Link href="/for-employers" className="btn-outline">
              For Employers
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
