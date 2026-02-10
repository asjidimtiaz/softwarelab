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
    <div className="p-6 lg:p-10 space-y-6">
      <LeadsHeader />

      <LeadsTable leads={leads} />

      {pages > 1 && (
        <div className="mt-10 flex justify-center items-center gap-2">
          <Button variant="outline" size="sm" className="h-9 w-9 p-0 rounded-xl border-border" disabled={pageNum === 1}>
            <ArrowRight size={14} className="rotate-180" />
          </Button>
          {Array.from({ length: pages }).map((_, i) => (
            <Button
              key={i}
              variant={pageNum === i + 1 ? "primary" : "outline"}
              className={cn(
                "w-9 h-9 p-0 rounded-xl font-black transition-all border-border text-[10px]",
                pageNum === i + 1 ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105" : "text-muted-foreground hover:bg-secondary"
              )}
              onClick={() => {
                const params = new URLSearchParams(window.location.search);
                params.set("page", (i + 1).toString());
                window.location.search = params.toString();
              }}
            >
              {i + 1}
            </Button>
          ))}
          <Button variant="outline" size="sm" className="h-9 w-9 p-0 rounded-xl border-border" disabled={pageNum === pages}>
            <ArrowRight size={14} />
          </Button>
        </div>
      )}
    </div>
  );
}

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
