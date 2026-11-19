"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity, Bell, Boxes, ChartNoAxesCombined, ChevronDown, CircleHelp, Database, FileText, LayoutDashboard, Network, Search, Settings, ShieldAlert, Users, LogOut, Menu } from "lucide-react";
import { useState } from "react";
import { Brand } from "./brand";

const nav = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Transactions", href: "/transactions", icon: Activity },
  { name: "Graph Intelligence", href: "/graph", icon: Network },
  { name: "Detection Engine", href: "/detection", icon: ShieldAlert },
  { name: "Suspicious Networks", href: "/networks", icon: Boxes },
  { name: "Investigations", href: "/investigations", icon: Search },
  { name: "Reports", href: "/reports", icon: FileText },
  { name: "Data Management", href: "/data", icon: Database },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return <div className="min-h-screen bg-[#080d16] text-slate-200">
    <aside className={`fixed inset-y-0 left-0 z-40 w-[232px] border-r border-slate-800/70 bg-[#0a101b] transition-transform lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
      <div className="flex h-16 items-center border-b border-slate-800/70 px-5"><Brand /></div>
      <nav className="space-y-1 px-3 py-4">
        {nav.map((item) => { const Icon = item.icon; const active = pathname === item.href || pathname.startsWith(item.href + "/");
          return <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={`flex h-10 items-center gap-3 rounded-md px-3 text-[13px] transition ${active ? "bg-cyan-400/[.09] text-cyan-300" : "text-slate-400 hover:bg-slate-800/40 hover:text-slate-200"}`}>
            <Icon className="h-[17px] w-[17px]" /><span>{item.name}</span>{active && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-cyan-300" />}
          </Link>; })}
      </nav>
      <div className="absolute bottom-0 w-full border-t border-slate-800/70 p-3">
        <Link href="/settings" className="flex h-10 items-center gap-3 rounded-md px-3 text-[13px] text-slate-400 hover:bg-slate-800/40"><Settings className="h-[17px] w-[17px]" />Settings</Link>
        <Link href="/" className="mt-1 flex h-10 items-center gap-3 rounded-md px-3 text-[13px] text-slate-400 hover:bg-slate-800/40"><LogOut className="h-[17px] w-[17px]" />Sign out</Link>
      </div>
    </aside>
    {open && <button aria-label="Close menu" onClick={() => setOpen(false)} className="fixed inset-0 z-30 bg-black/60 lg:hidden" />}
    <div className="lg:pl-[232px]">
      <header className="sticky top-0 z-20 flex h-16 items-center border-b border-slate-800/70 bg-[#080d16]/95 px-4 backdrop-blur lg:px-7">
        <button onClick={() => setOpen(true)} className="mr-3 text-slate-400 lg:hidden"><Menu className="h-5 w-5" /></button>
        <div className="hidden items-center gap-2 text-xs text-slate-500 sm:flex"><span>Intelligence Platform</span><span>/</span><span className="text-slate-300">Global Operations</span></div>
        <div className="ml-auto flex items-center gap-2">
          <button className="grid h-9 w-9 place-items-center rounded-md border border-slate-800 text-slate-400 hover:text-cyan-300"><CircleHelp className="h-4 w-4" /></button>
          <button className="relative grid h-9 w-9 place-items-center rounded-md border border-slate-800 text-slate-400"><Bell className="h-4 w-4" /><span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-cyan-300" /></button>
          <button className="ml-1 flex items-center gap-2 rounded-md border border-slate-800 p-1 pr-2"><div className="grid h-7 w-7 place-items-center rounded bg-violet-500/20 text-[10px] font-bold text-violet-300">MC</div><ChevronDown className="h-3 w-3 text-slate-500" /></button>
        </div>
      </header>
      <main className="min-h-[calc(100vh-64px)]">{children}</main>
    </div>
  </div>;
}
