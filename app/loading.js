export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl py-16">
      <div className="animate-pulse space-y-8">
        <div className="h-16 w-2/3 rounded-3xl bg-slate-800" />
        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="h-[420px] rounded-[32px] bg-slate-800" />
          <div className="space-y-4">
            <div className="h-24 rounded-[28px] bg-slate-800" />
            <div className="h-24 rounded-[28px] bg-slate-800" />
            <div className="h-24 rounded-[28px] bg-slate-800" />
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-[360px] rounded-[28px] bg-slate-800"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
