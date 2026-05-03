import type { Metadata } from 'next'
import { LegalDoc } from '@/components/LegalDoc'

export const metadata: Metadata = {
  title: 'Refunds',
  description:
    'Refund policy for Veklom subscriptions, marketplace purchases, and professional services.',
  alternates: { canonical: '/legal/refunds' },
  robots: { index: true, follow: true },
}

export default function RefundsPage() {
  return (
    <LegalDoc title="Refunds" updated="2026-05-03">
      <p>
        Veklom offers refunds in the limited circumstances described below. All
        other fees are non-refundable.
      </p>
      <h2 className="text-xl font-semibold text-slate-900">Subscriptions</h2>
      <p>
        New paid subscriptions may be cancelled within 14 days of first purchase
        for a full refund, unless prohibited by your local consumer law (in which
        case the law-mandated window applies).
      </p>
      <h2 className="text-xl font-semibold text-slate-900">Marketplace purchases</h2>
      <p>
        One-time marketplace purchases are refundable within 7 days if the listed
        functionality is materially unavailable. Contact billing@veklom.com.
      </p>
      <h2 className="text-xl font-semibold text-slate-900">Professional services</h2>
      <p>
        Professional services fees are non-refundable once work has begun, unless
        the order form specifies otherwise.
      </p>
    </LegalDoc>
  )
}
