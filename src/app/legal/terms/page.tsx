import type { Metadata } from 'next'
import { LegalDoc } from '@/components/LegalDoc'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms governing use of Veklom products, the veklom.com website, and Veklom subscription services.',
  alternates: { canonical: '/legal/terms' },
  robots: { index: true, follow: true },
}

export default function TermsPage() {
  return (
    <LegalDoc title="Terms of Service" updated="2026-05-03">
      <p>
        These terms govern your use of veklom.com and Veklom products. By accessing
        the site or using a product, you agree to these terms.
      </p>
      <h2 className="text-xl font-semibold text-slate-900">Use of services</h2>
      <p>
        You agree to use the services in compliance with applicable laws and our
        Acceptable Use Policy. You are responsible for the security of your
        credentials and the conduct of users under your account.
      </p>
      <h2 className="text-xl font-semibold text-slate-900">Subscriptions and fees</h2>
      <p>
        Paid plans are billed per the order form or pricing page. Fees are
        non-refundable except as set out in our Refunds policy.
      </p>
      <h2 className="text-xl font-semibold text-slate-900">Termination</h2>
      <p>
        Either party may terminate for material breach not cured within 30 days.
        Sections that by their nature survive will survive termination.
      </p>
      <h2 className="text-xl font-semibold text-slate-900">Liability</h2>
      <p>
        To the maximum extent permitted by law, neither party is liable for
        indirect, incidental, or consequential damages.
      </p>
      <h2 className="text-xl font-semibold text-slate-900">Contact</h2>
      <p>Legal contact: legal@veklom.com.</p>
    </LegalDoc>
  )
}
