export const siteName = 'Veklom'
export const siteTitle = 'Governed AI Control Plane'
export const siteDescription =
  'Veklom is the governed AI control plane: deterministic authorization, audit-grade evidence, and operational control for production AI workloads.'
export const siteUrl = 'https://veklom.com'
export const ogImage = `${siteUrl}/og-image.png`
export const contactEmail = 'contact@veklom.com'
export const securityEmail = 'security@veklom.com'

export function absoluteUrl(path: string): string {
  if (!path.startsWith('/')) return `${siteUrl}/${path}`
  return `${siteUrl}${path}`
}

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description: siteDescription,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: contactEmail,
      availableLanguage: ['English'],
    },
    {
      '@type': 'ContactPoint',
      contactType: 'security',
      email: securityEmail,
      availableLanguage: ['English'],
    },
  ],
  sameAs: ['https://co2router.com'],
}

export const softwareApplicationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: `${siteName} Control Plane`,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Cloud',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    url: `${siteUrl}/pricing`,
  },
  publisher: {
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,
  },
  description:
    'Governed AI control plane that enforces deterministic authorization, traceability, and audit evidence for production AI workloads.',
}
