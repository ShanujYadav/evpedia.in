import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-4xl py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00b43e]">
        404
      </p>
      <h1 className="mt-4 text-5xl font-black tracking-tight text-white">
        Story not found
      </h1>
      <p className="mt-4 text-lg text-slate-300">
        The article you requested does not exist or may have been removed.
      </p>
      <Link
        href="/news"
        className="mt-8 inline-flex rounded-full bg-[#00b43e] px-6 py-3 text-sm font-semibold text-white"
      >
        Browse News
      </Link>
    </div>
  );
}
