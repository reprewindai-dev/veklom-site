import Link from 'next/link'

const links = [
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact' },
]

export function Nav() {
  return (
    <header className="border-b border-slate-200">
      <div className="container flex items-center justify-between py-5">
        <Link href="/" className="text-lg font-semibold text-slate-900">
          Veklom
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-slate-900">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
