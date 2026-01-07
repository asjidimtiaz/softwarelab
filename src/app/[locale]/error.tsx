"use client";

import { useEffect } from "react";
import { Container } from "@/components/layout/layout-primitives";
import { motion } from "framer-motion";
import { RefreshCcw, AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an analytics service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.05),transparent_50%)]" />

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto"
        >
          <div className="w-20 h-20 bg-destructive/10 text-destructive rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-destructive/10">
            <AlertTriangle size={40} />
          </div>

          <h2 className="text-3xl font-bold mb-4 tracking-tight">Critical System Fault</h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            An unexpected error occurred during processing. The development team has been notified.
          </p>

          <div className="space-y-4">
            <button
              onClick={() => reset()}
              className="w-full flex items-center justify-center gap-3 h-14 rounded-2xl bg-primary text-primary-foreground font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20"
            >
              <RefreshCcw size={18} />
              Initialize Reset Sequence
            </button>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/50">
                Error ID: {error.digest || 'SWL-CRIT-999'}
            </p>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
