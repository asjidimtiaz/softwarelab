"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BarChart3, Users, CheckSquare, Settings, LogOut, FileText, Palette } from "lucide-react";
import { cn } from "@/lib/utils";
import { signOut } from "next-auth/react";

const navItems = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { name: "Leads", href: "/admin/leads", icon: Users },
  { name: "Tasks", href: "/admin/tasks", icon: CheckSquare },
  { name: "Branding", href: "/admin/branding", icon: Palette },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

interface NavItemProps {
  item: {
    name: string;
    href?: string;
    icon: any;
  };
  isActive?: boolean;
  isLink?: boolean;
}

function NavItem({ item, isActive, isLink = true }: NavItemProps) {
  const Icon = item.icon;

  const content = (
    <>
      <div className={cn(
        "w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm",
        isActive
          ? "bg-white/20 text-white"
          : "bg-white border border-border/60 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20"
      )}>
        <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
      </div>
      <span className={cn(
        "text-sm font-bold tracking-tight transition-colors duration-300",
        isActive ? "text-white" : "text-muted-foreground/80 group-hover:text-foreground"
      )}>
        {item.name}
      </span>
    </>
  );

  if (isLink && item.href) {
    return (
      <Link
        href={item.href}
        className={cn(
          "flex items-center gap-3 px-4 py-2.5 rounded-[1rem] transition-all duration-300 group relative mb-1 ring-offset-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          isActive
            ? "bg-indigo-600 shadow-md shadow-indigo-600/20"
            : "hover:bg-white/60 hover:shadow-sm"
        )}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={() => signOut({ callbackUrl: "/admin/login" })}
      className="w-full flex items-center gap-3 px-4 py-2.5 rounded-[1rem] transition-all duration-300 group relative mb-1 hover:bg-rose-50 hover:shadow-sm"
    >
      <div className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm bg-white border border-border/60 text-muted-foreground group-hover:bg-rose-500/10 group-hover:text-rose-500 group-hover:border-rose-200">
        <LogOut size={18} />
      </div>
      <span className="text-sm font-bold tracking-tight text-muted-foreground/80 group-hover:text-rose-600 transition-colors">
        Sign Out
      </span>
    </button>
  )
}

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="flex-1 flex flex-col h-full">
      <div className="flex-1 space-y-1">
        <p className="px-5 text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/40 mb-4 mt-2">Operations</p>
        {navItems.map(item => (
          <NavItem
            key={item.href}
            item={item}
            isActive={pathname === item.href}
          />
        ))}
      </div>

      <div className="mt-auto pt-6 border-t border-border/50 space-y-1">
        <Link
          href="/admin/settings"
          className={cn(
            "flex items-center gap-3 px-4 py-2.5 rounded-[1rem] transition-all duration-300 group relative mb-1",
            pathname === "/admin/settings/preferences"
              ? "bg-indigo-600 shadow-md shadow-indigo-600/20"
              : "hover:bg-white/60 hover:shadow-sm"
          )}
        >
          <div className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm bg-white border border-border/60 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20">
            <FileText size={18} />
          </div>
          <span className="text-sm font-bold tracking-tight text-muted-foreground/80 group-hover:text-foreground">
            Docs & Guide
          </span>
        </Link>
        <NavItem
          item={{ name: "Sign Out", icon: LogOut }}
          isLink={false}
        />
      </div>
    </nav>
  );
}
