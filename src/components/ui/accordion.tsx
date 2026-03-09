"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  value: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  type?: "single" | "multiple";
}

export function Accordion({ items, type = "single" }: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (value: string) => {
    if (type === "single") {
      setOpenItems(openItems[0] === value ? [] : [value]);
    } else {
      setOpenItems(openItems.includes(value) ? openItems.filter(v => v !== value) : [...openItems, value]);
    }
  };

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.value}
          className="border border-[#1E1E2E] rounded-lg overflow-hidden bg-[#13131E]"
        >
          <button
            onClick={() => toggleItem(item.value)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#1E1E2E] transition-colors text-left"
          >
            <h3 className="font-display font-semibold text-[#F8F8FF]">{item.title}</h3>
            <motion.div
              animate={{ rotate: openItems.includes(item.value) ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={20} className="text-[#6366F1]" />
            </motion.div>
          </button>

          <AnimatePresence>
            {openItems.includes(item.value) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t border-[#1E1E2E] px-6 py-4"
              >
                <p className="text-[#94A3B8] font-body leading-relaxed">{item.content}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export const AccordionItem = ({ value, children }: { value: string; children: React.ReactNode }) => {
  return null; // This component is not used with the Accordion above, just for type compatibility
};
