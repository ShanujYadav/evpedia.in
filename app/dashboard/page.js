import DashboardForm from "@/components/DashboardForm";

export const metadata = {
  title: "Dashboard",
  description: "Admin dashboard for publishing news articles."
};

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-6xl py-16">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00b43e]">
          Private Dashboard
        </p>
        <h1 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight text-white">
          Publish a story directly into the live demo feed.
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-200">
          This page uses a simple password gate and a local JSON persistence layer for demo
          publishing. New posts become visible on the home page, news listing, and article route.
        </p>
      </div>
      <DashboardForm />
    </div>
  );
}