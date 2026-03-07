"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    FolderKanban, Rocket, Clock, TrendingUp, ArrowUpRight,
    ArrowDownRight, Zap, CheckSquare, Users, Target,
    Sparkles, Activity, ShieldCheck, Cpu, Layout,
    ChevronRight, ExternalLink, MoreVertical, Orbit
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { getDashboardStats } from "@/lib/actions/dashboard-actions";
import Link from "next/link";

interface DashboardData {
    leadCount: number;
    chatCount: number;
    draftCount: number;
    brandingConfig: any;
    recentLeads: Array<{ name: string; industry: string; budget: string; intent: string }>;
    recentEvents: Array<{ title: string; time: string; type: string }>;
}

export default function DashboardPage() {
    const fallbackData: DashboardData = {
        leadCount: 0,
        chatCount: 0,
        draftCount: 0,
        brandingConfig: { siteName: "Software Lab" },
        recentLeads: [],
        recentEvents: [{ title: "System sync initialized", time: "Just now", type: "system" }],
    };
    const [data, setData] = React.useState<DashboardData>(fallbackData);

    React.useEffect(() => {
        let mounted = true;
        getDashboardStats()
            .then((res) => {
                if (mounted && res) setData({ ...fallbackData, ...res });
            })
            .catch(() => {
                if (mounted) setData(fallbackData);
            });
        return () => {
            mounted = false;
        };
    }, []);

    const stats = [
        {
            label: "Leads",
            value: String(data.leadCount),
            change: "Total",
            trending: "up" as const,
            icon: Users,
            color: "from-raly-primary to-raly-deep"
        },
        {
            label: "Chats",
            value: String(data.chatCount),
            change: "Sessions",
            trending: "up" as const,
            icon: Sparkles,
            color: "from-raly-accent to-raly-primary"
        },
        {
            label: "Drafts",
            value: String(data.draftCount),
            change: "AI Generated",
            trending: "up" as const,
            icon: Layout,
            color: "from-raly-accent/80 to-raly-primary"
        },
        {
            label: "Site Name",
            value: data.brandingConfig?.siteName || "Software Lab",
            change: "Branding",
            trending: "up" as const,
            icon: Target,
            color: "from-raly-deep to-raly-primary"
        },
    ];

    return (
        <div className="admin-page-stack w-full pb-10 space-y-6">
            {/* Stats Experience */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                {stats.map((stat, i) => (
                    <div key={i} className="w-full">
                        <Card className="admin-card admin-card-unified admin-card-hover group relative overflow-hidden h-full rounded-2xl w-full">
                            <CardContent className="p-4">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-midnight-900 border border-gray-200 dark:border-midnight-700 flex items-center justify-center text-gray-700 dark:text-gray-300">
                                        <stat.icon size={18} />
                                    </div>
                                    <div className={cn(
                                        "flex items-center gap-1 text-xs font-black px-2 py-0.5 rounded-lg",
                                        stat.trending === "up" ? "bg-emerald-500/10 text-emerald-500" : "bg-rose-500/10 text-rose-500"
                                    )}>
                                        {stat.trending === "up" ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
                                        {stat.change}
                                    </div>
                                </div>

                                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-0.5">{stat.label}</h3>
                                <p className="text-xl font-black text-gray-900 dark:text-white tabular-nums tracking-tight">{stat.value}</p>

                                <div className="mt-6 pt-6 border-t border-gray-200/70 dark:border-midnight-700 flex items-center justify-between text-sm font-bold text-gray-500 uppercase tracking-widest">
                                    <span>Real-time Sync</span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                </div>
                            </CardContent>

                            {/* Hover Decorative Line */}
                            <div className={cn(
                                "absolute bottom-0 left-0 h-1 bg-gradient-to-r transition-all duration-500",
                                stat.color,
                                "w-0 group-hover:w-full"
                            )} />
                        </Card>
                    </div>
                ))}
            </div>

            {/* Main Content Sections */}
            <div className="space-y-6 lg:space-y-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 w-full items-start">
                    {/* Advanced Development Pipeline */}
                    <Card className="admin-card admin-card-unified admin-card-hover lg:col-span-8 group rounded-2xl">
                        <CardHeader className="p-4 pb-2 flex flex-row items-center justify-between">
                            <div className="space-y-0.5">
                                <CardTitle className="text-base font-black text-gray-900 dark:text-white flex items-center gap-2">
                                    <div className="p-1.5 bg-indigo-50 dark:bg-midnight-800 rounded-lg text-indigo-600">
                                        <Layout size={14} />
                                    </div>
                                    Production Pipeline
                                </CardTitle>
                                <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Current Engineering Sprints</p>
                            </div>
                            <Button variant="ghost" size="sm" className="h-7 w-7 p-0 rounded-full hover:bg-gray-50 dark:hover:bg-midnight-800">
                                <MoreVertical size={14} className="text-gray-400" />
                            </Button>
                        </CardHeader>
                        <CardContent className="p-4 pt-1">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    { name: "E-commerce Core", progress: 84, status: "Critical Path", color: "bg-indigo-500" },
                                    { name: "Neural Analytics", progress: 42, status: "Testing Phase", color: "bg-amber-500" },
                                    { name: "Mobile App V2", progress: 92, status: "Ready for Prod", color: "bg-emerald-500" }
                                ].map((sprint, i) => (
                                    <div key={i} className="space-y-2 p-3 rounded-xl bg-gray-50/50 dark:bg-midnight-950/50 border border-transparent hover:border-gray-100 dark:hover:border-midnight-800 transition-all hover:bg-white dark:hover:bg-midnight-900 hover:shadow-xl group/card">
                                        <div className="flex justify-between items-start">
                                            <div className="space-y-0.5">
                                                <h4 className="font-bold text-sm text-gray-900 dark:text-white group-hover/card:text-electric transition-colors leading-tight">{sprint.name}</h4>
                                                <p className="text-xs font-black uppercase tracking-widest text-gray-500">{sprint.status}</p>
                                            </div>
                                            <ArrowUpRight size={10} className="text-gray-300 group-hover/card:text-electric transition-all" />
                                        </div>

                                        <div className="space-y-1">
                                            <div className="h-0.5 w-full bg-gray-100 dark:bg-midnight-800 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${sprint.progress}%` }}
                                                    className={cn("h-full rounded-full transition-all duration-1000", sprint.color)}
                                                />
                                            </div>
                                            <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest">
                                                <span className="text-gray-500">Progress</span>
                                                <span className="text-gray-900 dark:text-white">{sprint.progress}%</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Intelligence Insights */}
                    <Card className="admin-card admin-card-unified admin-card-hover lg:col-span-4 group rounded-2xl">
                        <CardHeader className="p-4 pb-2">
                            <div className="w-7 h-7 rounded-lg bg-white dark:bg-midnight-900 border border-gray-200 dark:border-midnight-700 flex items-center justify-center mb-2 text-gray-700 dark:text-gray-300">
                                <Activity size={14} />
                            </div>
                            <CardTitle className="text-base font-black text-gray-900 dark:text-white tracking-tight leading-tight">Project Intelligence</CardTitle>
                            <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mt-0.5">Neural Event Feed</p>
                        </CardHeader>
                        <CardContent className="p-4 pt-1">
                            <div className="space-y-3">
                                {data.recentEvents.length === 0 ? (
                                    <div className="pb-3 text-left">
                                        <p className="text-sm font-bold text-gray-900 dark:text-white leading-tight">No recent events</p>
                                        <p className="text-xs font-black uppercase tracking-widest text-gray-500">Waiting for activity</p>
                                    </div>
                                ) : data.recentEvents.map((event, i) => (
                                    <div key={i} className="flex gap-3 group/item">
                                        <div className="relative pt-1 flex flex-col items-center">
                                            <div className={cn(
                                                "w-1.5 h-1.5 rounded-full",
                                                event.type === "success" ? "bg-emerald-500" :
                                                    event.type === "warning" ? "bg-amber-500" : "bg-electric"
                                            )} />
                                            {i !== data.recentEvents.length - 1 && <div className="w-[1px] flex-1 bg-gray-200 dark:bg-midnight-700 mt-1.5 mb-1.5" />}
                                        </div>
                                        <div className="pb-3 text-left">
                                            <p className="text-sm font-bold text-gray-900 dark:text-white group-hover/item:text-electric transition-colors leading-tight">{event.title}</p>
                                            <p className="text-xs font-black uppercase tracking-widest text-gray-500">{event.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4 pt-4 border-t border-gray-200/70 dark:border-midnight-700 space-y-3">
                                <div className="flex items-center justify-between">
                                    <p className="text-xs font-black uppercase tracking-widest text-gray-500">Weekly Digest</p>
                                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase">Ready</span>
                                </div>
                                <Button className="w-full h-10 bg-white dark:bg-midnight-900 text-gray-900 dark:text-white border border-gray-200 dark:border-midnight-700 rounded-xl text-xs font-black uppercase tracking-[0.2em] hover:bg-gray-50 dark:hover:bg-midnight-800 transition-all flex items-center gap-2">
                                    <Clock size={12} />
                                    Generate Report
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Operations Grid: Leads & Infrastructure */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full items-start">
                    <Card className="admin-card admin-card-unified admin-card-hover group rounded-2xl">
                        <CardHeader className="p-4 pb-2 flex flex-row items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-lg bg-electric/10 text-electric flex items-center justify-center">
                                    <Users size={14} />
                                </div>
                                <div>
                                    <h2 className="text-sm font-bold text-gray-900 dark:text-white">Unified Lead Intake</h2>
                                    <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mt-0.5">Recent Leads</p>
                                </div>
                            </div>
                            <Link href="/admin/leads">
                                <Button variant="outline" className="h-8 px-3 rounded-xl text-xs font-black uppercase tracking-widest border-gray-200 dark:border-midnight-700">
                                    View CRM
                                </Button>
                            </Link>
                        </CardHeader>
                        <CardContent className="p-4 pt-1">
                            <div className="space-y-2">
                                {data.recentLeads.length === 0 ? (
                                    <div className="p-3 rounded-xl bg-gray-50/60 border border-gray-100 text-center">
                                        <p className="text-sm font-bold text-gray-500">No recent leads</p>
                                    </div>
                                ) : data.recentLeads.map((lead, i) => (
                                    <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-gray-50/50 dark:bg-midnight-950/50 border border-transparent hover:border-gray-100 transition-all cursor-pointer group">
                                        <div className="flex items-center gap-2">
                                            <div className="w-7 h-7 rounded-lg bg-white dark:bg-midnight-900 border border-gray-100 flex items-center justify-center text-gray-400 group-hover:text-electric transition-colors">
                                                <Target size={14} />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-gray-900 dark:text-white">{lead.name}</p>
                                                <p className="text-xs font-black uppercase tracking-widest text-gray-500">{lead.industry}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="text-right hidden sm:block">
                                                <p className="text-sm font-black text-gray-900 dark:text-white">{lead.budget}</p>
                                                <p className="text-xs font-black uppercase tracking-widest text-gray-500">Budget</p>
                                            </div>
                                            <div className={cn(
                                                "px-2 py-0.5 rounded-full text-xs font-black uppercase tracking-widest",
                                                lead.intent === "HOT" ? "bg-rose-500 text-white" :
                                                    lead.intent === "WARM" ? "bg-amber-500 text-white" : "bg-blue-500 text-white"
                                            )}>
                                                {lead.intent}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* System Infrastructure Visualization */}
                    <Card className="admin-card admin-card-unified admin-card-hover flex flex-col group rounded-2xl">
                        <CardHeader className="p-4 pb-2">
                            <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center">
                                    <Cpu size={14} />
                                </div>
                                <div>
                                    <h2 className="text-sm font-bold text-gray-900 dark:text-white">Command Center Nodes</h2>
                                    <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mt-0.5">Oracle Cloud Ampere</p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4 pt-1 flex-1 flex flex-col justify-between">
                            <div className="space-y-3">
                                {[
                                    { node: "Primary (ARM)", load: 24 },
                                    { node: "Headless Node", load: 68 },
                                ].map((node, i) => (
                                    <div key={i} className="space-y-1">
                                        <div className="flex justify-between items-end">
                                            <p className="text-sm font-bold text-gray-900 dark:text-white">{node.node}</p>
                                            <p className="text-xs font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400">{node.load}% Load</p>
                                        </div>
                                        <div className="h-0.5 w-full bg-gray-50 dark:bg-midnight-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${node.load}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4 p-3 rounded-xl bg-gray-50 dark:bg-midnight-900 border border-gray-200 dark:border-midnight-700 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-lg bg-white dark:bg-midnight-900 border border-gray-200 dark:border-midnight-700 flex items-center justify-center">
                                        <ShieldCheck size={12} className="text-emerald-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-900 dark:text-white">Resilience</p>
                                        <p className="text-xs font-black uppercase text-gray-500">Solid</p>
                                    </div>
                                </div>
                                <Button size="sm" className="h-7 px-3 bg-white dark:bg-midnight-900 text-gray-900 dark:text-white border border-gray-200 dark:border-midnight-700 font-black text-xs uppercase tracking-widest hover:bg-gray-100 dark:hover:bg-midnight-800">
                                    Diag
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Strategic Grid: Authority & Ecosystem */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full items-start">
                    {/* 2026 Content Citation Authority */}
                    <Card className="admin-card admin-card-unified admin-card-hover group rounded-2xl">
                        <CardHeader className="p-4 pb-2">
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <CardTitle className="text-base font-black text-gray-900 dark:text-white flex items-center gap-2">
                                        <div className="p-1.5 bg-amber-50 dark:bg-midnight-800 rounded-lg text-amber-600">
                                            <Target size={14} />
                                        </div>
                                        Authority Heatmap
                                    </CardTitle>
                                    <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">2026 Pillars</p>
                                </div>
                                <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 bg-emerald-500/10 text-emerald-600 rounded-lg text-xs font-black uppercase tracking-widest">
                                    <Sparkles size={10} />
                                    GEO-Ready
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4 pt-1">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    { name: "Enterprise AI Chatbots", health: 92, status: "High Trust" },
                                    { name: "DIFC Next.js Fintech", health: 78, status: "Citation Lead" },
                                    { name: "Shopify AI Liquid", health: 45, status: "Building" },
                                    { name: "WP Pipelines", health: 88, status: "Preferred" }
                                ].map((pillar, i) => (
                                    <div key={i} className="p-3 rounded-xl bg-gray-50/50 dark:bg-midnight-950/50 border border-transparent hover:border-amber-100 transition-all group/pillar">
                                        <div className="space-y-0.5 mb-1.5">
                                            <h4 className="font-bold text-gray-900 dark:text-white group-hover/pillar:text-amber-600 transition-colors text-sm">{pillar.name}</h4>
                                            <p className="text-xs font-black uppercase tracking-widest text-gray-500">{pillar.status}</p>
                                        </div>
                                        <div className="h-0.5 w-full bg-gray-100 dark:bg-midnight-800 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${pillar.health}%` }}
                                                viewport={{ once: true }}
                                                className="h-full bg-amber-500"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Additional Strategic Meta Card */}
                    <Card className="admin-card admin-card-unified admin-card-hover flex flex-col group rounded-2xl">
                        <CardHeader className="p-4 pb-2">
                            <div className="w-7 h-7 rounded-lg bg-white/20 border border-white/20 flex items-center justify-center mb-2">
                                <Orbit size={14} />
                            </div>
                            <h2 className="text-base font-black text-gray-900 dark:text-white tracking-tight">Ecosystem Mastery</h2>
                            <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mt-0.5">Strategic roadmap</p>
                        </CardHeader>
                        <CardContent className="p-4 pt-0 flex-1 flex flex-col justify-center">
                            <div className="space-y-2.5">
                                <p className="text-sm text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                                    Deploying technical SEO pillars across 12 domains. GEO optimization sequence initiated.
                                </p>
                                <div className="flex flex-wrap gap-1">
                                    {["Dubai Tech", "AI Hub"].map(tag => (
                                        <span key={tag} className="px-1.5 py-0.5 bg-gray-100 dark:bg-midnight-900 border border-gray-200 dark:border-midnight-700 rounded-full text-xs text-gray-700 dark:text-gray-300 font-bold uppercase tracking-widest">{tag}</span>
                                    ))}
                                </div>
                                <Button className="w-full h-9 bg-white dark:bg-midnight-900 text-gray-900 dark:text-white border border-gray-200 dark:border-midnight-700 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-gray-100 dark:hover:bg-midnight-800 transition-all">
                                    View Strategy Link
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

