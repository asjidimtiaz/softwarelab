"use client";

import { useState } from "react";
import { Plus, Search, Filter, Zap, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AddLeadModal } from "./add-lead-modal";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { cn } from "@/lib/utils";

export function LeadsHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) params.set("q", term);
    else params.delete("q");
    params.set("page", "1");
    router.replace(`${pathname}?${params.toString()}`);
  }, 300);

  const handleFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value === "ALL") params.delete(key);
    else params.set(key, value);
    params.set("page", "1");
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-2xl font-black tracking-tighter text-[#F8F8FF]">Intake Pipeline</h1>
          <p className="text-[10px] font-black text-[#94A3B8]/30 mt-1 uppercase tracking-[0.2em]">Manage laboratory leads and protocols</p>
        </div>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="h-11 px-6 rounded-xl bg-[#6366F1] text-[#F8F8FF] shadow-lg shadow-[#6366F1]/20 text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all group"
        >
          <Plus size={16} className="mr-2 group-hover:rotate-90 transition-transform duration-300" />
          Add New Lead
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1 relative group">
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#94A3B8]/30 group-focus-within:text-[#6366F1] transition-colors">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="Search leads..."
            className="w-full h-11 pl-14 pr-6 bg-[#13131E] border border-[#1E1E2E] rounded-xl outline-none shadow-sm focus:ring-4 focus:ring-[#6366F1]/5 transition-all font-bold text-xs placeholder:text-[#94A3B8]/20 text-[#F8F8FF]"
            defaultValue={searchParams.get("q")?.toString()}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          <div className="relative group min-w-[160px]">
            <Filter size={14} className="absolute left-5 top-1/2 -translate-y-1/2 text-[#94A3B8]/30 pointer-events-none group-focus-within:text-[#6366F1] transition-colors" />
            <select
              onChange={(e) => handleFilter("status", e.target.value)}
              defaultValue={searchParams.get("status") || "ALL"}
              className="w-full h-11 pl-12 pr-10 bg-[#13131E] border border-[#1E1E2E] rounded-xl outline-none text-[9px] font-black uppercase tracking-widest focus:ring-4 focus:ring-[#6366F1]/5 transition-all appearance-none cursor-pointer hover:bg-[#1E1E2E]/50 shadow-sm text-[#F8F8FF]"
            >
              <option value="ALL">All Status</option>
              <option value="NEW">New</option>
              <option value="QUALIFIED">Qualified</option>
              <option value="PROPOSAL">Proposal</option>
            </select>
            <ChevronDown size={12} className="absolute right-5 top-1/2 -translate-y-1/2 text-[#94A3B8]/30 pointer-events-none" />
          </div>

          <div className="relative group min-w-[160px]">
            <Zap size={14} className="absolute left-5 top-1/2 -translate-y-1/2 text-[#94A3B8]/30 pointer-events-none group-focus-within:text-[#6366F1] transition-colors" />
            <select
              onChange={(e) => handleFilter("tier", e.target.value)}
              defaultValue={searchParams.get("tier") || "ALL"}
              className="w-full h-11 pl-12 pr-10 bg-[#13131E] border border-[#1E1E2E] rounded-xl outline-none text-[9px] font-black uppercase tracking-widest focus:ring-4 focus:ring-[#6366F1]/5 transition-all appearance-none cursor-pointer hover:bg-[#1E1E2E]/50 shadow-sm text-[#F8F8FF]"
            >
              <option value="ALL">All Tiers</option>
              <option value="HOT">Priority: Hot</option>
              <option value="WARM">Standard: Warm</option>
              <option value="COLD">Archive: Cold</option>
            </select>
            <ChevronDown size={12} className="absolute right-5 top-1/2 -translate-y-1/2 text-[#94A3B8]/30 pointer-events-none" />
          </div>
        </div>
      </div>

      <AddLeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
