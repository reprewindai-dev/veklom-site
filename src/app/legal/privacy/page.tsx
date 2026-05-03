import type { Metadata } from 'next'
import { LegalDoc } from '@/components/LegalDoc'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Veklom collects, uses, retains, and shares information from customers and visitors to veklom.com.',
  alternates: { canonical: '/legal/privacy' },
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <LegalDoc title="Privacy Policy" updated="2026-05-03">
      <p>
        This policy describes how Veklom (&quot;Veklom&quot;, &quot;we&quot;,
        &quot;us&quot;) collects, uses, and shares information when you visit
        veklom.com or use our products.
      </p>
      <h2 className="text-xl font-semibold text-slate-900">Information we collect</h2>
      <p>
        We collect information you provide directly (such as contact form
        submissions, demo requests, and account details) and limited technical
        information (such as IP address, user agent, and request timing) to operate,
        secure, and improve our services.
      </p>
      <h2 className="text-xl font-semibold text-slate-900">How we use information</h2>
      <p>
        We use information to deliver and secure our services, respond to inquiries,
        meet legal obligations, and communicate with customers. We do not sell
        personal information.
      </p>
      <h2 className="text-xl font-semibold text-slate-900">Data subject rights</h2>
      <p>
        EU/UK and California residents may request access, deletion, or correction
        of their personal information by emailing privacy@veklom.com. We respond
        within statutory windows.
      </p>
      <h2 className="text-xl font-semibold text-slate-900">Contact</h2>
      <p>
        Questions about this policy: privacy@veklom.com. Security disclosures:
        security@veklom.com.
      </p>
    </LegalDoc>
  )
}
