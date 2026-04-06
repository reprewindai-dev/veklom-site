import Link from 'next/link'

export default function ProductsPage() {
  return (
    <div className="space-y-8">
      <div className="eyebrow">Products</div>
      <h1 className="text-3xl font-semibold text-slate-900">Product portfolio</h1>
      <div className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold text-slate-900">CO2 Router</h2>
        <p className="mt-2 text-sm text-slate-600">
          Deterministic environmental authorization for compute. Govern execution with trace, replay,
          and proof in one decision surface.
        </p>
        <Link
          href="https://co2router.com"
          className="mt-4 inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
        >
          Visit CO2 Router
        </Link>
      </div>
    </div>
  )
}
