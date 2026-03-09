import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { connectToDatabase } from "@/lib/db";
import { ContentDraft } from "@/lib/models/content-draft";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { DraftDeleteButton } from "@/components/admin/draft-delete-button";
import { PageHeader } from "@/components/admin/page-header";
import { CopyButton } from "@/components/admin/copy-button";

const TYPE_BADGES: Record<string, string> = {
  blog: "bg-blue-100 text-blue-700",
  landing: "bg-violet-100 text-violet-700",
  seo: "bg-emerald-100 text-emerald-700",
  email: "bg-amber-100 text-amber-700",
  social: "bg-pink-100 text-pink-700",
  other: "bg-slate-100 text-slate-700",
};

export default async function DraftDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

  const { id } = await params;

  const db = await connectToDatabase();
  if (!db) redirect("/admin/drafts");

  const draft = await ContentDraft.findById(id).lean();
  if (!draft) redirect("/admin/drafts");

  const d: any = draft;
  const variables = d.variables ? JSON.stringify(d.variables, null, 2) : "{}";
  const content = d.content || "";
  const draftType = String(d.type || "other").toLowerCase();

  return (
    <div className="admin-page-stack space-y-6 pb-8 w-full">
      <PageHeader
        title={d.title || "Untitled Draft"}
        subtitle={`${draftType} · ${d.promptKey}${d.modelName ? ` · ${d.modelName}` : ""}${d.workflowRunId ? ` · Run ${d.workflowRunId}` : ""}`}
        breadcrumb={[
          { label: "Dashboard", href: "/admin/dashboard" },
          { label: "Drafts", href: "/admin/drafts" },
          { label: "Detail" },
        ]}
        actions={
          <>
            <CopyButton value={content} label="Copy Content" />
            {d.workflowRunId ? (
              <Link href={`/admin/workflow-runs/${d.workflowRunId}`} className="inline-flex h-9 items-center rounded-lg border border-slate-200 px-3 text-sm hover:bg-slate-50">
                View Run
              </Link>
            ) : null}
            <Link href="/admin/drafts" className="inline-flex h-9 items-center rounded-lg border border-slate-200 px-3 text-sm hover:bg-slate-50">
              Back
            </Link>
            <DraftDeleteButton draftId={String(d._id)} />
          </>
        }
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        <Card className="admin-card rounded-xl lg:col-span-8">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold">Content</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${TYPE_BADGES[draftType] || TYPE_BADGES.other}`}>{draftType}</span>
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">{d.promptKey || "-"}</span>
            </div>
            <pre className="max-h-[520px] overflow-auto rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs text-slate-800 whitespace-pre-wrap">{content}</pre>
          </CardContent>
        </Card>

        <Card className="admin-card rounded-xl lg:col-span-4">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold">Metadata</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">Created</p>
              <p className="mt-1 text-slate-700">{d.createdAt ? new Date(d.createdAt).toLocaleString() : "-"}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">Model</p>
              <p className="mt-1 text-slate-700">{d.modelName || "-"}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">Workflow Run</p>
              <div className="mt-1">
                {d.workflowRunId ? (
                  <Link href={`/admin/workflow-runs/${d.workflowRunId}`} className="text-indigo-700 hover:underline">
                    {d.workflowRunId}
                  </Link>
                ) : (
                  <span className="text-slate-700">-</span>
                )}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">ID</p>
              <p className="mt-1 break-all font-mono text-xs">{String(d._id)}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">Variables</p>
              <pre className="mt-1 max-h-[220px] overflow-auto rounded-lg border border-slate-200 bg-white p-3 text-xs whitespace-pre-wrap">{variables}</pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
