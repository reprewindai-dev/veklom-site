import type { ReactNode } from 'react'

export function LegalDoc({
  title,
  updated,
  children,
}: {
  title: string
  updated: string
  children: ReactNode
}) {
  return (
    <article className="max-w-3xl space-y-6">
      <div className="eyebrow">Legal</div>
      <h1 className="text-3xl font-semibold text-slate-900">{title}</h1>
      <p className="text-sm text-slate-500">Last updated: {updated}</p>
      <div className="space-y-4 text-base leading-7 text-slate-700">{children}</div>
    </article>
  )
}
