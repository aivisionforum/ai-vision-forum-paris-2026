"use client";

import { ChevronDown, MapPin, Handshake, Target, Users, Lock } from "lucide-react";
import { CountdownTimer } from "./CountdownTimer";
import { TypewriterText } from "./TypewriterText";
import { EVENT_CONFIG } from "@/lib/constants";

/**
 * Enhanced hero section with Three.js particles, countdown, and typewriter effect
 */
export function HeroSection() {
  const handleScrollDown = () => {
    const tracksSection = document.querySelector("#tracks");
    if (tracksSection) {
      tracksSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24">
      {/* Monet Nymphéas full cover background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/ai-vision-forum-paris-2026/images/monet-nympheas-bg.jpg')`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 z-[1]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl text-center drop-shadow-lg">
        {/* Main heading */}
        <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
          <span className="text-gradient-primary drop-shadow-md">
            AI Vision Forum
          </span>
          <br />
          <span className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white/90">
            Paris 2026
          </span>
        </h1>

        {/* Animated tagline */}
        <p className="mb-8 text-xl font-medium text-white/80 md:text-2xl lg:text-3xl">
          <TypewriterText text={EVENT_CONFIG.tagline} delay={80} />
        </p>

        {/* Event Date - Prominent Display */}
        <div className="mb-6">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient-primary drop-shadow-lg">
            {EVENT_CONFIG.dateDisplay}
          </p>
        </div>

        {/* Event details */}
        <div className="mb-12 flex flex-col items-center gap-2 text-base text-white/70 md:text-lg">
          <p className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-accent" />
            <span>
              {EVENT_CONFIG.location.venue}, {EVENT_CONFIG.location.city}
            </span>
          </p>
          <p className="flex items-center gap-2">
            <Handshake className="h-5 w-5 text-accent" />
            <span>Co-located with {EVENT_CONFIG.location.colocated}</span>
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="mb-12">
          <CountdownTimer />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="/register"
            className="group relative overflow-hidden rounded-full bg-accent px-8 py-4 text-lg font-semibold text-accent-foreground transition-all hover:scale-105 hover:shadow-xl hover:shadow-accent/30"
          >
            <span className="relative z-10">Request Invitation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-accent opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              const aboutSection = document.querySelector("#about");
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="rounded-full border-2 border-white/30 bg-white/10 backdrop-blur px-8 py-4 text-lg font-semibold text-white transition-all hover:border-white/50 hover:bg-white/20 hover:shadow-lg"
          >
            Learn More
          </a>
        </div>

        {/* Event badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-white/60 md:text-sm">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/20 backdrop-blur px-4 py-2">
            <Target className="h-3.5 w-3.5" /> {EVENT_CONFIG.format}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/20 backdrop-blur px-4 py-2">
            <Users className="h-3.5 w-3.5" /> {EVENT_CONFIG.scale}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/20 backdrop-blur px-4 py-2">
            <Lock className="h-3.5 w-3.5" /> {EVENT_CONFIG.rule}
          </span>
        </div>
      </div>

      {/* Scroll down indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/60 transition-colors hover:text-white"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
