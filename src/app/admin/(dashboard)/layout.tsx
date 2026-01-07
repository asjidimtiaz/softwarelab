import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { redirect } from "next/navigation";
import { Search, Bell } from "lucide-react";
import { cn } from "@/lib/utils";
import { PageTransition } from "@/components/ui/page-transition";
import { SidebarNav } from "@/components/admin/sidebar-nav";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }


  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden font-sans grid-bg">
      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-50">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-blue/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Sidebar */}
      <aside className="w-80 border-r border-border bg-white/70 backdrop-blur-3xl flex flex-col p-8 z-20 shrink-0">
        <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-border overflow-hidden">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Courtney" alt="User" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
                <div className="flex items-center justify-between">
                    <h3 className="font-bold text-sm tracking-tight">Elite Admin</h3>
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                </div>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none mt-1">Online</p>
            </div>
        </div>

        <SidebarNav />
      </aside>

      {/* Main Stream */}
      <main className="flex-1 flex flex-col min-w-0 bg-transparent overflow-hidden">
        {/* Integrated Header */}
        <header className="h-24 shrink-0 flex items-center justify-between px-12 bg-transparent sticky top-0 z-40">
          <div className="flex items-center gap-8 flex-1 max-w-2xl group">
             <div className="relative flex-1">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={20} />
                <input 
                  type="text" 
                  placeholder="Ask AI or search anything..." 
                  className="w-full h-14 pl-16 pr-6 bg-white border border-border rounded-full outline-none shadow-sm focus:ring-4 focus:ring-primary/10 transition-all font-bold text-sm placeholder:text-muted-foreground/40"
                />
             </div>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-muted-foreground hover:bg-secondary hover:text-primary transition-all relative shadow-sm">
               <Bell size={22} />
               <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-primary rounded-full border-2 border-white" />
            </button>
            <div className="w-12 h-12 rounded-full border border-border overflow-hidden shadow-sm">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Courtney" alt="User" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        {/* Dynamic Page Container */}
        <div className="flex-1 overflow-y-auto p-8 lg:p-12 custom-scrollbar">
           <PageTransition>
              {children}
           </PageTransition>
        </div>
      </main>
    </div>
  );
}
