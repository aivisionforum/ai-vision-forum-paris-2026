"use client";

import { Info, Users, Lock, Calendar, Handshake, Lightbulb, Target } from "lucide-react";
import { EVENT_CONFIG, WHY_NOW, VALUE_PROPOSITION } from "@/lib/constants";

/**
 * About section with mission and Chatham House Rule
 */
export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
            <span className="text-gradient-primary">About AI Vision Forum</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
            A gathering of visionaries shaping the future of agentic AI, education, governance, and open-source collaboration
          </p>
        </div>

        {/* Guiding Question */}
        <div className="mb-12 rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 to-transparent p-8 md:p-12">
          <div className="mb-6 flex items-center gap-3">
            <Target className="h-7 w-7 text-accent" />
            <h3 className="text-2xl font-bold">Guiding Question</h3>
          </div>
          <p className="text-xl font-medium text-foreground md:text-2xl">
            "{EVENT_CONFIG.guidingQuestion}"
          </p>
          <p className="mt-4 text-muted-foreground">
            For Paris, sharpened by the reality that AI coding agents are now reshaping software development, open-source governance, and the $3T SaaS industry itself.
          </p>
        </div>

        {/* Why Now */}
        <div className="mb-16 rounded-2xl border border-border bg-card p-8 md:p-12">
          <div className="mb-6 flex items-center gap-3">
            <Lightbulb className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold">{WHY_NOW.title}</h3>
          </div>
          <p className="mb-8 text-muted-foreground">{WHY_NOW.intro}</p>
          <div className="space-y-6">
            {WHY_NOW.shifts.map((shift) => (
              <div key={shift.id} className="border-l-4 border-primary pl-6">
                <h4 className="mb-2 text-lg font-semibold">{shift.title}</h4>
                <p className="text-muted-foreground">{shift.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Value Proposition */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-3xl font-bold">Our Unique Value Proposition</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {VALUE_PROPOSITION.map((item) => (
              <div key={item.id} className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg">
                <h4 className="mb-3 text-xl font-semibold text-primary">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mb-16 grid gap-6 md:grid-cols-4">
          <StatCard
            icon={<Users className="h-8 w-8" />}
            value="100–150"
            label="Invited Participants"
          />
          <StatCard
            icon={<Lock className="h-8 w-8" />}
            value="Invite-Only"
            label="Exclusive Access"
          />
          <StatCard
            icon={<Calendar className="h-8 w-8" />}
            value={EVENT_CONFIG.dateDisplay}
            label="Paris, France"
          />
          <StatCard
            icon={<Handshake className="h-8 w-8" />}
            value="GOSIM 2026"
            label="Co-located"
          />
        </div>

        {/* Chatham House Rule */}
        <div className="rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/5 to-transparent p-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 rounded-full bg-accent/10 p-3">
              <Lock className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold">Chatham House Rule</h3>
              <p className="text-muted-foreground">
                Participants are free to use the information received, but neither the identity nor the affiliation of the speaker(s), nor that of any other participant, may be revealed. This rule encourages open dialogue and candid discussion on sensitive topics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary hover:shadow-lg">
      <div className="mb-3 text-primary">{icon}</div>
      <div className="mb-1 text-2xl font-bold text-gradient-primary">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}
