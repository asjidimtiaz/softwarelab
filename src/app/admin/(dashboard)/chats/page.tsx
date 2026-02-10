"use client";

import { motion } from "framer-motion";
import { MessageSquare, Users, Phone, Video, Search, Filter, Terminal } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function ChatsPage() {
    const contacts = [
        { name: "Asjid Imtiaz", status: "online", lastMsg: "Let's review the AI logic map.", time: "2m ago" },
        { name: "Toqeer Shafique", status: "away", lastMsg: "The lead score logic is updated.", time: "1h ago" },
        { name: "Support Hub", status: "online", lastMsg: "New inquiry from TechCorp.", time: "5h ago" },
    ];

    return (
        <div className="h-[calc(100vh-16rem)] flex flex-col gap-8">
            <div className="shrink-0">
                <h1 className="text-4xl font-black tracking-tight text-gray-900 uppercase">Unified <span className="text-electric">Chats</span></h1>
                <p className="text-lg font-bold text-gray-400 mt-2 italic flex items-center gap-2">
                    <Terminal size={18} />
                    Secure Communication Protocol Active.
                </p>
            </div>

            <div className="flex-1 flex gap-8 min-h-0">
                {/* Sidebar: Contacts */}
                <div className="w-80 flex flex-col gap-6 shrink-0">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                        <input
                            type="text"
                            placeholder="Search conversations..."
                            className="w-full h-12 pl-12 pr-4 bg-white border border-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-electric/10 transition-all font-bold text-sm"
                        />
                    </div>

                    <Card className="flex-1 rounded-[2.5rem] border-gray-100 bg-white shadow-sm overflow-hidden flex flex-col p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-sm uppercase tracking-widest text-gray-400 px-2">Recent</h3>
                            <Filter size={14} className="text-gray-400 cursor-pointer hover:text-electric" />
                        </div>
                        <div className="space-y-2 overflow-y-auto flex-1 custom-scrollbar">
                            {contacts.map((contact, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 rounded-3xl hover:bg-gray-50 transition-all cursor-pointer group">
                                    <div className="relative">
                                        <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400 text-lg font-black uppercase">
                                            {contact.name.charAt(0)}
                                        </div>
                                        {contact.status === "online" && (
                                            <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" />
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-bold text-sm text-gray-900">{contact.name}</span>
                                            <span className="text-[9px] font-bold text-gray-400 uppercase">{contact.time}</span>
                                        </div>
                                        <p className="text-xs text-gray-400 font-medium truncate italic">"{contact.lastMsg}"</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

                {/* Chat Area */}
                <Card className="flex-1 rounded-[3rem] border-gray-100 bg-white shadow-sm overflow-hidden flex flex-col relative group">
                    <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03]" />

                    <div className="p-8 border-b border-gray-50 flex items-center justify-between relative z-10 bg-white/50 backdrop-blur-md">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-gray-900 flex items-center justify-center text-white font-black uppercase">A</div>
                            <div>
                                <h3 className="font-bold text-lg text-gray-900 leading-none">Asjid Imtiaz</h3>
                                <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mt-1">Active Now</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="w-12 h-12 rounded-xl border border-gray-100 flex items-center justify-center text-gray-400 hover:text-electric transition-colors"><Phone size={20} /></button>
                            <button className="w-12 h-12 rounded-xl border border-gray-100 flex items-center justify-center text-gray-400 hover:text-electric transition-colors"><Video size={20} /></button>
                        </div>
                    </div>

                    <div className="flex-1 p-12 flex flex-col items-center justify-center text-center opacity-50 relative z-10">
                        <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 mb-8 border border-white">
                            <MessageSquare size={40} />
                        </div>
                        <h3 className="text-2xl font-black text-gray-400 uppercase tracking-tight">Select a Secure <span className="text-electric">Channel</span></h3>
                        <p className="max-w-xs text-gray-400 font-bold mt-4 italic">Encrypted communication channel with team members and leads.</p>
                    </div>

                    <div className="p-8 relative z-10 bg-white/50 backdrop-blur-md">
                        <div className="h-16 bg-gray-50 border border-gray-100 rounded-2xl px-8 flex items-center">
                            <p className="text-gray-300 font-black text-xs uppercase tracking-widest italic">Encrypted Transmission Blocked in Preview...</p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
