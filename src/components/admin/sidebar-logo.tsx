"use client";

export function SidebarLogo() {
  return (
    <div className="flex h-12 items-center gap-3 px-2">
      <div className="grid h-9 w-9 place-items-center rounded-lg bg-indigo-600 text-xs font-bold text-white">
        DWC
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-slate-900">Digi Web Crew</p>
        <p className="truncate text-xs text-slate-500">Admin Panel</p>
      </div>
    </div>
  );
}
