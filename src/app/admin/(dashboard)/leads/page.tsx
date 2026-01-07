import { getLeads } from "@/lib/actions/lead-actions";
import { LeadsTable } from "@/components/admin/leads-table";
import { LeadsHeader } from "@/components/admin/leads-header";

export default async function LeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ 
    q?: string; 
    status?: string; 
    tier?: string; 
    page?: string 
  }>;
}) {
  const { q, status, tier, page } = await searchParams;
  const pageNum = parseInt(page || "1");

  const { leads, total, pages } = await getLeads({
    query: q,
    status,
    tier,
    page: pageNum,
  });

  return (
    <div className="p-12 space-y-10">
        <LeadsHeader />

        <LeadsTable leads={leads} />
        
        {pages > 1 && (
            <div className="mt-16 flex justify-center items-center gap-4">
                <Button variant="outline" size="sm" className="h-12 w-12 p-0 rounded-2xl border-border" disabled={pageNum === 1}>
                   <ArrowRight size={18} className="rotate-180" />
                </Button>
                {Array.from({ length: pages }).map((_, i) => (
                    <Button 
                        key={i}
                        variant={pageNum === i + 1 ? "primary" : "outline"}
                        className={cn(
                          "w-12 h-12 p-0 rounded-2xl font-black transition-all border-border text-[11px]",
                          pageNum === i + 1 ? "bg-primary text-white shadow-lg shadow-primary/20 scale-110" : "text-muted-foreground hover:bg-secondary"
                        )}
                        onClick={() => {
                          const params = new URLSearchParams(window.location.search);
                          params.set("page", (i+1).toString());
                          window.location.search = params.toString();
                        }}
                    >
                        {i + 1}
                    </Button>
                ))}
                <Button variant="outline" size="sm" className="h-12 w-12 p-0 rounded-2xl border-border" disabled={pageNum === pages}>
                   <ArrowRight size={18} />
                </Button>
            </div>
        )}
    </div>
  );
}

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
