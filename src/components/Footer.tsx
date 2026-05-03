import Link from 'next/link'

const legal = [
  { href: '/legal/privacy', label: 'Privacy' },
  { href: '/legal/terms', label: 'Terms' },
  { href: '/legal/acceptable-use', label: 'Acceptable Use' },
  { href: '/legal/sla', label: 'SLA' },
  { href: '/legal/license', label: 'License' },
  { href: '/legal/vendor-agreement', label: 'Vendor Agreement' },
  { href: '/legal/refunds', label: 'Refunds' },
]

const product = [
  { href: '/products', label: 'Products' },
  { href: '/marketplace', label: 'Marketplace' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/compliance', label: 'Compliance' },
]

const company = [
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-slate-200" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container py-10 text-sm text-slate-600">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="font-semibold text-slate-800">Veklom</div>
            <p className="mt-2 max-w-xs text-slate-600">
              The governed AI control plane: deterministic authorization, signed
              evidence, and operational control.
            </p>
          </div>
          <FooterColumn title="Product" links={product} />
          <FooterColumn title="Legal" links={legal} />
          <FooterColumn title="Company" links={company} />
        </div>
        <p className="mt-10 text-xs text-slate-500">
          &copy; 2026 Veklom. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: { href: string; label: string }[]
}) {
  return (
    <div>
      <h3 className="font-semibold text-slate-800">{title}</h3>
      <ul className="mt-2 space-y-1">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-slate-900">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
