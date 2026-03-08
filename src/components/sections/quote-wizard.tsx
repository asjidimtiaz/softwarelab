"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Send, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { serviceCatalog } from "@/lib/services-data";
import { submitQuote } from "@/lib/actions/quote-actions";
import { QuoteFormData } from "@/types/quote";

interface QuoteWizardProps {
  dict: any;
  isRtl: boolean;
  locale: string;
  preselectedService?: string;
}

const STORAGE_KEY = "quote_wizard_draft";

export function QuoteWizard({ dict, isRtl, locale, preselectedService }: QuoteWizardProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const steps = [
    { id: "category", title: "Laboratory Selection" },
    { id: "subservice", title: "Specific Solution" },
    { id: "project", title: dict.quote.wizard.steps.project },
    { id: "scope", title: dict.quote.wizard.steps.details },
    { id: "contact", title: dict.quote.wizard.steps.contact },
  ];

  const [formData, setFormData] = useState<Partial<QuoteFormData>>({
    serviceCategory: preselectedService || "",
    serviceInterest: "",
    projectType: "new build",
    budgetRange: "",
    timeline: "",
    fullName: "",
    email: "",
    message: "",
    honeypot: "",
  });

  // Set initial step based on preselection
  useEffect(() => {
    if (preselectedService) {
      setCurrentStep(1); // Skip to subservice step if category is preselected
    }
  }, [preselectedService]);

  // Load Draft
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setFormData(prev => ({ ...prev, ...parsed }));
      } catch (e) {
        console.error("Failed to parse draft", e);
      }
    }
  }, []);

  // Save Draft
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const result = await submitQuote({ ...formData, locale } as QuoteFormData);
    setIsSubmitting(false);
    if (result.success) {
      setIsDone(true);
      localStorage.removeItem(STORAGE_KEY);
    } else {
      alert(result.message);
    }
  };

  const updateForm = (field: keyof QuoteFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const activeCategory = serviceCatalog.find(c => c.slug === formData.serviceCategory);

  if (isDone) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20 bg-[#13131E] border border-[#1E1E2E] rounded-[3rem] p-12 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/5 to-transparent -z-10" />
        <div className="w-24 h-24 bg-[#6366F1]/10 text-[#6366F1] rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 size={48} />
        </div>
        <h2 className="text-4xl font-display font-extrabold tracking-tighter mb-6 text-[#F8F8FF]">{dict.quote.wizard.successTitle}</h2>
        <p className="text-xl text-[#94A3B8] font-body mb-10 max-w-md mx-auto leading-relaxed">
          {dict.quote.wizard.successDesc}
        </p>
        <button
          onClick={() => window.location.href = `/${locale}`}
          className="group inline-flex h-16 items-center justify-center rounded-xl bg-white border border-white px-10 font-display font-extrabold text-[13px] text-[#0A0A0F] uppercase tracking-widest transition-all hover:bg-gray-50 hover:scale-[1.02] active:scale-95 shadow-sm"
        >
          <span>{dict.quote.wizard.backHome}</span>
          <ChevronRight size={18} strokeWidth={2.5} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Progress Stepper */}
      <div className="mb-12">
        <div className="flex justify-between items-end mb-6">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#6366F1] mb-1">Step 0{currentStep + 1}</p>
            <h4 className="text-xl font-display font-bold tracking-tight text-[#F8F8FF]">{steps[currentStep].title}</h4>
          </div>
          <span className="text-[10px] font-body font-black uppercase tracking-widest text-[#94A3B8]">
            {Math.round(((currentStep + 1) / steps.length) * 100)}% Complete
          </span>
        </div>
        <div className="h-1.5 w-full bg-[#13131E] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#6366F1]"
            initial={false}
            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          />
        </div>
      </div>

      <div className="bg-[#13131E] border border-[#1E1E2E]/50 rounded-[2.5rem] p-8 md:p-12 min-h-[500px] flex flex-col shadow-2xl relative overflow-hidden">
        {/* Honeypot field - hidden */}
        <div className="hidden">
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={(e) => updateForm("honeypot", e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isRtl ? 20 : -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex-1"
          >
            {/* Step 1: Category */}
            {currentStep === 0 && (
              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-3xl font-display font-black tracking-tight text-[#F8F8FF]">{dict.quote.wizard.questions.service}</h3>
                  <p className="text-[#94A3B8] font-body font-medium">Select the primary laboratory for your project.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {serviceCatalog.map((cat) => (
                    <button
                      key={cat.slug}
                      onClick={() => {
                        updateForm("serviceCategory", cat.slug);
                        handleNext();
                      }}
                      className={cn(
                        "p-6 rounded-2xl border text-left transition-all hover:shadow-lg hover:shadow-[#6366F1]/10 group relative overflow-hidden",
                        formData.serviceCategory === cat.slug
                          ? "border-[#6366F1] bg-[#6366F1]/[0.03] ring-1 ring-[#6366F1]"
                          : "border-[#1E1E2E]/50 bg-[#6366F1]/5 hover:bg-[#6366F1]/10"
                      )}
                    >
                      <span className="block font-display font-bold text-lg mb-2 group-hover:text-[#6366F1] text-[#F8F8FF] transition-colors">{cat.title}</span>
                      <span className="text-xs text-[#94A3B8] font-body leading-relaxed block pr-6">{cat.description}</span>
                      <div className={cn(
                        "absolute top-4 right-4 w-6 h-6 rounded-full border flex items-center justify-center transition-all",
                        formData.serviceCategory === cat.slug ? "bg-[#6366F1] border-[#6366F1] text-white" : "border-[#1E1E2E]"
                      )}>
                        {formData.serviceCategory === cat.slug && <CheckCircle2 size={12} />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Sub-service */}
            {currentStep === 1 && (
              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-3xl font-display font-black tracking-tight text-[#F8F8FF]">Specific Solution</h3>
                  <p className="text-[#94A3B8] font-body font-medium">Refine your project scope within {activeCategory?.title}.</p>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {activeCategory?.subServices.map((sub) => (
                    <button
                      key={sub.slug}
                      onClick={() => {
                        updateForm("serviceInterest", sub.slug);
                        handleNext();
                      }}
                      className={cn(
                        "p-6 rounded-2xl border text-left transition-all flex items-center justify-between group",
                        formData.serviceInterest === sub.slug
                          ? "border-[#6366F1] bg-[#6366F1]/[0.03] ring-1 ring-[#6366F1]"
                          : "border-[#1E1E2E]/50 bg-[#6366F1]/5 hover:bg-[#6366F1]/10"
                      )}
                    >
                      <div>
                        <span className="block font-display font-bold text-[#F8F8FF] group-hover:text-[#6366F1] transition-colors">{sub.title}</span>
                        <span className="text-xs text-[#94A3B8] font-body">{sub.techStack.join(" • ")}</span>
                      </div>
                      <ChevronRight size={18} className={cn("transition-transform", formData.serviceInterest === sub.slug ? "text-[#6366F1]" : "text-[#94A3B8] group-hover:translate-x-1")} />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Project Type */}
            {currentStep === 2 && (
              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-3xl font-display font-black tracking-tight text-[#F8F8FF]">{dict.quote.wizard.questions.project}</h3>
                  <p className="text-[#94A3B8] font-body font-medium">Are we building from scratch or evolving an existing system?</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {["new build", "redesign", "improvement"].map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        updateForm("projectType", type);
                        handleNext();
                      }}
                      className={cn(
                        "p-8 rounded-2xl border text-center transition-all flex flex-col items-center gap-4",
                        formData.projectType === type
                          ? "border-[#6366F1] bg-[#6366F1]/[0.03] ring-1 ring-[#6366F1]"
                          : "border-[#1E1E2E]/50 bg-[#6366F1]/5 hover:bg-[#6366F1]/10"
                      )}
                    >
                      <div className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center transition-colors",
                        formData.projectType === type ? "bg-[#6366F1] text-white" : "bg-[#13131E]"
                      )}>
                        {type === "new build" && <Sparkles size={24} />}
                        {type === "redesign" && <ChevronRight size={24} className="rotate-90" />}
                        {type === "improvement" && <ChevronRight size={24} />}
                      </div>
                      <span className="font-display font-bold capitalize text-[#F8F8FF]">{type}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Details & Budget */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-3xl font-display font-black tracking-tight text-[#F8F8FF]">{dict.quote.wizard.questions.scope}</h3>
                  <p className="text-xs text-[#94A3B8] font-body font-medium uppercase tracking-widest">Provide investment and timeline specifications.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-[10px] font-black uppercase tracking-widest text-[#6366F1] flex items-center gap-2">
                      {dict.quote.wizard.fields.budget}
                      {!formData.budgetRange && <span className="w-1 h-1 rounded-full bg-red-500 animate-pulse" />}
                    </label>
                    <select
                      id="budget"
                      className={cn(
                        "w-full bg-[#13131E] border rounded-2xl p-4 font-body font-bold outline-none transition-all text-[#F8F8FF]",
                        !formData.budgetRange ? "border-red-500/30" : "border-[#1E1E2E] focus:ring-2 focus:ring-[#6366F1]"
                      )}
                      value={formData.budgetRange}
                      onChange={(e) => updateForm("budgetRange", e.target.value)}
                    >
                      <option value="">Select range</option>
                      <option value="<10k">$5k - $10k</option>
                      <option value="10k-25k">$10k - $25k</option>
                      <option value="25k-50k">$25k - $50k</option>
                      <option value="50k+">$50k+</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="timeline" className="text-[10px] font-black uppercase tracking-widest text-[#6366F1] flex items-center gap-2">
                      {dict.quote.wizard.fields.timeline}
                      {!formData.timeline && <span className="w-1 h-1 rounded-full bg-red-500 animate-pulse" />}
                    </label>
                    <select
                      id="timeline"
                      className={cn(
                        "w-full bg-[#13131E] border rounded-2xl p-4 font-body font-bold outline-none transition-all text-[#F8F8FF]",
                        !formData.timeline ? "border-red-500/30" : "border-[#1E1E2E] focus:ring-2 focus:ring-[#6366F1]"
                      )}
                      value={formData.timeline}
                      onChange={(e) => updateForm("timeline", e.target.value)}
                    >
                      <option value="">Timeline</option>
                      <option value="urgent">Urgent (&lt; 1 month)</option>
                      <option value="1-3-months">Standard (1-3 months)</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="brief" className="text-[10px] font-black uppercase tracking-widest text-[#6366F1] flex items-center gap-2">
                    {dict.quote.wizard.fields.brief}
                    {!formData.message && <span className="w-1 h-1 rounded-full bg-red-500 animate-pulse" />}
                  </label>
                  <textarea
                    id="brief"
                    className={cn(
                      "w-full bg-[#13131E] border rounded-2xl p-6 min-h-[120px] font-body font-medium outline-none transition-all resize-none text-[#F8F8FF]",
                      !formData.message ? "border-red-500/30" : "border-[#1E1E2E] focus:ring-2 focus:ring-[#6366F1]"
                    )}
                    placeholder={dict.quote.wizard.fields.briefPlaceholder}
                    value={formData.message}
                    onChange={(e) => updateForm("message", e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* Step 5: Contact */}
            {currentStep === 4 && (
              <div className="space-y-8">
                <h3 className="text-3xl font-display font-black tracking-tight text-[#F8F8FF]">{dict.quote.wizard.questions.connect}</h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-body font-black uppercase tracking-widest text-[#94A3B8]">{dict.quote.wizard.fields.name}</label>
                    <input
                      type="text"
                      className="w-full bg-[#13131E] border border-[#1E1E2E] rounded-2xl p-4 font-body font-bold focus:ring-2 focus:ring-[#6366F1] outline-none transition-all text-[#F8F8FF]"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => updateForm("fullName", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-body font-black uppercase tracking-widest text-[#94A3B8]">{dict.quote.wizard.fields.email}</label>
                    <input
                      type="email"
                      className="w-full bg-[#13131E] border border-[#1E1E2E] rounded-2xl p-4 font-body font-bold focus:ring-2 focus:ring-[#6366F1] outline-none transition-all text-[#F8F8FF]"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => updateForm("email", e.target.value)}
                    />
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-[#6366F1]/5 border border-[#6366F1]/10">
                  <p className="text-xs text-[#94A3B8] font-body leading-relaxed">
                    {dict.quote.wizard.fields.privacyNotice}
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Footer Actions */}
        <div className="mt-12 pt-8 border-t border-[#1E1E2E]/50 flex flex-col sm:flex-row justify-between gap-4">
          <button
            onClick={handleBack}
            className={cn(
              "flex items-center justify-center gap-2 h-14 px-8 text-[11px] font-display font-extrabold uppercase tracking-widest transition-all bg-[#13131E] border border-[#1E1E2E] rounded-xl hover:border-[#6366F1]/50 text-[#F8F8FF] shadow-sm",
              currentStep === 0 ? "opacity-0 pointer-events-none" : "opacity-100"
            )}
          >
            <ChevronLeft size={18} strokeWidth={2.5} className={isRtl ? "rotate-180" : ""} />
            {dict.quote.wizard.back}
          </button>

          {currentStep === steps.length - 1 ? (
            <button
              onClick={handleSubmit}
              disabled={isSubmitting || !formData.email || !formData.fullName || !formData.message}
              className="flex items-center justify-center gap-3 h-14 px-10 rounded-xl bg-[#6366F1] text-white font-display font-extrabold text-[11px] uppercase tracking-[0.2em] shadow-lg shadow-[#6366F1]/30 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 transition-all border border-[#6366F1]"
            >
              {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} strokeWidth={2.5} />}
              {isSubmitting ? dict.quote.wizard.submitting : dict.quote.wizard.submit}
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={
                (currentStep === 0 && !formData.serviceCategory) ||
                (currentStep === 1 && !formData.serviceInterest) ||
                (currentStep === 3 && (!formData.budgetRange || !formData.timeline || !formData.message))
              }
              className="flex items-center justify-center gap-2 h-14 px-10 rounded-xl bg-[#6366F1] text-white font-display font-extrabold text-[11px] uppercase tracking-[0.2em] shadow-lg shadow-[#6366F1]/30 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:hover:scale-100 transition-all border border-[#6366F1]"
            >
              <span>{dict.quote.wizard.next}</span>
              <ChevronRight size={18} strokeWidth={2.5} className={isRtl ? "rotate-180" : ""} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
