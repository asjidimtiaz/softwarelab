"use client";

import Link from "next/link";

type ProcessStep = {
  title: string;
  description: string;
};

interface ServiceProcessStepsProps {
  title: string;
  steps: ProcessStep[];
  ctaHref: string;
  ctaLabel: string;
}

export function ServiceProcessSteps({ title, steps, ctaHref, ctaLabel }: ServiceProcessStepsProps) {
  return (
    <div className="bg-[#13131E] border border-[#1E1E2E] rounded-xl p-8">
      <h2 className="text-2xl font-bold text-[#F8F8FF] mb-4">{title}</h2>
      <div className="space-y-3 text-[#94A3B8] mb-5">
        {steps.map((step, idx) => (
          <p key={step.title}>
            <strong className="text-[#F8F8FF]">Step {idx + 1} {step.title}:</strong> {step.description}
          </p>
        ))}
      </div>
      <Link href={ctaHref} className="inline-flex items-center justify-center px-6 py-3 bg-[#6366F1] text-white font-bold rounded-lg hover:bg-[#6366F1]/90 transition-colors">
        {ctaLabel}
      </Link>
    </div>
  );
}
