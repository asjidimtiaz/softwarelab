import { getDashboardStats, getLeadTrends, getCategoryDistribution } from "@/lib/actions/analytics-actions";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { AnalyticsChart } from "@/components/admin/analytics-chart";
import { Users, Target, Zap, TrendingUp, ArrowUpRight, ArrowDownRight, Download, ArrowRight, CheckSquare, Rocket, Clock, FolderKanban } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function AnalyticsPage() {
    // Fetch real data
    const [statsData, trends, distribution] = await Promise.all([
        getDashboardStats(),
        getLeadTrends(),
        getCategoryDistribution(),
    ]);

    const stats = [
        { label: "Total Projects", value: "124", change: "+12.5%", trending: "up", icon: FolderKanban },
        { label: "Deployed", value: "98%", change: "+5.2%", trending: "up", icon: Rocket },
        { label: "Avg. Response", value: "1.2h", change: "-18%", trending: "down", icon: Clock },
        { label: "Win Rate", value: "24.5%", change: "+2.1%", trending: "up", icon: TrendingUp },
    ];

    return (
        <div className="space-y-10 pb-12">
            {/* Greeting Section */}
            <div className="flex flex-col gap-6">
                <div>
                    <p className="text-xs font-semibold text-muted-foreground/60 mb-2 uppercase tracking-wider">Software Lab Dashboard</p>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">Hello, Admin</h1>
                    <h2 className="text-3xl font-bold tracking-tight text-indigo-600 mt-1">How can I help you today?</h2>
                </div>

                <div className="flex flex-wrap gap-3 mt-2">
                    <button className="h-10 px-6 rounded-xl bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-md shadow-indigo-600/20 flex items-center gap-2 hover:scale-105 transition-all">
                        <Zap size={14} fill="currentColor" />
                        Ask AI
                    </button>
                    <button className="h-10 px-6 rounded-xl bg-white border border-border text-foreground text-[10px] font-bold uppercase tracking-wider shadow-sm hover:bg-secondary transition-all">
                        Get tasks updates
                    </button>
                    <button className="h-10 px-6 rounded-xl bg-white border border-border text-foreground text-[10px] font-bold uppercase tracking-wider shadow-sm hover:bg-secondary transition-all">
                        Create workspace
                    </button>
                    <button className="h-10 px-6 rounded-xl bg-white border border-border text-foreground text-[10px] font-bold uppercase tracking-wider shadow-sm hover:bg-secondary transition-all">
                        Connect apps
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <Card key={i} className="group overflow-hidden relative border-border bg-white shadow-sm hover:shadow-md transition-all rounded-2xl">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70">{stat.label}</span>
                            <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                                <stat.icon size={18} strokeWidth={2} />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold tracking-tight text-foreground mt-1">{stat.value}</div>
                            <div className="flex items-center gap-2 mt-3">
                                <span className={cn(
                                    "flex items-center text-[10px] font-bold px-2 py-0.5 rounded-lg border",
                                    stat.trending === "up" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" : "bg-rose-500/10 text-rose-400 border-rose-500/20"
                                )}>
                                    {stat.trending === "up" ? <ArrowUpRight size={10} className="mr-1" /> : <ArrowDownRight size={10} className="mr-1" />}
                                    {stat.change}
                                </span>
                                <span className="text-[10px] font-medium text-muted-foreground/40 uppercase tracking-widest">vs prev. period</span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Main Chart Section */}
            <AnalyticsChart />

            {/* Widgets Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column - Main Tasks */}
                <div className="lg:col-span-7 space-y-6">
                    <Card className="rounded-3xl border-border bg-white shadow-sm overflow-hidden">
                        <CardHeader className="flex flex-row items-center justify-between p-8 pb-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                                    <CheckSquare size={18} />
                                </div>
                                <CardTitle className="text-lg font-bold">Active Sprints</CardTitle>
                            </div>
                            <div className="flex gap-2">
                                <button className="w-8 h-8 rounded-full hover:bg-secondary flex items-center justify-center transition-colors">
                                    <TrendingUp size={16} className="text-muted-foreground" />
                                </button>
                            </div>
                        </CardHeader>
                        <CardContent className="p-10 pt-0">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-widest">In Progress</span>
                                    <span className="text-[10px] font-bold text-muted-foreground">• 3 sprints</span>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        { name: "E-commerce Platform MVP", priority: "High", due: "Due Today", color: "rose" },
                                        { name: "API Gateway Integration", priority: "Medium", due: "3 days left", color: "amber" },
                                        { name: "Dashboard UI Redesign", priority: "Low", due: "1 week left", color: "blue" }
                                    ].map((task, i) => (
                                        <div key={i} className="flex items-center justify-between p-6 rounded-[1.5rem] bg-secondary/30 hover:bg-secondary/50 transition-colors group cursor-pointer">
                                            <div className="flex items-center gap-4">
                                                <div className={cn("w-3 h-3 rounded-full",
                                                    task.color === "rose" ? "bg-rose-500" :
                                                        task.color === "amber" ? "bg-amber-500" : "bg-blue-500"
                                                )} />
                                                <span className="font-bold text-sm">{task.name}</span>
                                            </div>
                                            <div className="flex items-center gap-6">
                                                <span className={cn("px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest",
                                                    task.priority === "High" ? "bg-rose-100 text-rose-600" :
                                                        task.priority === "Medium" ? "bg-amber-100 text-amber-600" : "bg-blue-100 text-blue-600"
                                                )}>{task.priority}</span>
                                                <span className="text-[10px] font-bold text-muted-foreground">{task.due}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <button className="flex items-center gap-3 text-primary text-[10px] font-black uppercase tracking-widest mt-6 hover:translate-x-1 transition-transform">
                                    + Add Sprint
                                </button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-3xl border-border bg-white shadow-sm overflow-hidden">
                        <CardHeader className="p-8 pb-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
                                    <TrendingUp size={18} />
                                </div>
                                <CardTitle className="text-lg font-bold">Engineering Metrics</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="p-10 pt-4 pb-12">
                            <div className="space-y-10">
                                {[
                                    { label: "Sprint Velocity Target", percentage: 94, color: "bg-primary" },
                                    { label: "Code Coverage (Unit Tests)", percentage: 88, color: "bg-emerald-400" },
                                    { label: "Client Deliverables", percentage: 63, color: "bg-orange-400" }
                                ].map((goal, i) => (
                                    <div key={i} className="space-y-3">
                                        <div className="flex justify-between items-end">
                                            <span className="font-bold text-sm tracking-tight">{goal.label}</span>
                                            <span className="font-black text-sm">{goal.percentage}%</span>
                                        </div>
                                        <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                            <div className={cn("h-full rounded-full", goal.color)} style={{ width: `${goal.percentage}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column - Secondary Widgets */}
                <div className="lg:col-span-5 space-y-6">
                    <Card className="rounded-3xl border-border bg-white shadow-sm p-8">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                                    <Target size={18} />
                                </div>
                                <h3 className="text-lg font-bold">Projects</h3>
                            </div>
                            <button className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                                Recents <ArrowDownRight size={14} className="rotate-45" />
                            </button>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            {[
                                { name: "E-commerce Platform", tasks: 12, team: 4, color: "bg-primary/10 text-primary" },
                                { name: "SaaS Dashboard", tasks: 8, team: 3, color: "bg-blue-100 text-blue-600" },
                                { name: "Mobile App API", tasks: 15, team: 5, color: "bg-emerald-100 text-emerald-600" }
                            ].map((project, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-secondary/30 transition-all group cursor-pointer">
                                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg", project.color)}>P</div>
                                    <div>
                                        <h4 className="font-bold text-sm">{project.name}</h4>
                                        <p className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest mt-1">
                                            {project.tasks} tasks • {project.team} teammates
                                        </p>
                                    </div>
                                </div>
                            ))}
                            <button className="w-full h-14 rounded-2xl border-2 border-dashed border-border flex items-center justify-center gap-3 text-muted-foreground hover:border-primary/50 hover:bg-primary/5 transition-all mt-4 text-[10px] font-black uppercase tracking-widest">
                                + Create new project
                            </button>
                        </div>
                    </Card>

                    <Card className="rounded-3xl border-border bg-white shadow-sm p-8 overflow-hidden relative">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
                                    <Users size={18} />
                                </div>
                                <h3 className="text-lg font-bold">Reminders</h3>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center gap-2 mb-6">
                                <span className="text-[10px] font-black text-foreground uppercase tracking-widest">Today</span>
                                <span className="text-[10px] font-bold text-muted-foreground">• 2</span>
                            </div>

                            {[
                                "Assess any new risks identified in the morning meeting.",
                                "Outline key points for tomorrow's stand-up meeting."
                            ].map((reminder, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className="w-5 h-5 rounded-md border-2 border-border mt-1 group-hover:border-primary transition-colors shrink-0" />
                                    <p className="text-sm font-medium leading-relaxed">{reminder}</p>
                                </div>
                            ))}
                        </div>

                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 blur-3xl rounded-full" />
                    </Card>
                </div>
            </div>

            {/* Forecast Footer */}
            <div className="p-12 rounded-[3.5rem] bg-indigo-950 text-white flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden group">
                <div className="relative z-10 flex items-center gap-10">
                    <div className="w-20 h-20 rounded-[2rem] bg-white/10 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                        <Zap size={32} className="text-primary" fill="currentColor" />
                    </div>
                    <div>
                        <p className="text-2xl font-black tracking-tight">System Forecast Overview</p>
                        <p className="text-sm font-bold text-white/60 mt-2 uppercase tracking-[0.2em]">Expected velocity pulse: +14% leads projected</p>
                    </div>
                </div>
                <Button className="h-14 px-12 rounded-full bg-white text-indigo-950 font-black uppercase tracking-widest hover:scale-105 transition-transform relative z-10 shadow-2xl">
                    Access Terminal
                </Button>

                <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-500/10 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2" />
            </div>
        </div>
    );
}
