import { ArrowUpRight } from 'lucide-react'
import { NAV_LINKS } from '../constants/site'

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex items-center justify-between px-8 lg:px-12">
      {/* Logo circle */}
      <a
        href="#"
        className="liquid-glass flex size-12 items-center justify-center rounded-full"
      >
        <span className="font-heading text-2xl text-white italic">a</span>
      </a>

      {/* Navigation pill (desktop only) */}
      <nav className="liquid-glass hidden items-center rounded-full px-1.5 py-1.5 md:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="font-body px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#claim"
          className="font-body ml-1 inline-flex items-center gap-1 rounded-full bg-white px-4 py-2 text-sm font-medium whitespace-nowrap text-black"
        >
          Claim a Spot
          <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
        </a>
      </nav>

      {/* Invisible spacer to balance the logo */}
      <div aria-hidden className="size-12" />
    </header>
  )
}
