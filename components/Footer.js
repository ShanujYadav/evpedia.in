import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-[#050505] text-slate-300">
      <div className="mx-auto max-w-7xl py-12">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.55fr_0.7fr_0.55fr]">
          <div>
            <div className="flex items-end gap-1 text-4xl font-black tracking-tight">
              <span className="text-[#00b43e]">EV</span>
              <span className="text-white">pedia</span>
            </div>
            <p className="mt-5 max-w-md text-base leading-8 text-slate-500">
The Knowledge Engine of Mobility
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#00b43e]">
              Navigate
            </p>
            <div className="mt-6 grid gap-4 text-base text-slate-500">
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
              <Link href="/about" className="transition hover:text-white">
                About Us
              </Link>
              <Link href="/contact" className="transition hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          {/* <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#00b43e]">
              Topics
            </p>
            <div className="mt-6 grid gap-4 text-base text-slate-500">
              <Link href="/news" className="transition hover:text-white">
                Electric Vehicles
              </Link>
              <Link href="/news" className="transition hover:text-white">
                Renewable Energy
              </Link>
              <Link href="/news" className="transition hover:text-white">
                Climate Policy
              </Link>
              <Link href="/news" className="transition hover:text-white">
                Green Tech
              </Link>
              <Link href="/news" className="transition hover:text-white">
                Smart Cities
              </Link>
              <Link href="/news" className="transition hover:text-white">
                Energy Storage
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#00b43e]">
              Company
            </p>
            <div className="mt-6 grid gap-4 text-base text-slate-500">
              <Link href="/about" className="transition hover:text-white">
                About Us
              </Link>
              <Link href="/about" className="transition hover:text-white">
                Our Team
              </Link>
              <Link href="/contact" className="transition hover:text-white">
                Careers
              </Link>
              <Link href="/contact" className="transition hover:text-white">
                Ethics Policy
              </Link>
              <Link href="/contact" className="transition hover:text-white">
                Advertise
              </Link>
              <Link href="/contact" className="transition hover:text-white">
                Newsletter
              </Link>
            </div>
          </div> */}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.18em] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 EVPEDIA · All rights reserved</p>
          <p>Made with green intent for a cleaner future</p>
        </div>
      </div>
    </footer>
  );
}
