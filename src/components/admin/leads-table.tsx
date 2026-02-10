"use client";

import { MessageSquare, Calendar, Globe, ArrowRight, MoreVertical, ShieldCheck, Zap, AlertCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface LeadsTableProps {
  leads: any[];
}

export function LeadsTable({ leads }: LeadsTableProps) {
  return (
    <div className="space-y-4">
      <Card className="p-0 overflow-hidden border-border bg-white shadow-xl shadow-primary/5 rounded-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border bg-gray-50/30">
                <th className="px-6 py-4 text-[9px] font-black uppercase tracking-widest text-muted-foreground/40">Lead Details</th>
                <th className="px-6 py-4 text-[9px] font-black uppercase tracking-widest text-muted-foreground/40 text-center">Priority</th>
                <th className="px-6 py-4 text-[9px] font-black uppercase tracking-widest text-muted-foreground/40">Service</th>
                <th className="px-6 py-4 text-[9px] font-black uppercase tracking-widest text-muted-foreground/40">Entry</th>
                <th className="px-6 py-4 text-[9px] font-black uppercase tracking-widest text-muted-foreground/40 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50/50">
              {leads.map((lead) => (
                <tr key={lead._id} className="group hover:bg-primary/[0.01] transition-all duration-300">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gray-900 border border-white/5 flex items-center justify-center text-white font-black text-sm shadow-md group-hover:scale-105 transition-transform">
                        {lead.fullName.charAt(0)}
                      </div>
                      <div>
                        <p className="text-[13px] font-black text-gray-900 group-hover:text-indigo-600 transition-colors">{lead.fullName}</p>
                        <p className="text-[9px] font-bold text-gray-400 mt-0.5 uppercase tracking-wider">{lead.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center whitespace-nowrap">
                    <div className={cn(
                      "inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest shadow-sm border",
                      lead.leadTier === "HOT" ? "bg-rose-500/10 text-rose-600 border-rose-500/20" :
                        lead.leadTier === "WARM" ? "bg-amber-500/10 text-amber-600 border-amber-500/20" :
                          "bg-slate-900/10 text-slate-700 border-slate-900/20"
                    )}>
                      {lead.leadTier === "HOT" ? <Zap size={8} fill="currentColor" /> : lead.leadTier === "WARM" ? <ShieldCheck size={8} /> : <AlertCircle size={8} />}
                      {lead.leadTier}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-[9px] font-black text-indigo-600 tracking-[0.1em] uppercase mb-0.5">{lead.serviceCategory.replace("-", " ")}</p>
                      <p className="text-[10px] font-bold text-gray-400 leading-tight italic truncate max-w-[160px]">"{lead.serviceInterest}"</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar size={12} className="text-gray-300" />
                      <span className="text-[9px] font-black uppercase tracking-widest">
                        {new Date(lead.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/admin/leads/${lead._id}`}>
                        <Button className="h-9 px-4 rounded-lg bg-gray-900 text-white text-[9px] font-black uppercase tracking-widest shadow-md shadow-gray-900/10 hover:scale-105 hover:bg-indigo-600 transition-all">
                          Protocol
                        </Button>
                      </Link>
                      <Button variant="ghost" size="sm" className="h-9 w-9 p-0 rounded-lg text-gray-300 hover:text-gray-900 hover:bg-gray-50 border border-transparent hover:border-border">
                        <MoreVertical size={16} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {leads.length === 0 && (
            <div className="py-20 text-center bg-white">
              <div className="w-16 h-16 bg-secondary/50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-muted-foreground/20 border border-border">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-black tracking-tight text-foreground">No entries found</h3>
              <p className="text-[10px] font-black text-muted-foreground/30 mt-2 uppercase tracking-widest">The intake queue is currently empty</p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
