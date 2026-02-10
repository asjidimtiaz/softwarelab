"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Mail, Briefcase, DollarSign, Send, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { createLead } from "@/lib/actions/lead-actions";

interface AddLeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddLeadModal({ isOpen, onClose }: AddLeadModalProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    serviceCategory: "Software Dev",
    serviceInterest: "Custom ERP",
    budgetRange: "$5k - $10k",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createLead(formData);
      onClose();
      setFormData({
        fullName: "",
        email: "",
        company: "",
        serviceCategory: "Software Dev",
        serviceInterest: "Custom ERP",
        budgetRange: "$5k - $10k",
        message: ""
      });
    } catch (err) {
      console.error(err);
      alert("Failed to create lead");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-indigo-950/20 backdrop-blur-md z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl bg-white border border-white/50 rounded-2xl shadow-2xl shadow-primary/10 z-[101] overflow-hidden"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-border/50 flex items-center justify-between bg-primary/5">
              <div>
                <h2 className="text-xl font-black tracking-tighter italic uppercase">New Brief Intake</h2>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/40 mt-0.5">Manual Laboratory Entry</p>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg bg-secondary hover:bg-destructive hover:text-white flex items-center justify-center transition-all"
              >
                <X size={16} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={14} />
                    <input
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full h-11 pl-11 pr-4 bg-secondary/10 border border-border/50 rounded-xl font-bold text-xs focus:ring-2 focus:ring-primary outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={14} />
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-11 pl-11 pr-4 bg-secondary/10 border border-border/50 rounded-xl font-bold text-xs focus:ring-2 focus:ring-primary outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black uppercase tracking-widest text-muted-foreground ml-1">Service category</label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={14} />
                    <select
                      value={formData.serviceCategory}
                      onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                      className="w-full h-11 pl-11 pr-4 bg-secondary/10 border border-border/50 rounded-xl font-bold text-xs focus:ring-2 focus:ring-primary outline-none transition-all appearance-none"
                    >
                      <option>Software Dev</option>
                      <option>AI Solutions</option>
                      <option>Cloud Infrastructure</option>
                      <option>Cybersecurity</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black uppercase tracking-widest text-muted-foreground ml-1">Investment Range</label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={14} />
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full h-11 pl-11 pr-4 bg-secondary/10 border border-border/50 rounded-xl font-bold text-xs focus:ring-2 focus:ring-primary outline-none transition-all appearance-none"
                    >
                      <option>$5k - $10k</option>
                      <option>$10k - $25k</option>
                      <option>$25k - $50k</option>
                      <option>$50k+</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[9px] font-black uppercase tracking-widest text-muted-foreground ml-1">Project Brief</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-secondary/10 border border-border/50 rounded-xl p-4 font-bold text-xs focus:ring-2 focus:ring-primary outline-none transition-all resize-none h-24"
                  placeholder="Outline the core requirements..."
                />
              </div>

              <button
                disabled={loading}
                className="w-full h-12 bg-indigo-600 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-indigo-600/20 flex items-center justify-center gap-3"
              >
                {loading ? <Loader2 className="animate-spin" size={16} /> : (
                  <>
                    <Send size={14} />
                    Initialize Lead
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
