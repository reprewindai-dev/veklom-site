import type { ReactNode } from 'react'

export type LegalTocItem = { id: string; label: string }

export function LegalDoc({
  title,
  updated,
  effective,
  intro,
  toc,
  children,
}: {
  title: string
  updated: string
  effective?: string
  intro?: ReactNode
  toc?: LegalTocItem[]
  children: ReactNode
}) {
  return (
    <article className="max-w-3xl space-y-6">
      <div className="eyebrow">Legal</div>
      <h1 className="text-3xl font-semibold text-slate-900">{title}</h1>
      <p className="text-sm text-slate-500">
        Last updated: {updated}
        {effective ? <> &middot; Effective date: {effective}</> : null}
      </p>
      {intro ? (
        <div className="space-y-4 text-base leading-7 text-slate-700">{intro}</div>
      ) : null}
      {toc && toc.length > 0 ? (
        <nav
          aria-label="Table of contents"
          className="rounded-md border border-slate-200 bg-slate-50 p-5"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
            Table of contents
          </h2>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-slate-700 marker:text-slate-400">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="hover:text-slate-900 hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      ) : null}
      <div className="space-y-5 text-base leading-7 text-slate-700 [&_h2]:mt-10 [&_h2]:scroll-mt-24 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-900 [&_h3]:mt-6 [&_h3]:scroll-mt-24 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-slate-900 [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_ol]:mt-3 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-1 [&_dl]:mt-3 [&_dl]:space-y-2 [&_dt]:font-semibold [&_dt]:text-slate-900 [&_dd]:ml-0">
        {children}
      </div>
    </article>
  )
}
