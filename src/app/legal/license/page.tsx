import type { Metadata } from 'next'
import { LegalDoc } from '@/components/LegalDoc'

export const metadata: Metadata = {
  title: 'License',
  description:
    'License terms for Veklom software, SDKs, and documentation distributed through veklom.com.',
  alternates: { canonical: '/legal/license' },
  robots: { index: true, follow: true },
}

export default function LicensePage() {
  return (
    <LegalDoc title="License" updated="2026-05-03">
      <p>
        Veklom grants customers a non-exclusive, non-transferable license to use
        Veklom software and SDKs in accordance with the customer&apos;s order form
        and the Terms of Service.
      </p>
      <h2 className="text-xl font-semibold text-slate-900">Restrictions</h2>
      <p>
        You may not reverse engineer, sublicense, or redistribute Veklom software
        except where expressly permitted by law or by written agreement.
      </p>
      <h2 className="text-xl font-semibold text-slate-900">Open source components</h2>
      <p>
        Open source components are licensed under their respective licenses; the
        full inventory is available on request.
      </p>
    </LegalDoc>
  )
}
