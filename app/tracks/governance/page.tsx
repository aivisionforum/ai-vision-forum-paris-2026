import { Scale } from "lucide-react";
import { TrackLayout } from "@/components/tracks/TrackLayout";

export default function GovernanceTrack() {
  return (
    <TrackLayout
      title="Trusted Agentic AI"
      icon={<Scale className="h-14 w-14 text-primary" />}
      gradient="bg-gradient-to-br from-accent/20 via-background to-primary/10"
      overview="Addressing the governance, safety, and sovereignty challenges of increasingly autonomous systems. Topics include evaluation frameworks, responsible deployment of coding agents, regulatory trends (e.g., AI Acts), sovereign AI models, and anticipatory governance approaches for maintaining trust at scale."
      keyTopics={[
        "Anticipatory Governance for Agentic AI",
        "Autonomous coding agents and responsible deployment",
        "AI Act compliance and regulatory landscape",
        "Sovereign AI models and national considerations",
        "Evaluation frameworks and trust metrics",
      ]}
      resources={[
        {
          title: "EU AI Act Official Text",
          url: "https://artificialintelligenceact.eu/",
        },
        {
          title: "OECD AI Principles",
          url: "https://www.oecd.org/digital/artificial-intelligence/",
        },
      ]}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">Governance, Safety, and Sovereignty</h2>
        <p className="text-muted-foreground">
          As AI systems become increasingly autonomous, maintaining trust requires proactive governance frameworks. This panel brings together trust and safety experts alongside social and economic impact researchers to address the challenges of governing agentic AI at scale — from regulatory compliance to sovereign AI considerations.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4">Key Discussions</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li>Anticipatory governance approaches for agentic AI systems</li>
          <li>Responsible deployment frameworks for autonomous coding agents</li>
          <li>Navigating the AI Act and evolving regulatory landscape</li>
          <li>Building evaluation frameworks and trust metrics at scale</li>
        </ul>
      </div>
    </TrackLayout>
  );
}
