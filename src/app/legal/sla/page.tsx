import type { Metadata } from 'next'
import { LegalDoc } from '@/components/LegalDoc'

export const metadata: Metadata = {
  title: 'Service Level Agreement',
  description:
    'Veklom Service Level Agreement covering availability targets, measurement, and service credits.',
  alternates: { canonical: '/legal/sla' },
  robots: { index: true, follow: true },
}

export default function SlaPage() {
  return (
    <LegalDoc title="Service Level Agreement" updated="2026-05-03">
      <p>
        This SLA applies to paid Veklom production tiers. Availability is measured
        per calendar month against the control-plane API.
      </p>
      <h2 className="text-xl font-semibold text-slate-900">Availability target</h2>
      <p>
        Standard tier: 99.9%. Enterprise tier: 99.95%. Excludes scheduled
        maintenance announced at least 72 hours in advance and force majeure events.
      </p>
      <h2 className="text-xl font-semibold text-slate-900">Service credits</h2>
      <p>
        If monthly availability falls below the target, eligible customers receive
        service credits ranging from 10% to 30% of monthly fees, applied to the next
        invoice.
      </p>
      <h2 className="text-xl font-semibold text-slate-900">Claim procedure</h2>
      <p>
        Submit credit requests within 30 days of the affected month to
        billing@veklom.com with the relevant request IDs.
      </p>
    </LegalDoc>
  )
}
