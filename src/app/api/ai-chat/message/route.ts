import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import ChatSession from "@/lib/models/chat";
import { processChatMessage } from "@/lib/chat-engine";

// Force absolute refresh on path change: /api/ai-chat/message
export async function POST(req: NextRequest) {
    try {
        await connectToDatabase();
        const { sessionId, message } = await req.json();

        if (!sessionId || !message) {
            return NextResponse.json({ success: false, error: "Missing sessionId or message" }, { status: 400 });
        }

        const session = await ChatSession.findOne({ sessionId });
        if (!session) {
            return NextResponse.json({ success: false, error: "Session not found" }, { status: 404 });
        }

        const assistantReply = await processChatMessage(session, message);

        return NextResponse.json({
            success: true,
            reply: assistantReply,
            mode: session.mode,
            leadScore: session.leadScore,
            isConverted: session.isConverted
        });
    } catch (error) {
        console.error("AI Chat Message Error:", error);
        return NextResponse.json({ success: false, error: "Message processing failed" }, { status: 500 });
    }
}
