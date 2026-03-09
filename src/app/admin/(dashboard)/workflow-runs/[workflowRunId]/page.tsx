import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { connectToDatabase } from "@/lib/db";
import { ContentDraft } from "@/lib/models/content-draft";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/admin/page-header";

export default async function WorkflowRunDetailPage({
  params,
}: {
  params: Promise<{ workflowRunId: string }>;
}) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

  const { workflowRunId } = await params;

  const db = await connectToDatabase();
  if (!db) redirect("/admin/workflow-runs");

  const drafts = await ContentDraft.find({ workflowRunId })
    .sort({ workflowStepIndex: 1, createdAt: 1 })
    .select({
      type: 1,
      promptKey: 1,
      title: 1,
      content: 1,
      workflowKey: 1,
      workflowStepId: 1,
      workflowStepIndex: 1,
      createdAt: 1,
    })
    .lean();

  if (drafts.length === 0) redirect("/admin/workflow-runs");

  const workflowKey = String((drafts[0] as any).workflowKey || "");

  return (
    <div className="admin-page-stack space-y-6 pb-8 w-full">
      <PageHeader
        title="Workflow Run"
        subtitle={`${workflowRunId} · ${workflowKey || "workflow"} · ${drafts.length} steps`}
        breadcrumb={[
          { label: "Dashboard", href: "/admin/dashboard" },
          { label: "Workflow Runs", href: "/admin/workflow-runs" },
          { label: "Detail" },
        ]}
        actions={
          <Link href="/admin/workflow-runs" className="inline-flex h-9 items-center rounded-lg border border-slate-200 px-3 text-sm hover:bg-slate-50">
            Back
          </Link>
        }
      />

      <Card className="admin-card rounded-xl overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-semibold">Steps</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Step</th>
                  <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Prompt</th>
                  <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Title</th>
                  <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Created</th>
                  <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {drafts.map((d: any) => {
                  const id = String(d._id);
                  return (
                    <tr key={id} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="px-4 py-3 text-sm text-slate-700">{d.workflowStepIndex || "-"}</td>
                      <td className="px-4 py-3 text-sm text-slate-700">{d.promptKey || d.workflowStepId || "-"}</td>
                      <td className="px-4 py-3 text-sm text-slate-900 font-medium max-w-[360px] truncate">{d.title || "Untitled"}</td>
                      <td className="px-4 py-3 text-sm text-slate-500">{d.createdAt ? new Date(d.createdAt).toLocaleString() : ""}</td>
                      <td className="px-4 py-3 text-right">
                        <Link href={`/admin/drafts/${id}`} className="inline-flex h-8 items-center rounded-lg border border-slate-200 px-3 text-sm hover:bg-slate-50">
                          View Draft
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
