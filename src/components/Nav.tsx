import Link from 'next/link'

const links = [
  { href: '/products', label: 'Products' },
  { href: '/marketplace', label: 'Marketplace' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/compliance', label: 'Compliance' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Nav() {
  return (
    <header className="border-b border-slate-200">
      <div className="container flex items-center justify-between py-5">
        <Link
          href="/"
          aria-label="Veklom home"
          className="text-lg font-semibold text-slate-900"
        >
          Veklom
        </Link>
        <nav
          aria-label="Primary"
          className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-slate-600"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-analytics-event="nav_click"
              data-analytics-target={link.href}
              className="hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
