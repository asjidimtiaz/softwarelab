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
    <div className="space-y-6 mt-10">
      <Card className="p-0 overflow-hidden border-border bg-white shadow-xl shadow-primary/5 rounded-[2.5rem]">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
             <thead>
              <tr className="border-b border-border bg-secondary/30">
                <th className="px-10 py-6 text-[11px] font-black uppercase tracking-widest text-muted-foreground/60">Lead Details</th>
                <th className="px-10 py-6 text-[11px] font-black uppercase tracking-widest text-muted-foreground/60 text-center">Priority</th>
                <th className="px-10 py-6 text-[11px] font-black uppercase tracking-widest text-muted-foreground/60">Service</th>
                <th className="px-10 py-6 text-[11px] font-black uppercase tracking-widest text-muted-foreground/60">Entry Date</th>
                <th className="px-10 py-6 text-[11px] font-black uppercase tracking-widest text-muted-foreground/60 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {leads.map((lead) => (
                <tr key={lead._id} className="group hover:bg-primary/[0.02] transition-colors">
                  <td className="px-10 py-7">
                    <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-secondary border border-border flex items-center justify-center text-primary font-bold shadow-sm group-hover:bg-white group-hover:shadow-md transition-all">
                            {lead.fullName.charAt(0)}
                        </div>
                        <div>
                            <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{lead.fullName}</p>
                            <p className="text-[11px] font-bold text-muted-foreground/60 mt-0.5">{lead.email}</p>
                        </div>
                    </div>
                  </td>
                  <td className="px-10 py-7 text-center whitespace-nowrap">
                    <div className={cn(
                        "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest",
                        lead.leadTier === "HOT" ? "bg-rose-100 text-rose-600" : 
                        lead.leadTier === "WARM" ? "bg-amber-100 text-amber-600" : 
                        "bg-slate-100 text-slate-600"
                    )}>
                        {lead.leadTier === "HOT" ? <Zap size={10} fill="currentColor" /> : lead.leadTier === "WARM" ? <ShieldCheck size={10} /> : <AlertCircle size={10} />}
                        {lead.leadTier}
                    </div>
                  </td>
                  <td className="px-10 py-7">
                    <div>
                        <p className="text-[10px] font-black text-primary tracking-widest uppercase mb-1">{lead.serviceCategory.replace("-", " ")}</p>
                        <p className="text-[11px] font-bold text-muted-foreground leading-tight">{lead.serviceInterest}</p>
                    </div>
                  </td>
                  <td className="px-10 py-7 whitespace-nowrap">
                    <div className="flex items-center gap-2 text-muted-foreground/60">
                        <Calendar size={14} />
                        <span className="text-[11px] font-bold uppercase tracking-widest">
                            {new Date(lead.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                    </div>
                  </td>
                  <td className="px-10 py-7 text-right">
                    <div className="flex items-center justify-end gap-3">
                        <Link href={`/admin/leads/${lead._id}`}>
                            <Button variant="outline" size="sm" className="h-10 px-4 rounded-xl border-border hover:border-primary/50 text-[10px] font-black uppercase tracking-widest">
                                View
                            </Button>
                        </Link>
                        <Button variant="ghost" size="sm" className="h-10 w-10 p-0 rounded-xl text-muted-foreground/40 hover:text-foreground hover:bg-secondary">
                            <MoreVertical size={16} />
                        </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {leads.length === 0 && (
            <div className="py-32 text-center bg-white">
              <div className="w-20 h-20 bg-secondary rounded-[2rem] flex items-center justify-center mx-auto mb-8 text-muted-foreground/20 border border-border">
                <Globe size={40} />
              </div>
              <h3 className="text-2xl font-black tracking-tight text-foreground">No entries found</h3>
              <p className="text-sm font-bold text-muted-foreground/40 mt-3 uppercase tracking-widest">The intake queue is currently empty</p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
