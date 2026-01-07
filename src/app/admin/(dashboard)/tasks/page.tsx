import connectDB from "@/lib/db";
import { Lead } from "@/lib/models/lead";
import { CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

async function getTasks() {
  await connectDB();
  const leads = await Lead.find({ "tasks.done": false }).sort({ "tasks.dueAt": 1 });
  
  const allTasks = leads.flatMap(lead => 
    lead.tasks
      .filter((t: any) => !t.done)
      .map((t: any) => ({
        ...t.toObject(),
        leadId: lead._id.toString(),
        leadName: lead.fullName,
        leadEmail: lead.email,
        leadTier: lead.leadTier
      }))
  );

  return allTasks.sort((a: any, b: any) => a.dueAt.getTime() - b.dueAt.getTime());
}

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default async function TasksPage() {
  const tasks = await getTasks();

  return (
    <div className="p-12 space-y-12 pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-foreground">Operations Queue</h1>
          <p className="text-sm font-bold text-muted-foreground/50 mt-2 uppercase tracking-widest">Manage and execute pending laboratory task protocols</p>
        </div>
        <Button variant="outline" className="px-8 h-12 rounded-full border-border text-[10px] font-black uppercase tracking-widest hover:bg-secondary transition-all">
            <CheckCircle2 size={16} className="mr-2" />
            Clear Completed
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {tasks.length > 0 ? (
          tasks.map((task: any) => (
            <Card 
              key={task._id.toString()}
              className="group border-border bg-white p-8 hover:shadow-xl hover:shadow-primary/5 transition-all rounded-[2.5rem] cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="flex items-center gap-8">
                  <div className={cn(
                    "w-16 h-16 rounded-[1.5rem] flex items-center justify-center border transition-all shadow-sm",
                    task.leadTier === "HOT" ? "bg-rose-50 text-rose-500 border-rose-100" : "bg-primary/5 text-primary border-primary/10"
                  )}>
                    {task.leadTier === "HOT" ? <AlertCircle size={28} /> : <Clock size={28} />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-foreground mb-2 group-hover:text-primary transition-colors">{task.title}</h3>
                    <div className="flex flex-wrap items-center gap-6 text-[11px] font-bold text-muted-foreground/60 uppercase tracking-widest">
                      <span className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          Lead: <span className="text-foreground">{task.leadName}</span>
                      </span>
                      <span className="flex items-center gap-2">
                          <Clock size={12} className="text-primary/60" />
                          Due: <span className="text-foreground">{new Date(task.dueAt).toLocaleString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                   <div className={cn(
                     "px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest border",
                     task.leadTier === "HOT" ? "bg-rose-100 text-rose-600 border-rose-200" : "bg-secondary text-muted-foreground border-border"
                   )}>
                     {task.leadTier} PRIORITY
                   </div>
                   <Button className="h-12 px-8 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                     Complete Task
                   </Button>
                </div>
              </div>
            </Card>
          ))
        ) : (
          <div className="text-center py-32 rounded-[3rem] border border-dashed border-border bg-white/40">
            <div className="w-20 h-20 bg-secondary rounded-[2rem] flex items-center justify-center mx-auto mb-6 text-muted-foreground/30">
                <CheckCircle2 size={40} />
            </div>
            <h2 className="text-2xl font-black tracking-tight text-foreground opacity-30">No pending tasks</h2>
            <p className="text-xs font-bold text-muted-foreground/40 mt-3 uppercase tracking-widest">The laboratory queue is currently optimized</p>
          </div>
        )}
      </div>
    </div>
  );
}
