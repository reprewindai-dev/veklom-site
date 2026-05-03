import Link from 'next/link'
import type { Metadata } from 'next'
import { ogImage, siteName, siteUrl } from '@/lib/seo'

const description =
  'Browse Veklom Marketplace listings: control plane policy packs, governance integrations, and CO2 Router add-ons for production AI workloads.'

export const metadata: Metadata = {
  title: 'Marketplace',
  description,
  alternates: { canonical: '/marketplace' },
  openGraph: {
    type: 'website',
    title: `Marketplace | ${siteName}`,
    description,
    url: `${siteUrl}/marketplace`,
    images: [{ url: ogImage, width: 1200, height: 630, alt: 'Veklom Marketplace' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Marketplace | ${siteName}`,
    description,
    images: [ogImage],
  },
}

type Listing = {
  id: string
  name: string
  category: string
  summary: string
  details: string
  price: string
}

const listings: Listing[] = [
  {
    id: 'co2-router-policy-pack',
    name: 'CO2 Router Policy Pack',
    category: 'Governance',
    summary:
      'Pre-built deterministic authorization policies covering region, model class, and PII classes.',
    details:
      'Drop-in policies for CO2 Router. Includes signed evidence templates, replay-safe defaults, and example deny/allow flows for common regulated workloads.',
    price: 'Included with Pro',
  },
  {
    id: 'audit-evidence-exporter',
    name: 'Audit Evidence Exporter',
    category: 'Compliance',
    summary:
      'Streams signed control-plane decisions to S3, GCS, or Azure Blob in evidence-ready format.',
    details:
      'Exports per-decision JSON with signature chain, request lineage, and policy version. Supports SOC 2, ISO 27001, and HIPAA evidence workflows.',
    price: 'From $49/mo',
  },
  {
    id: 'tenant-isolation-blueprint',
    name: 'Tenant Isolation Blueprint',
    category: 'Security',
    summary:
      'Reference architecture for multi-tenant AI workloads with per-tenant key scoping and quota guards.',
    details:
      'Deployable Terraform modules and policy bundles, plus runbook for break-glass access. Designed for B2B SaaS adopting governed AI.',
    price: 'Free download',
  },
]

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: listings.map((listing, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'SoftwareApplication',
      name: listing.name,
      applicationCategory: listing.category,
      description: listing.summary,
      url: `${siteUrl}/marketplace#${listing.id}`,
      offers: {
        '@type': 'Offer',
        price: listing.price.match(/\d+/)?.[0] ?? '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
    },
  })),
}

export default function MarketplacePage() {
  return (
    <div className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <header className="space-y-4" aria-labelledby="marketplace-heading">
        <div className="eyebrow">Marketplace</div>
        <h1
          id="marketplace-heading"
          className="text-3xl font-semibold text-slate-900 sm:text-4xl"
        >
          Veklom Marketplace
        </h1>
        <p className="max-w-2xl text-base text-slate-600">{description}</p>
      </header>

      <ul className="grid gap-6 md:grid-cols-2">
        {listings.map((listing) => (
          <li
            key={listing.id}
            id={listing.id}
            className="flex flex-col rounded-2xl border border-slate-200 p-6"
          >
            <span className="eyebrow">{listing.category}</span>
            <h2 className="mt-2 text-xl font-semibold text-slate-900">
              {listing.name}
            </h2>
            <p className="mt-2 text-sm text-slate-600">{listing.summary}</p>
            <p className="mt-3 text-sm text-slate-500">{listing.details}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-900">
                {listing.price}
              </span>
              <Link
                href={`/contact?intent=marketplace&item=${listing.id}`}
                data-analytics-event="cta_marketplace_inquire"
                data-analytics-item={listing.id}
                className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
              >
                Request access
              </Link>
            </div>
          </li>
        ))}
      </ul>

      <section
        aria-labelledby="signin-heading"
        className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
      >
        <h2 id="signin-heading" className="text-lg font-semibold text-slate-900">
          Already a customer?
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Sign in to your Veklom account to install marketplace items, manage license
          keys, and review evidence exports.
        </p>
        <Link
          href="/contact?intent=sign-in"
          data-analytics-event="cta_sign_in"
          data-analytics-location="marketplace"
          className="mt-3 inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700"
        >
          Sign in
        </Link>
      </section>
    </div>
  )
}
