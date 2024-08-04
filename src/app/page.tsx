import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="72"
        height="72"
        viewBox="0 0 250 250"
        fill="#151513"
        className="group"
      >
        <a
          title="View Source"
          href={
            "https://github.com/vercel/virtual-event-starter-kit/blob/main/components/view-source.tsx"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <path d="M0 0l115 115h15l12 27 108 108V0z" fill="#fff" />
          <path
            className="group-hover:animate-wave origin-custom"
            d="M128 109c-15-9-9-19-9-19 3-7 2-11 2-11-1-7 3-2 3-2 4 5 2 11 2 11-3 10 5 15 9 16"
          />
          <path d="M115 115s4 2 5 0l14-14c3-2 6-3 8-3-8-11-15-24 2-41 5-5 10-7 16-7 1-2 3-7 12-11 0 0 5 3 7 16 4 2 8 5 12 9s7 8 9 12c14 3 17 7 17 7-4 8-9 11-11 11 0 6-2 11-7 16-16 16-30 10-41 2 0 3-1 7-5 11l-12 11c-1 1 1 5 1 5z" />
        </a>
      </svg>

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
