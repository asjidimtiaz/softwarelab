import { connectToDatabase } from "@/lib/db";
import { Lead } from "@/lib/models/lead";
import { CheckCircle2, Clock, AlertCircle, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

async function getTasks() {
  try {
    await connectToDatabase();

    // Find leads and safely process tasks
    const leads = await Lead.find({ "tasks.done": false }).lean();

    const allTasks = leads.flatMap(lead => {
      if (!lead.tasks || !Array.isArray(lead.tasks)) return [];

      return lead.tasks
        .filter((t: any) => !t.done)
        .map((t: any) => ({
          ...t,
          _id: t._id?.toString() || Math.random().toString(),
          leadId: lead._id?.toString(),
          leadName: lead.fullName,
          leadEmail: lead.email,
          leadTier: lead.leadTier
        }));
    });

    // Elite sorting with date validation
    return allTasks.sort((a: any, b: any) => {
      const dateA = a.dueAt ? new Date(a.dueAt).getTime() : 0;
      const dateB = b.dueAt ? new Date(b.dueAt).getTime() : 0;
      return dateA - dateB;
    });
  } catch (error) {
    console.error("Infrastructure Error Details:", error);
    throw error;
  }
}

export default async function TasksPage() {
  let tasks: any[] = [];
  let errorState = false;

  try {
    tasks = await getTasks();
  } catch (err) {
    errorState = true;
  }

  if (errorState) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-12 text-center">
        <div className="w-20 h-20 bg-rose-50 text-rose-500 rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-rose-500/10">
          <AlertCircle size={40} />
        </div>
        <h1 className="text-3xl font-black tracking-tight text-foreground">Infrastructure Offline</h1>
        <p className="max-w-md text-sm font-bold text-muted-foreground/60 mt-4 uppercase tracking-[0.2em] leading-relaxed">
          The operations queue is currently unreachable. Please verify database connectivity services.
        </p>
      </div>
    );
  }

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
              key={task._id}
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
                    <h3 className="text-xl font-bold tracking-tight text-foreground mb-2 group-hover:text-primary transition-colors">{task.title || "Untitled Task"}</h3>
                    <div className="flex flex-wrap items-center gap-6 text-[11px] font-bold text-muted-foreground/60 uppercase tracking-widest">
                      <span className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        Lead: <span className="text-foreground">{task.leadName || "Unknown"}</span>
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock size={12} className="text-primary/60" />
                        Due: <span className="text-foreground">
                          {task.dueAt ? new Date(task.dueAt).toLocaleString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : "No Date"}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className={cn(
                    "px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest border",
                    task.leadTier === "HOT" ? "bg-rose-100 text-rose-600 border-rose-200" : "bg-secondary text-muted-foreground border-border"
                  )}>
                    {task.leadTier || "COLD"} PRIORITY
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
