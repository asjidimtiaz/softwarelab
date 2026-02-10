"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";
import { ArrowUpRight, Calendar } from "lucide-react";

const data = [
  { name: "Mon", value: 400 },
  { name: "Tue", value: 300 },
  { name: "Wed", value: 500 },
  { name: "Thu", value: 450 },
  { name: "Fri", value: 600 },
  { name: "Sat", value: 550 },
  { name: "Sun", value: 700 },
];

export function AnalyticsChart() {
  return (
    <Card className="rounded-2xl border-border bg-white dark:bg-midnight-900 shadow-sm overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between p-5 pb-1">
        <div className="space-y-0.5">
          <CardTitle className="text-base font-black">Lead Acquisition Flow</CardTitle>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/30">Weekly performance pulse</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-500 text-[9px] font-black uppercase tracking-widest border border-emerald-500/20">
            <ArrowUpRight size={12} />
            <span>+12.5%</span>
          </div>
          <button className="w-8 h-8 rounded-lg hover:bg-secondary flex items-center justify-center transition-colors text-muted-foreground/40">
            <Calendar size={14} />
          </button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-[240px] w-full mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" opacity={0.5} />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#94a3b8', fontSize: 9, fontWeight: 800 }}
                dy={5}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#94a3b8', fontSize: 9, fontWeight: 800 }}
                width={30}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-indigo-950 text-white text-[9px] font-black px-2.5 py-1.5 rounded-lg shadow-2xl border border-white/10 uppercase tracking-widest">
                        {payload[0].value} <span className="text-indigo-300">Leads</span>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#4F46E5"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorValue)"
                animationDuration={1500}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
