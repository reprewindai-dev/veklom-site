import Link from 'next/link'
import type { Metadata } from 'next'
import { ogImage, siteName, siteUrl } from '@/lib/seo'

const description =
  'Veklom pricing for the governed AI control plane. Plans for evaluation, production teams, and regulated enterprise deployments.'

export const metadata: Metadata = {
  title: 'Pricing',
  description,
  alternates: { canonical: '/pricing' },
  openGraph: {
    type: 'website',
    title: `Pricing | ${siteName}`,
    description,
    url: `${siteUrl}/pricing`,
    images: [{ url: ogImage, width: 1200, height: 630, alt: 'Veklom Pricing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Pricing | ${siteName}`,
    description,
    images: [ogImage],
  },
}

const plans = [
  {
    id: 'evaluation',
    name: 'Evaluation',
    price: 'Free',
    cadence: '',
    summary:
      'For teams running a 30-day evaluation of the governed AI control plane.',
    features: [
      'Up to 100k governed requests per month',
      'Single environment, single region',
      'Email support',
      'Basic evidence export',
    ],
    cta: { href: '/contact?intent=trial', label: 'Start trial' },
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$1,500',
    cadence: 'per month, billed annually',
    summary:
      'For production teams adopting deterministic authorization across vendors.',
    features: [
      'Up to 5M governed requests per month',
      'Multi-region, multi-environment',
      'CO2 Router Policy Pack included',
      'Signed evidence export to S3/GCS/Azure',
      'Business-hours support with SLA',
    ],
    cta: { href: '/contact?intent=pro', label: 'Talk to sales' },
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    cadence: 'annual contract',
    summary:
      'For regulated workloads with bespoke isolation, residency, or audit needs.',
    features: [
      'Unlimited governed requests, dedicated tenancy options',
      'Customer-managed keys (CMK) and HSM integration',
      'HIPAA / BAA available; data residency controls',
      'SOC 2 evidence package and audit support',
      '24/7 support with 99.95% SLA',
    ],
    cta: {
      href: '/contact?intent=enterprise',
      label: 'Contact enterprise sales',
    },
  },
]

const offerCatalogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: `${siteName} Control Plane`,
  description,
  brand: { '@type': 'Brand', name: siteName },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    lowPrice: '0',
    highPrice: '50000',
    offerCount: plans.length,
    url: `${siteUrl}/pricing`,
  },
}

export default function PricingPage() {
  return (
    <div className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogJsonLd) }}
      />
      <header className="space-y-4" aria-labelledby="pricing-heading">
        <div className="eyebrow">Pricing</div>
        <h1
          id="pricing-heading"
          className="text-3xl font-semibold text-slate-900 sm:text-4xl"
        >
          Plans for every stage of governed AI
        </h1>
        <p className="max-w-2xl text-base text-slate-600">{description}</p>
      </header>

      <ul className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <li
            key={plan.id}
            id={plan.id}
            className="flex flex-col rounded-2xl border border-slate-200 p-6"
          >
            {/* sr-only H3 keeps the per-plan heading hierarchy consistent under H2-style "Plans" sections */}
            <span className="eyebrow">{plan.name}</span>
            <h3 className="sr-only">{plan.name} plan</h3>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-semibold text-slate-900">
                {plan.price}
              </span>
              {plan.cadence ? (
                <span className="text-sm text-slate-500">{plan.cadence}</span>
              ) : null}
            </div>
            <p className="mt-3 text-sm text-slate-600">{plan.summary}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span aria-hidden="true">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href={plan.cta.href}
              data-analytics-event="cta_view_pricing_plan"
              data-analytics-plan={plan.id}
              className="mt-6 inline-flex justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
            >
              {plan.cta.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
