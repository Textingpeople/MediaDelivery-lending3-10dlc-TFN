'use client';

import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function IntegrationsPage() {
  return (
    <div style={{ background: 'var(--ivory)', color: 'var(--charcoal)' }}>
      <Nav />

      {/* ── HERO ── */}
      <section className="relative pt-48 pb-28 px-6" style={{ background: 'var(--forest)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-mono-label mb-8" style={{ color: 'rgba(245,243,235,0.45)', fontSize: '0.65rem' }}>
            Integrations
          </p>
          <h1 className="headline-xl text-white mb-8">
            Fits the benefits
            <br />
            <em className="italic-accent">you already run.</em>
          </h1>
          <p style={{ color: 'rgba(245,243,235,0.65)', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '520px', margin: '0 auto 2.5rem' }}>
            FutureReady is designed to sit alongside your existing benefits program. It explains the benefits you already offer and helps employees plan around them.
          </p>
          <Link href="/talk-to-sales" className="btn-primary">
            Talk to Sales
          </Link>
        </div>
      </section>

      {/* ── WHERE IT FITS ── */}
      <section className="py-28 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-mono-label mb-6" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
              Where FutureReady Fits
            </p>
            <h2 className="headline-lg" style={{ color: 'var(--forest)' }}>
              Built around your
              <br />
              <em className="italic-accent">existing benefits.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Retirement benefits',
                desc: 'Employees learn how a 401(k) match works and how to review their contribution so they can take full advantage of what the employer offers.',
              },
              {
                title: 'Health account benefits',
                desc: 'Plain-language guidance on HSA and FSA options, so employees can decide what fits their situation during open enrollment.',
              },
              {
                title: 'Open enrollment',
                desc: 'Timely reminders and simple explanations of enrollment choices, so employees understand their options before the deadline.',
              },
            ].map(item => (
              <div key={item.title} className="card-feature p-8">
                <h3 className="font-serif mb-3" style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--forest)' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'rgba(61,26,71,0.6)', fontSize: '0.9rem', lineHeight: 1.75 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="card-feature p-8 mt-8 text-center">
            <h3 className="font-serif mb-3" style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--forest)' }}>
              About integration support
            </h3>
            <p style={{ color: 'rgba(61,26,71,0.6)', fontSize: '0.9rem', lineHeight: 1.75, maxWidth: '640px', margin: '0 auto' }}>
              FutureReady provides educational content and does not need access to your benefits administration systems to get started. We do not claim direct integrations with specific third-party providers. Talk to us about what your organization needs.
            </p>
          </div>
        </div>
      </section>

      {/* ── PRIVACY ── */}
      <section className="py-24 px-6" style={{ background: 'var(--white)' }}>
        <div className="max-w-3xl mx-auto">
          <p className="font-mono-label mb-8 text-center" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
            Privacy &amp; Permissions
          </p>
          <div className="space-y-5">
            {[
              { title: 'Employees choose what to share', desc: 'Employees decide which details they enter into their milestone plans.' },
              { title: 'Employers see aggregates only', desc: 'Employers see aggregate engagement metrics, never an individual employee\'s information.' },
              { title: 'No data selling', desc: 'We never sell employee data to third parties.' },
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
          <div className="mt-8 text-center">
            <Link href="/privacy" style={{ color: 'var(--olive)', textDecoration: 'underline', fontSize: '0.85rem' }}>
              Read our full privacy policy
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
