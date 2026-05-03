import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

const capabilities = [
  {
    title: 'Execution governance',
    detail:
      'Authorize every AI invocation against deterministic policy. Block, allow, or shape execution before any side effect lands.',
  },
  {
    title: 'Audit-grade evidence',
    detail:
      'Every decision is signed, replayable, and exportable to your compliance program. No gaps between intent and runtime.',
  },
  {
    title: 'Operational leverage',
    detail:
      'Reduce risk and unit cost by governing AI execution at the edge. One control plane across model, vendor, and region.',
  },
]

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="space-y-5" aria-labelledby="hero-heading">
        <div className="eyebrow">Veklom — Governed AI Control Plane</div>
        <h1
          id="hero-heading"
          className="text-4xl font-semibold text-slate-900 sm:text-5xl"
        >
          Governance-first infrastructure control for production AI.
        </h1>
        <p className="max-w-2xl text-lg text-slate-600">
          Veklom keeps AI execution accountable, auditable, and secure. Deterministic
          authorization, signed evidence, and one control plane across models, vendors,
          and regions. CO2 Router is our flagship product for environmental authorization.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact?intent=trial"
            data-analytics-event="cta_start_trial"
            data-analytics-location="home_hero"
            className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white"
          >
            Start trial
          </Link>
          <Link
            href="/contact?intent=architecture-review"
            data-analytics-event="cta_book_architecture_review"
            data-analytics-location="home_hero"
            className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700"
          >
            Book architecture review
          </Link>
          <Link
            href="/contact?intent=live-demo"
            data-analytics-event="cta_run_live_demo"
            data-analytics-location="home_hero"
            className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700"
          >
            Run live demo
          </Link>
          <Link
            href="/pricing"
            data-analytics-event="cta_view_pricing"
            data-analytics-location="home_hero"
            className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700"
          >
            View pricing
          </Link>
          <Link
            href="/marketplace"
            data-analytics-event="cta_marketplace"
            data-analytics-location="home_hero"
            className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700"
          >
            Marketplace
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3" aria-label="Capabilities">
        {capabilities.map((item) => (
          <div key={item.title} className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
