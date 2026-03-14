import { Laptop } from "lucide-react";
import { TrackLayout } from "@/components/tracks/TrackLayout";

export default function AgenticSystemsTrack() {
  return (
    <TrackLayout
      title="Agentic AI Systems — Human–AI Symbiosis"
      icon={<Laptop className="h-14 w-14 text-primary" />}
      gradient="bg-gradient-to-br from-secondary/20 via-background to-accent/10"
      overview="A 360° exploration of building agentic systems ecosystems — from use cases and business value to architectures and collaborative development. Topics include Agentic Software Engineering (ASE), autonomous workflows, enterprise deployments, open-source coordination, standards, and emerging industry leaders shaping the human–AI partnership model."
      keyTopics={[
        "Key aspects of agentic systems ecosystem: use cases, business values, architecture, collaboration",
        "State of the art: Agentic Software Engineering and business solutions",
        "Agentic innovation for industry, consumer, and public sectors",
        "Autonomous workflows and enterprise deployments",
        "Open-source coordination and standards",
        "Human–AI partnership models and collaboration patterns",
      ]}
      resources={[
        {
          title: "The State of Agentic Development (Report)",
          url: "https://github.com/aosf-org/aosf/blob/main/research/presentations/agentic-landscape-executive.pdf",
        },
      ]}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">Building the Agentic Ecosystem</h2>
        <p className="text-muted-foreground">
          This panel brings together enterprise architects, agentic system builders, standards experts, and developers to explore the full spectrum of building agentic systems — from defining use cases and demonstrating business value, to designing architectures and fostering collaborative development across open-source communities.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4">What You'll Explore</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li>How agentic software engineering is transforming development workflows</li>
          <li>Architecture patterns for autonomous and semi-autonomous systems</li>
          <li>Enterprise deployment strategies and lessons learned</li>
          <li>Standards and security frameworks for agentic ecosystems</li>
        </ul>
      </div>
    </TrackLayout>
  );
}
