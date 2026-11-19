import { Orbit } from "lucide-react";

export function Brand({ compact = false }: { compact?: boolean }) {
  return <div className="flex items-center gap-2.5">
    <div className="relative grid h-9 w-9 place-items-center rounded-lg border border-cyan-400/25 bg-cyan-400/10">
      <Orbit className="h-5 w-5 text-cyan-300" />
      <span className="absolute h-1.5 w-1.5 -right-0.5 -top-0.5 rounded-full bg-cyan-300 shadow-[0_0_12px_#22d3ee]" />
    </div>
    {!compact && <div><div className="text-[15px] font-bold tracking-[.18em] text-white">TRACE<span className="text-cyan-300"> AI</span></div><div className="mt-0.5 text-[8px] font-semibold tracking-[.22em] text-slate-500">GRAPH INTELLIGENCE</div></div>}
  </div>;
}
