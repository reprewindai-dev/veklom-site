import Link from 'next/link'
import type { Metadata } from 'next'
import { ogImage, securityEmail, siteName, siteUrl } from '@/lib/seo'

const description =
  'Veklom compliance posture: SOC 2 status, HIPAA/BAA availability, data residency, deployment modes, security contact, and audit artifacts.'

export const metadata: Metadata = {
  title: 'Compliance',
  description,
  alternates: { canonical: '/compliance' },
  openGraph: {
    type: 'website',
    title: `Compliance | ${siteName}`,
    description,
    url: `${siteUrl}/compliance`,
    images: [{ url: ogImage, width: 1200, height: 630, alt: 'Veklom Compliance' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Compliance | ${siteName}`,
    description,
    images: [ogImage],
  },
}

export default function CompliancePage() {
  return (
    <div className="space-y-10">
      <header className="space-y-4" aria-labelledby="compliance-heading">
        <div className="eyebrow">Compliance</div>
        <h1
          id="compliance-heading"
          className="text-3xl font-semibold text-slate-900 sm:text-4xl"
        >
          Compliance and security posture
        </h1>
        <p className="max-w-2xl text-base text-slate-600">
          We publish what we have, not what we wish we had. The summary below
          reflects current state — not future commitments.
        </p>
      </header>

      <section
        aria-labelledby="soc2-heading"
        className="rounded-2xl border border-slate-200 p-6"
      >
        <h2 id="soc2-heading" className="text-xl font-semibold text-slate-900">
          SOC 2
        </h2>
        <p className="mt-2 text-sm text-slate-700">
          Veklom is operating against SOC 2 Type II controls (security and
          availability trust criteria). A Type II report covering the current
          observation window is available under NDA via{' '}
          <a className="underline" href={`mailto:${securityEmail}`}>
            {securityEmail}
          </a>
          .
        </p>
      </section>

      <section
        aria-labelledby="hipaa-heading"
        className="rounded-2xl border border-slate-200 p-6"
      >
        <h2 id="hipaa-heading" className="text-xl font-semibold text-slate-900">
          HIPAA and BAA
        </h2>
        <p className="mt-2 text-sm text-slate-700">
          A Business Associate Agreement (BAA) is available for Enterprise
          customers using Veklom in scopes that process Protected Health
          Information. Contact enterprise sales to scope a BAA before sending PHI
          through the service.
        </p>
      </section>

      <section
        aria-labelledby="residency-heading"
        className="rounded-2xl border border-slate-200 p-6"
      >
        <h2
          id="residency-heading"
          className="text-xl font-semibold text-slate-900"
        >
          Data residency
        </h2>
        <p className="mt-2 text-sm text-slate-700">
          Control-plane data can be pinned to US, EU (Frankfurt), or UK regions.
          Customer-managed encryption keys (CMK) are supported for Enterprise
          tenancy. Cross-region replication is opt-in.
        </p>
      </section>

      <section
        aria-labelledby="deployment-heading"
        className="rounded-2xl border border-slate-200 p-6"
      >
        <h2
          id="deployment-heading"
          className="text-xl font-semibold text-slate-900"
        >
          Deployment modes
        </h2>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-slate-700">
          <li>Multi-tenant SaaS (default).</li>
          <li>Dedicated single-tenant cloud (Enterprise).</li>
          <li>
            Customer-hosted control plane on AWS, GCP, or Azure (Enterprise; via
            Terraform module).
          </li>
        </ul>
      </section>

      <section
        aria-labelledby="artifacts-heading"
        className="rounded-2xl border border-slate-200 p-6"
      >
        <h2
          id="artifacts-heading"
          className="text-xl font-semibold text-slate-900"
        >
          Audit artifacts
        </h2>
        <p className="mt-2 text-sm text-slate-700">
          Available under NDA: SOC 2 Type II report, penetration test executive
          summary, security whitepaper, incident response plan summary, sub-processor
          list, and DPA template.
        </p>
        <Link
          href="/contact?intent=compliance-artifacts"
          data-analytics-event="cta_compliance_artifacts"
          className="mt-4 inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
        >
          Request artifacts
        </Link>
      </section>

      <section
        aria-labelledby="security-contact-heading"
        className="rounded-2xl border border-slate-200 p-6"
      >
        <h2
          id="security-contact-heading"
          className="text-xl font-semibold text-slate-900"
        >
          Security contact
        </h2>
        <p className="mt-2 text-sm text-slate-700">
          Report vulnerabilities to{' '}
          <a className="underline" href={`mailto:${securityEmail}`}>
            {securityEmail}
          </a>
          . PGP key available on request. We respond within one business day and do
          not pursue good-faith researchers.
        </p>
      </section>
    </div>
  )
}
