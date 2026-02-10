"use client";

import { signOut } from "next-auth/react";

export function SidebarLogo() {
    return (
        <div className="flex flex-col items-center gap-4 group cursor-pointer transition-all">
            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center border border-white/5 group-hover:scale-105 group-hover:border-white/10 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-6 h-6 rounded-full border-[2.5px] border-electric/80 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                    <div className="w-2.5 h-2.5 rounded-full bg-electric shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
                </div>
            </div>
            <div className="flex flex-col items-center gap-1">
                <p className="text-[10px] font-black text-gray-900 uppercase tracking-[0.3em] vertical-text">DWC</p>
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            </div>
        </div>
    );
}
