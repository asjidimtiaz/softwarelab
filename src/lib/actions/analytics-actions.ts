"use server";

import { connectToDatabase } from "@/lib/db";
import { Lead } from "@/lib/models/lead";
import { startOfDay, subDays, startOfMonth, format } from "date-fns";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";

export async function getDashboardStats() {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Unauthorized");

  await connectToDatabase();

  const totalLeads = await Lead.countDocuments();
  const newLeads = await Lead.countDocuments({ status: "NEW" });

  // Calculate average score for "HOT" leads as a proxy for pipeline quality
  const hotLeads = await Lead.find({ leadTier: "HOT" }).select("leadScore");
  const avgHotScore = hotLeads.length > 0
    ? Math.round(hotLeads.reduce((acc, lead) => acc + (lead.leadScore || 0), 0) / hotLeads.length)
    : 0;

  // Recent leads (last 30 days)
  const thirtyDaysAgo = subDays(new Date(), 30);
  const recentLeadsCount = await Lead.countDocuments({ createdAt: { $gte: thirtyDaysAgo } });

  return {
    totalLeads,
    hotLeads: hotLeads.length,
    newLeads,
    avgHotScore,
    recentLeadsCount,
    kpis: [
      { label: "Total Intake", value: totalLeads, trend: "+12%", type: "neutral" },
      { label: "New Leads", value: newLeads, trend: "Active", type: "primary" },
      { label: "Avg Quality", value: `${avgHotScore}%`, trend: "Hot", type: "success" },
      { label: "30d Volume", value: recentLeadsCount, trend: "+5%", type: "neutral" },
    ]
  };
}

export async function getLeadTrends() {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Unauthorized");

  await connectToDatabase();

  const last7Days = Array.from({ length: 7 }).map((_, i) => {
    const d = subDays(new Date(), 6 - i);
    return {
      date: format(d, "MMM dd"),
      rawDate: startOfDay(d),
      count: 0
    };
  });

  const leads = await Lead.find({
    createdAt: { $gte: last7Days[0].rawDate }
  }).select("createdAt");

  leads.forEach(lead => {
    const leadDate = format(lead.createdAt, "MMM dd");
    const day = last7Days.find(d => d.date === leadDate);
    if (day) day.count++;
  });

  return last7Days.map(({ date, count }) => ({ name: date, leads: count }));
}

export async function getCategoryDistribution() {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Unauthorized");

  await connectToDatabase();

  const distribution = await Lead.aggregate([
    { $group: { _id: "$serviceCategory", value: { $sum: 1 } } },
    { $project: { name: { $toUpper: "$_id" }, value: 1 } },
    { $sort: { value: -1 } }
  ]);

  return distribution.map(item => ({
    ...item,
    name: item.name.replace("-", " ")
  }));
}
