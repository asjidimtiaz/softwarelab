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
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white border border-white/50 rounded-[3rem] shadow-2xl shadow-primary/10 z-[101] overflow-hidden"
          >
            {/* Header */}
            <div className="p-8 border-b border-border/50 flex items-center justify-between bg-primary/5">
              <div>
                <h2 className="text-2xl font-black tracking-tight italic uppercase">New Brief Intake</h2>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mt-1">Manual Laboratory Entry</p>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-secondary hover:bg-destructive hover:text-white flex items-center justify-center transition-all"
              >
                <X size={20} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={16} />
                    <input 
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="w-full h-12 pl-12 pr-4 bg-secondary/20 border border-border/50 rounded-2xl font-bold focus:ring-2 focus:ring-primary outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={16} />
                    <input 
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full h-12 pl-12 pr-4 bg-secondary/20 border border-border/50 rounded-2xl font-bold focus:ring-2 focus:ring-primary outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Service category</label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={16} />
                    <select 
                      value={formData.serviceCategory}
                      onChange={(e) => setFormData({...formData, serviceCategory: e.target.value})}
                      className="w-full h-12 pl-12 pr-4 bg-secondary/20 border border-border/50 rounded-2xl font-bold focus:ring-2 focus:ring-primary outline-none transition-all appearance-none"
                    >
                      <option>Software Dev</option>
                      <option>AI Solutions</option>
                      <option>Cloud Infrastructure</option>
                      <option>Cybersecurity</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Investment Range</label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={16} />
                    <select 
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({...formData, budgetRange: e.target.value})}
                      className="w-full h-12 pl-12 pr-4 bg-secondary/20 border border-border/50 rounded-2xl font-bold focus:ring-2 focus:ring-primary outline-none transition-all appearance-none"
                    >
                      <option>$5k - $10k</option>
                      <option>$10k - $25k</option>
                      <option>$25k - $50k</option>
                      <option>$50k+</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Project Brief</label>
                <textarea 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-secondary/20 border border-border/50 rounded-2xl p-4 font-bold focus:ring-2 focus:ring-primary outline-none transition-all resize-none h-32"
                  placeholder="Outline the core requirements..."
                />
              </div>

              <button
                disabled={loading}
                className="w-full h-16 bg-primary text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-primary/20 flex items-center justify-center gap-3"
              >
                {loading ? <Loader2 className="animate-spin" size={20} /> : (
                  <>
                    <Send size={18} />
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
