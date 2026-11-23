'use client';

import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const milestones = [
  {
    title: 'First home',
    desc: 'Understand the steps before buying: reviewing your credit report, planning for a down payment and closing costs, and checking which benefits may help.',
    steps: ['Review your credit report', 'Learn how down payments and closing costs work', 'Check for employer or HSA-related benefits that may apply'],
  },
  {
    title: 'Student-loan payoff',
    desc: 'Learn the common payoff approaches and whether an employer student-loan benefit is available to you.',
    steps: ['List your loans and servicers', 'Compare common payoff approaches', 'Ask HR about employer student-loan benefits'],
  },
  {
    title: 'Growing a family',
    desc: 'Get ready for the benefit decisions that come with a new child, including enrollment windows after a qualifying life event.',
    steps: ['Learn about special enrollment after a life event', 'Review health coverage and FSA/HSA options', 'Check leave and dependent-care benefits'],
  },
  {
    title: 'Career changes',
    desc: 'Know what happens to your benefits and your 401(k) when you change jobs or roles.',
    steps: ['Review what happens to your 401(k)', 'Understand when health coverage ends', 'Check how your HSA or FSA is treated'],
  },
  {
    title: 'Retirement readiness',
    desc: 'Make sure you understand the retirement benefits you already have and the questions worth asking as retirement gets closer.',
    steps: ['Confirm you are getting the full 401(k) match', 'Review your plan options in plain language', 'Learn about health coverage in retirement'],
  },
];

export default function MilestonesPage() {
  return (
    <div style={{ background: 'var(--ivory)', color: 'var(--charcoal)' }}>
      <Nav />

      {/* ── HERO ── */}
      <section className="relative pt-48 pb-28 px-6" style={{ background: 'var(--forest)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-mono-label mb-8" style={{ color: 'rgba(245,243,235,0.45)', fontSize: '0.65rem' }}>
            Life Milestones
          </p>
          <h1 className="headline-xl text-white mb-8">
            Plan for the
            <br />
            <em className="italic-accent">moments that matter.</em>
          </h1>
          <p style={{ color: 'rgba(245,243,235,0.65)', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '520px', margin: '0 auto 2.5rem' }}>
            Educational milestone guides help employees understand the benefits they already have and the steps to take before life&apos;s big moments.
          </p>
          <Link href="/talk-to-sales" className="btn-primary">
            Get Started
          </Link>
        </div>
      </section>

      {/* ── MILESTONES ── */}
      <section className="py-28 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-mono-label mb-6" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
              Milestone Guides
            </p>
            <h2 className="headline-lg" style={{ color: 'var(--forest)' }}>
              Five milestones,
              <br />
              <em className="italic-accent">one clear path each.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {milestones.map(m => (
              <div key={m.title} className="card-feature p-8">
                <h3 className="font-serif mb-3" style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--forest)' }}>
                  {m.title}
                </h3>
                <p style={{ color: 'rgba(61,26,71,0.6)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                  {m.desc}
                </p>
                <ul className="space-y-2">
                  {m.steps.map(s => (
                    <li key={s} className="flex items-start gap-2" style={{ fontSize: '0.85rem', color: 'var(--charcoal)' }}>
                      <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--olive)' }} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p style={{ color: 'rgba(61,26,71,0.5)', fontSize: '0.8rem', lineHeight: 1.7, textAlign: 'center', marginTop: '2rem' }}>
            Guides are general educational content. FutureReady is not a registered investment adviser and does not provide investment, tax or legal advice.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 px-6" style={{ background: 'var(--forest)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="headline-lg text-white mb-8">
            Help your team
            <br />
            <em className="italic-accent">get ready for what&apos;s next.</em>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/talk-to-sales" className="btn-primary">
              Talk to Sales
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
