export default function Home() {
  return (
    <main className="flex flex-col items-center gap-4">
      <div className="w-full max-w-96 min-w-60 h-14">
        <span className="block relative h-full w-full rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-600">
          <span
            className="block absolute top-0 left-0 w-full h-full bg-orange-400 animate-pulse"
            style={{ left: `-${100 - 80}%` }}
          />
          <span className="block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold text-center leading-4">
            Uploading... (80)%
          </span>
        </span>
      </div>

      <div className="w-24 h-24 bg-slate-500 hover:cursor-pointer hover:animate-scale-up"></div>

      <div className="w-24 h-24 bg-slate-500 hover:cursor-pointer hover:animate-scale-down"></div>

      <div className="w-12 h-12 bg-slate-500 hover:cursor-pointer hover:animate-spin"></div>

      <div className="w-12 h-12 bg-slate-500 hover:cursor-pointer hover:animate-wiggle"></div>

      <div className="w-12 h-12 bg-slate-500 hover:cursor-pointer hover:animate-shake"></div>

      <div className="w-12 h-12 bg-slate-500 hover:cursor-pointer hover:animate-shift-left"></div>

      <div className="w-12 h-12 bg-slate-500 hover:cursor-pointer hover:animate-fade-out"></div>
    </main>
  );
}
