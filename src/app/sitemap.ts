import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/seo'

const staticPaths = [
  '/',
  '/about',
  '/products',
  '/contact',
  '/marketplace',
  '/pricing',
  '/compliance',
  '/legal/privacy',
  '/legal/terms',
  '/legal/sla',
  '/legal/license',
  '/legal/acceptable-use',
  '/legal/refunds',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return staticPaths.map((path) => ({
    url: `${siteUrl}${path === '/' ? '' : path}`,
    lastModified,
    changeFrequency: path.startsWith('/legal') ? 'yearly' : 'monthly',
    priority: path === '/' ? 1.0 : 0.7,
  }))
}
