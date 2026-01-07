import { getLeadById } from "@/lib/actions/lead-actions";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { 
  Mail, Building2, Calendar, Globe, Clock, 
  ChevronLeft, MessageSquare, Target, Zap,
  CheckCircle2, Clock3, AlertCircle
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default async function LeadDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const lead = await getLeadById(id);

  if (!lead) notFound();

  return (
    <div className="space-y-12 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="flex items-center gap-6">
          <Link href="/admin/leads">
            <Button variant="glass" size="sm" className="h-12 w-12 p-0 rounded-xl group/back">
              <ChevronLeft size={20} className="group-hover/back:-translate-x-1 transition-transform" />
            </Button>
          </Link>
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white">{lead.fullName}</h1>
            <p className="text-sm font-medium text-muted-foreground/60 mt-2 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary/40" />
                Inquiry ID: {lead._id}
            </p>
          </div>
        </div>
        <div className="flex gap-3">
           <Button variant="glass" className="px-6">
              Manage Lead
           </Button>
           <Button className="px-6">
              Update Details
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
         {/* Left Side: Details */}
         <div className="lg:col-span-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-white/5 bg-white/[0.01] p-8">
                   <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40 mb-4">Service Category</p>
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
                         <Target size={22} />
                      </div>
                      <span className="text-sm font-bold text-white uppercase tracking-tight">{lead.serviceCategory.replace("-", " ")}</span>
                   </div>
                </Card>
                <Card className="border-white/5 bg-white/[0.01] p-8">
                   <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40 mb-4">Lead Status</p>
                   <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-12 h-12 rounded-2xl flex items-center justify-center border",
                        lead.leadTier === "HOT" ? "bg-rose-500/10 text-rose-500 border-rose-500/20" :
                        lead.leadTier === "WARM" ? "bg-amber-500/10 text-amber-500 border-amber-500/20" :
                        "bg-blue-500/10 text-blue-500 border-blue-500/20"
                      )}>
                         <Zap size={22} fill="currentColor" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-white uppercase tracking-tight">{lead.leadTier} Priority</span>
                        <span className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest leading-none mt-1">Score: {lead.leadScore}</span>
                      </div>
                   </div>
                </Card>
                <Card className="border-white/5 bg-white/[0.01] p-8">
                   <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40 mb-4">Pipeline Status</p>
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground/40">
                         <Clock size={22} />
                      </div>
                      <span className="text-sm font-bold text-primary uppercase tracking-tight">{lead.status}</span>
                   </div>
                </Card>
            </div>

            <Card className="border-white/5 bg-white/[0.01] p-10 relative overflow-hidden">
               <div className="flex items-center gap-4 mb-10 pb-6 border-b border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Globe size={18} />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-white">Project Information</h3>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-8">
                     <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40 mb-3">Service Interest</p>
                        <p className="text-lg font-bold text-white uppercase tracking-tight">{lead.serviceInterest.replace("-", " ")}</p>
                     </div>
                     <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40 mb-3">Project Type</p>
                        <p className="text-sm font-semibold text-muted-foreground/80">{lead.projectType}</p>
                     </div>
                  </div>
                  <div className="space-y-8">
                     <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40 mb-3">Budget Allocation</p>
                        <p className="text-lg font-bold tabular-nums text-primary">{lead.budgetRange}</p>
                     </div>
                     <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40 mb-3">Target Timeline</p>
                        <p className="text-sm font-semibold text-muted-foreground/80">{lead.timeline}</p>
                     </div>
                  </div>
               </div>
               
               <div className="mt-12 pt-10 border-t border-white/5">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40 mb-6">Inquiry Message</p>
                  <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 italic leading-relaxed text-muted-foreground/80 text-lg relative group">
                     <MessageSquare size={32} className="absolute -top-3 -right-3 opacity-10" />
                     "{lead.message}"
                  </div>
               </div>
            </Card>
         </div>

         {/* Right Side: Timeline & Tasks */}
         <div className="lg:col-span-4 space-y-8">
            <Card className="border-white/5 bg-white/[0.01] p-8">
               <h3 className="text-lg font-bold tracking-tight text-white mb-8 flex items-center justify-between">
                  Activity Log
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-primary">Syncing</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  </div>
               </h3>
               <div className="space-y-10 relative before:absolute before:inset-0 before:left-[19px] before:w-[2px] before:bg-white/5">
                  {lead.events.slice().reverse().map((event: any, i: number) => (
                     <div key={i} className="relative pl-12 group/event">
                        <div className="absolute left-0 top-1 w-10 h-10 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center z-10 group-hover/event:border-primary/50 transition-colors">
                           <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                        </div>
                        <div>
                           <div className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground/30 mb-2">
                              {format(new Date(event.at), "MMM d, HH:mm")}
                           </div>
                           <div className="text-sm font-bold text-white/90 group-hover/event:text-primary transition-colors">{event.type}</div>
                        </div>
                     </div>
                  ))}
               </div>
            </Card>

            <Card className="border-white/5 bg-white/[0.01] p-8">
               <h3 className="text-lg font-bold tracking-tight text-white mb-8 flex items-center justify-between">
                  Tasks
                  <span className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-lg text-[10px] font-bold tracking-widest tabular-nums">
                     {lead.tasks.filter((t: any) => !t.done).length} ACTIVE
                  </span>
               </h3>
               <div className="space-y-4">
                  {lead.tasks.map((task: any, i: number) => (
                     <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all cursor-pointer group/task border border-white/5">
                        <div className={cn(
                           "w-6 h-6 rounded-lg border flex items-center justify-center transition-all mt-0.5",
                           task.done ? "bg-primary border-primary text-white" : "bg-white/5 border-white/10 group-hover/task:border-primary/50"
                        )}>
                           {task.done && <CheckCircle2 size={14} strokeWidth={3} />}
                        </div>
                        <div>
                           <div className={cn("text-sm font-bold", task.done ? "line-through opacity-30 text-white" : "text-white/80")}>{task.title}</div>
                           <div className="text-[10px] font-bold text-muted-foreground/30 uppercase tracking-widest mt-1">Due: {format(new Date(task.dueAt), "MMM d")}</div>
                        </div>
                     </div>
                  ))}
               </div>
               <Button variant="outline" className="w-full mt-10 h-12 rounded-xl border-dashed border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40 flex items-center justify-center gap-2">
                  <Plus size={16} />
                  Add Task
               </Button>
            </Card>
         </div>
      </div>
    </div>
  );
}

import { Plus } from "lucide-react";
