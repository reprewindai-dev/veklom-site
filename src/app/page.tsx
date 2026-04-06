import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <div className="eyebrow">Veklom</div>
        <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">
          Governance-first infrastructure control.
        </h1>
        <p className="max-w-2xl text-lg text-slate-600">
          Veklom builds control systems that keep execution accountable, auditable, and secure.
          CO2 Router is our flagship product for deterministic environmental authorization.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/products"
            className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white"
          >
            View products
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700"
          >
            Contact us
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: 'Execution governance',
            detail: 'Control, prove, and audit decisions before work runs.',
          },
          {
            title: 'Security posture',
            detail: 'Continuous verification and transparent evidence trails.',
          },
          {
            title: 'Operational leverage',
            detail: 'Reduce risk and cost by governing execution at the edge.',
          },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
