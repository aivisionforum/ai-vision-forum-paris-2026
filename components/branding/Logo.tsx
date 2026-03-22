"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/i18n";

interface LogoProps {
  variant?: "full" | "compact";
  className?: string;
}

/**
 * Text-based logo for AI Vision Forum Paris 2026
 * Features modern typography with gradient effects
 */
export function Logo({ variant = "full", className = "" }: LogoProps) {
  const { t } = useTranslation();

  if (variant === "compact") {
    return (
      <Link
        href="/"
        className={`group flex items-center gap-2 transition-opacity hover:opacity-80 ${className}`}
      >
        <div className="relative">
          <span className="text-2xl font-bold tracking-tighter">
            <span className="text-gradient-primary">AIVF</span>
          </span>
          <span className="ml-1 text-lg font-medium text-secondary">26</span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`group flex flex-col transition-opacity hover:opacity-80 ${className}`}
    >
      <div className="flex items-baseline gap-2">
        <span className="text-xl font-bold tracking-tight text-gradient-primary md:text-2xl">
          AI VISION FORUM
        </span>
        <span className="text-sm font-semibold text-accent md:text-base">
          PARIS 2026
        </span>
      </div>
      <div className="mt-0.5 text-[0.6rem] font-medium tracking-widest text-muted-foreground md:text-xs">
        {t.logo.tagline}
      </div>
    </Link>
  );
}
