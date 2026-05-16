import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/news", label: "News" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex items-end gap-1 text-4xl font-bold">
            <span className="text-[#00b43e]">EV</span>
            <span className="text-white">pedia</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-[#00b43e]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3" />
      </div>
      <nav className="mx-auto flex max-w-7xl gap-5 overflow-x-auto pb-4 text-sm md:hidden">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="whitespace-nowrap font-medium text-slate-300"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
