"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FolderKanban, Rocket, Clock, TrendingUp, ArrowUpRight, ArrowDownRight, Zap, CheckSquare, Users, Target } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
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
                    <p className="text-xs font-black text-muted-foreground/60 mb-2 uppercase tracking-widest">Digi Web Crew Terminal</p>
                    <h1 className="text-3xl font-black tracking-tight text-gray-900 uppercase">Status: <span className="text-electric">Operational</span></h1>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-400 mt-1 italic">Ready for engineering deployment.</h2>
                </div>

                <div className="flex flex-wrap gap-3 mt-2">
                    <button className="h-10 px-6 rounded-xl bg-electric text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-electric/20 flex items-center gap-2 hover:scale-105 transition-all">
                        <Zap size={14} fill="currentColor" />
                        AI Logic Map
                    </button>
                    <button className="h-10 px-6 rounded-xl bg-white border border-gray-100 text-gray-900 text-[10px] font-black uppercase tracking-widest shadow-sm hover:bg-gray-50 transition-all">
                        Sprint Updates
                    </button>
                    <button className="h-10 px-6 rounded-xl bg-white border border-gray-100 text-gray-900 text-[10px] font-black uppercase tracking-widest shadow-sm hover:bg-gray-50 transition-all">
                        New Repository
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <Card key={i} className="group overflow-hidden relative border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all rounded-[2rem]">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{stat.label}</span>
                            <div className="w-10 h-10 rounded-xl bg-electric/10 flex items-center justify-center text-electric group-hover:scale-110 transition-transform">
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

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Active Sprints */}
                <Card className="rounded-3xl border-border bg-white shadow-sm overflow-hidden">
                    <CardHeader className="flex flex-row items-center justify-between p-6 pb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                                <CheckSquare size={18} />
                            </div>
                            <CardTitle className="text-lg font-bold">Active Sprints</CardTitle>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-widest">3 Active</span>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                        <div className="space-y-3">
                            {[
                                { name: "E-commerce Platform", progress: 75, color: "bg-indigo-500" },
                                { name: "API Gateway", progress: 45, color: "bg-amber-500" },
                                { name: "Dashboard UI", progress: 90, color: "bg-emerald-500" }
                            ].map((sprint, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="font-semibold text-gray-700">{sprint.name}</span>
                                        <span className="font-bold text-gray-500">{sprint.progress}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                        <div className={cn("h-full rounded-full", sprint.color)} style={{ width: `${sprint.progress}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Recent Leads */}
                <Card className="rounded-3xl border-border bg-white shadow-sm overflow-hidden">
                    <CardHeader className="flex flex-row items-center justify-between p-6 pb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                                <Users size={18} />
                            </div>
                            <CardTitle className="text-lg font-bold">Recent Leads</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                        <div className="space-y-3">
                            {[
                                { name: "TechCorp Inc.", status: "Hot", time: "2h ago" },
                                { name: "StartupXYZ", status: "Warm", time: "5h ago" },
                                { name: "Enterprise Co.", status: "New", time: "1d ago" }
                            ].map((lead, i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-gray-50/50">
                                    <span className="font-semibold text-sm text-gray-700">{lead.name}</span>
                                    <div className="flex items-center gap-3">
                                        <span className={cn(
                                            "px-2 py-0.5 rounded-full text-[9px] font-bold uppercase",
                                            lead.status === "Hot" ? "bg-rose-100 text-rose-600" :
                                                lead.status === "Warm" ? "bg-amber-100 text-amber-600" : "bg-blue-100 text-blue-600"
                                        )}>{lead.status}</span>
                                        <span className="text-[10px] text-gray-400">{lead.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card className="rounded-3xl border-border bg-white shadow-sm overflow-hidden">
                    <CardHeader className="flex flex-row items-center justify-between p-6 pb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                                <Target size={18} />
                            </div>
                            <CardTitle className="text-lg font-bold">This Month</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: "Projects", value: "12" },
                                { label: "Clients", value: "8" },
                                { label: "Revenue", value: "$24K" },
                                { label: "Tasks Done", value: "89" }
                            ].map((item, i) => (
                                <div key={i} className="text-center p-4 rounded-xl bg-gray-50/50">
                                    <p className="text-2xl font-black text-gray-900">{item.value}</p>
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mt-1">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
