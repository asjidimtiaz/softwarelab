"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass";
  size?: "sm" | "md" | "lg" | "xl";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variantStyles = {
      primary: "bg-[#6366F1] text-white shadow-md shadow-[#6366F1]/30 hover:bg-[#6366F1]/95",
      secondary: "bg-[#8B5CF6] text-white shadow-md shadow-[#8B5CF6]/25 hover:bg-[#8B5CF6]/95",
      outline: "border border-white/10 bg-transparent hover:bg-white/5",
      ghost: "bg-transparent hover:bg-white/5",
      glass: "glass border-white/5 hover:bg-white/10 text-[#F8F8FF]",
    };

    const sizeStyles = {
      sm: "h-10 px-4 text-xs",
      md: "h-12 px-6 text-sm",
      lg: "h-14 px-8 text-base",
      xl: "h-16 px-10 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center rounded-xl font-display font-extrabold uppercase tracking-widest transition-all disabled:opacity-50 disabled:pointer-events-none outline-none focus:ring-2 focus:ring-[#6366F1]/20",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
