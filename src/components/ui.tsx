import type { ReactNode } from "react";

export function PageHeader({ eyebrow, title, description, action }: { eyebrow?: string; title: string; description?: string; action?: ReactNode }) {
  return <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
    <div>{eyebrow && <div className="mb-1.5 text-[10px] font-bold uppercase tracking-[.18em] text-cyan-400">{eyebrow}</div>}<h1 className="text-xl font-semibold text-white">{title}</h1>{description && <p className="mt-1 text-xs text-slate-500">{description}</p>}</div>{action}
  </div>;
}

export function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`panel rounded-lg ${className}`}>{children}</section>;
}

export function Badge({ children, tone = "cyan" }: { children: ReactNode; tone?: "cyan" | "red" | "orange" | "green" | "violet" | "slate" }) {
  const styles = { cyan:"bg-cyan-400/10 text-cyan-300 border-cyan-400/20", red:"bg-red-400/10 text-red-300 border-red-400/20", orange:"bg-orange-400/10 text-orange-300 border-orange-400/20", green:"bg-emerald-400/10 text-emerald-300 border-emerald-400/20", violet:"bg-violet-400/10 text-violet-300 border-violet-400/20", slate:"bg-slate-400/10 text-slate-300 border-slate-400/20" };
  return <span className={`inline-flex rounded border px-2 py-1 text-[10px] font-semibold ${styles[tone]}`}>{children}</span>;
}
