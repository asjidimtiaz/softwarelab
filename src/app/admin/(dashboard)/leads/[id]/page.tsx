import { getLeadById } from "@/lib/actions/lead-actions";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LeadDetailsClient } from "@/components/admin/lead-details-client";
import { PageHeader } from "@/components/admin/page-header";
import Link from "next/link";

export default async function LeadDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const lead = await getLeadById(id);
  if (!lead) notFound();

  const score = Math.max(0, Math.min(100, Number(lead.leadScore || 0)));

  return (
    <div className="admin-page-stack space-y-6 pb-8 w-full">
      <PageHeader
        title={lead.fullName || "Unknown Lead"}
        subtitle={`${lead.email}${lead.company ? ` · ${lead.company}` : ""}`}
        breadcrumb={[
          { label: "Dashboard", href: "/admin/dashboard" },
          { label: "Leads", href: "/admin/leads" },
          { label: "Detail" },
        ]}
        actions={
          <>
            <Link
              href={`mailto:${lead.email}`}
              className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-300 px-6 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Email Lead
            </Link>
            <Button variant="outline" className="font-medium">Lead ID: {String(lead._id).slice(-8)}</Button>
          </>
        }
      />

      <section className="rounded-xl border border-slate-200 bg-white p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm text-slate-500">Lead Score</p>
            <p className="text-2xl font-semibold text-slate-900">{score}/100</p>
          </div>
          <span className={`rounded-full px-3 py-1 text-sm font-semibold ${
            lead.leadTier === "HOT"
              ? "bg-red-100 text-red-700"
              : lead.leadTier === "WARM"
                ? "bg-amber-100 text-amber-700"
                : "bg-slate-100 text-slate-600"
          }`}>
            {lead.leadTier || "COLD"}
          </span>
        </div>
        <div className="mt-3 h-2 w-full rounded-full bg-slate-100">
          <div className="h-full rounded-full bg-indigo-600" style={{ width: `${score}%` }} />
        </div>
      </section>

      <LeadDetailsClient
        leadId={id}
        initialStatus={lead.status || "NEW"}
        initialNotes={lead.notes || []}
        initialTasks={lead.tasks || []}
        initialEvents={lead.events || []}
      />
    </div>
  );
}


