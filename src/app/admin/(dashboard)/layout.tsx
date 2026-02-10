import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { redirect } from "next/navigation";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { PageTransition } from "@/components/ui/page-transition";
import { SidebarNav } from "@/components/admin/sidebar-nav";
import { SidebarLogo } from "@/components/admin/sidebar-logo";
import { NotificationPopover } from "@/components/admin/notification-popover";

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

      {/* Compressed Sidebar */}
      <aside className="w-20 border-r border-border bg-white/70 backdrop-blur-3xl flex flex-col items-center py-6 gap-10 z-20 shrink-0 relative">
        <SidebarLogo />
        <SidebarNav isCompressed={true} />
      </aside>

      {/* Main Stream */}
      <main className="flex-1 flex flex-col min-w-0 w-full bg-transparent overflow-hidden">
        {/* Integrated Header */}
        <header className="h-20 shrink-0 flex items-center justify-between px-6 lg:px-8 bg-transparent sticky top-0 z-40 w-full">
          <div className="flex items-center gap-8 flex-1 max-w-2xl group">
            <div className="relative flex-1">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={20} />
              <input
                type="text"
                placeholder="Ask AI or search anything..."
                className="w-full h-12 pl-14 pr-6 bg-white border border-border rounded-full outline-none shadow-sm focus:ring-4 focus:ring-primary/10 transition-all font-bold text-xs placeholder:text-muted-foreground/40"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <NotificationPopover />
          </div>
        </header>

        {/* Dynamic Page Container */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden w-full p-4 lg:p-8 custom-scrollbar">
          <PageTransition>
            <div className="w-full">
              {children}
            </div>
          </PageTransition>
        </div>
      </main>
    </div>
  );
}
