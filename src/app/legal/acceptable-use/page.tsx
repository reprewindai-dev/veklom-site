import type { Metadata } from 'next'
import { LegalDoc } from '@/components/LegalDoc'

export const metadata: Metadata = {
  title: 'Acceptable Use Policy',
  description:
    'Veklom Acceptable Use Policy describing prohibited content, conduct, and operational misuse.',
  alternates: { canonical: '/legal/acceptable-use' },
  robots: { index: true, follow: true },
}

export default function AcceptableUsePage() {
  return (
    <LegalDoc title="Acceptable Use Policy" updated="2026-05-03">
      <p>
        This policy applies to all use of Veklom services. Violations may result in
        suspension or termination.
      </p>
      <h2 className="text-xl font-semibold text-slate-900">Prohibited use</h2>
      <ul className="list-disc space-y-1 pl-6">
        <li>Unlawful, fraudulent, or deceptive activity.</li>
        <li>
          Generating or distributing malware, spam, or content that infringes
          third-party rights.
        </li>
        <li>
          Attempting to disrupt the integrity or availability of the service or to
          access data not authorized to you.
        </li>
        <li>
          Using the service to bypass safety, content, or compliance controls
          required by your jurisdiction.
        </li>
      </ul>
      <h2 className="text-xl font-semibold text-slate-900">Reporting</h2>
      <p>Report abuse to abuse@veklom.com.</p>
    </LegalDoc>
  )
}
