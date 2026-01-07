import { Shield, Database, Globe, User } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function SettingsPage() {
  const envStatus = {
    db: !!process.env.MONGODB_URI,
    auth: !!process.env.NEXTAUTH_SECRET,
    automation: !!process.env.N8N_WEBHOOK_URL,
    url: process.env.NEXTAUTH_URL || 'Not Set'
  };

  const adminInfo = {
    email: process.env.ADMIN_EMAIL || 'admin@softwarelab.com',
    role: "System Administrator",
    access: "Level 5 - Full Control"
  };

  const sections = [
    {
      title: "Security Protocols",
      description: "Access control and authentication layers.",
      icon: Shield,
      items: [
        { label: "Admin Email", value: adminInfo.email },
        { label: "Access Tier", value: adminInfo.access },
        { label: "Auth Layer", value: envStatus.auth ? "Active (V7 Secure)" : "Disabled", status: envStatus.auth }
      ]
    },
    {
      title: "Infrastructure",
      description: "Backend engines and core connectivity.",
      icon: Database,
      items: [
        { label: "Database Engine", value: "MongoDB Atlas Cluster" },
        { label: "Connection Status", value: envStatus.db ? "Established" : "Missing URI", status: envStatus.db },
        { label: "API Base URL", value: envStatus.url }
      ]
    },
    {
       title: "Operations Hub",
       description: "Global synchronization and automations.",
       icon: Globe,
       items: [
         { label: "Automation Bridge", value: envStatus.automation ? "Operational" : "Disconnected", status: envStatus.automation },
         { label: "Regional Logic", value: "Enabled (I18n Sync)" },
         { label: "Deployment Zone", value: "Production Terminal" }
       ]
    }
  ];

  return (
    <div className="p-12 space-y-12 pb-20">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-foreground">System Configuration</h1>
          <p className="text-sm font-bold text-muted-foreground/50 mt-2 uppercase tracking-widest">Manage laboratory environment and security parameters</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {sections.map(section => (
          <Card key={section.title} className="group border-border bg-white p-10 hover:shadow-xl hover:shadow-primary/5 transition-all overflow-hidden relative rounded-[2.5rem] shadow-sm">
            <div className="flex items-center gap-6 mb-12">
               <div className="w-16 h-16 bg-secondary rounded-[1.5rem] flex items-center justify-center text-primary border border-border group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <section.icon size={28} />
               </div>
               <div>
                  <h2 className="text-xl font-bold tracking-tight text-foreground">{section.title}</h2>
                  <p className="text-[10px] font-black text-muted-foreground/40 uppercase tracking-[0.2em] mt-1.5">{section.description}</p>
               </div>
            </div>

            <div className="space-y-6 relative z-10">
               {section.items.map(item => (
                 <div key={item.label} className="flex items-center justify-between group/item">
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/40 group-hover/item:text-primary transition-colors">{item.label}</span>
                    <div className="flex items-center gap-4">
                       <span className="text-sm font-bold tabular-nums text-foreground">{item.value}</span>
                       {item.hasOwnProperty('status') && (
                         <div className={cn(
                            "w-2.5 h-2.5 rounded-full",
                            item.status ? "bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]" : "bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.3)]"
                         )} />
                       )}
                    </div>
                 </div>
               ))}
            </div>
            
            <Button variant="outline" className="w-full mt-12 h-14 rounded-2xl border-border text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-white hover:border-primary transition-all">
               Modify Settings
            </Button>
          </Card>
        ))}

        {/* User Card */}
        <div className="bg-gradient-to-br from-indigo-950 via-indigo-900 to-primary rounded-[2.5rem] p-12 shadow-2xl flex flex-col justify-between overflow-hidden relative group">
           <div className="relative z-10">
              <div className="flex items-center gap-8 mb-12 text-white">
                 <div className="w-24 h-24 bg-white/10 rounded-[2.5rem] flex items-center justify-center backdrop-blur-xl border border-white/10 shadow-2xl group-hover:scale-105 transition-transform">
                    <User size={48} className="text-primary" />
                 </div>
                 <div>
                    <h2 className="text-3xl font-black tracking-tight text-white leading-tight">Admin Hub<br/>Session</h2>
                    <p className="text-[11px] font-black opacity-60 uppercase tracking-[0.3em] mt-3">Active Authorized Operator</p>
                 </div>
              </div>
              <p className="text-[15px] font-bold opacity-80 leading-relaxed mb-12 max-w-[320px] text-indigo-100/80">
                You are currently operating in the Laboratory Command Hub. All actions are logged under master administrative protocol.
              </p>
           </div>
           
           <Button className="relative z-10 w-full h-16 bg-white text-indigo-950 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl transition-all hover:scale-105 active:scale-95">
              Access Security Terminal
           </Button>

           <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
           <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-500/10 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
      </div>
    </div>
  );
}
