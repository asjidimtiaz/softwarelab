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
    <div className="flex flex-col gap-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-foreground">Intake Pipeline</h1>
          <p className="text-sm font-bold text-muted-foreground/50 mt-2 uppercase tracking-widest">Manage laboratory leads and protocols</p>
        </div>
        <Button 
          onClick={() => setIsModalOpen(true)}
          className="h-14 px-8 rounded-full bg-primary text-white shadow-lg shadow-primary/20 text-[11px] font-black uppercase tracking-widest hover:scale-105 transition-all group"
        >
          <Plus size={20} className="mr-2 group-hover:rotate-90 transition-transform duration-300" />
          Add New Lead
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 relative group">
          <div className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground/40 group-focus-within:text-primary transition-colors">
            <Search size={20} />
          </div>
          <input 
            type="text" 
            placeholder="Search leads by name, email, or category..." 
            className="w-full h-16 pl-16 pr-6 bg-white border border-border rounded-[1.5rem] outline-none shadow-sm focus:ring-4 focus:ring-primary/5 transition-all font-bold text-sm placeholder:text-muted-foreground/30"
            defaultValue={searchParams.get("q")?.toString()}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        
        <div className="flex gap-4">
          <div className="relative group min-w-[180px]">
            <Filter size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground/40 pointer-events-none group-focus-within:text-primary transition-colors" />
            <select 
                onChange={(e) => handleFilter("status", e.target.value)}
                defaultValue={searchParams.get("status") || "ALL"}
                className="w-full h-16 pl-14 pr-10 bg-white border border-border rounded-[1.5rem] outline-none text-[10px] font-black uppercase tracking-widest focus:ring-4 focus:ring-primary/5 transition-all appearance-none cursor-pointer hover:bg-secondary/30 shadow-sm"
            >
                <option value="ALL">All Status</option>
                <option value="NEW">New</option>
                <option value="QUALIFIED">Qualified</option>
                <option value="PROPOSAL">Proposal</option>
            </select>
            <ChevronDown size={14} className="absolute right-5 top-1/2 -translate-y-1/2 text-muted-foreground/40 pointer-events-none" />
          </div>

          <div className="relative group min-w-[180px]">
            <Zap size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground/40 pointer-events-none group-focus-within:text-primary transition-colors" />
            <select 
                onChange={(e) => handleFilter("tier", e.target.value)}
                defaultValue={searchParams.get("tier") || "ALL"}
                className="w-full h-16 pl-14 pr-10 bg-white border border-border rounded-[1.5rem] outline-none text-[10px] font-black uppercase tracking-widest focus:ring-4 focus:ring-primary/5 transition-all appearance-none cursor-pointer hover:bg-secondary/30 shadow-sm"
            >
                <option value="ALL">All Tiers</option>
                <option value="HOT">Priority: Hot</option>
                <option value="WARM">Standard: Warm</option>
                <option value="COLD">Archive: Cold</option>
            </select>
            <ChevronDown size={14} className="absolute right-5 top-1/2 -translate-y-1/2 text-muted-foreground/40 pointer-events-none" />
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
