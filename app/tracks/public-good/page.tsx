import { Globe } from "lucide-react";
import { TrackLayout } from "@/components/tracks/TrackLayout";

export default function PublicGoodTrack() {
  return (
    <TrackLayout
      title="Open Token & Digital Public Goods"
      icon={<Globe className="h-14 w-14 text-primary" />}
      gradient="bg-gradient-to-br from-primary/20 via-background to-accent/10"
      overview="Examining how agentic open-source foundations can function as global public infrastructure. Discussions cover value-driven projects, sustainable funding models, public AI tokens for global collaboration, and new paradigms for governing and scaling open ecosystems that benefit humanity at large."
      keyTopics={[
        "Agentic approach for Agentic Open Source Foundations (AOSF)",
        "Value-driven projects and sustainable models",
        "Public AI tokens for global open-source projects and research",
        "Agentic open-source paradigm and governance",
      ]}
      resources={[
        {
          title: "Digital Public Goods Alliance",
          url: "https://digitalpublicgoods.net/",
        },
        {
          title: "Linux Foundation AI & Data",
          url: "https://lfaidata.foundation/",
        },
      ]}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">Foundations for an Agentic Commons</h2>
        <p className="text-muted-foreground">
          Open-source AI, governed as a digital public good, democratizes access and ensures diverse voices shape its development. This panel explores how foundations, governments, and communities can collaborate to build AI infrastructure that serves everyone — through sustainable funding, public AI tokens, and new governance paradigms.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4">What You'll Explore</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li>How agentic open-source foundations can scale as global public infrastructure</li>
          <li>Sustainable funding models for open-source AI projects</li>
          <li>Public AI tokens as a mechanism for global collaboration</li>
          <li>New paradigms for governing open ecosystems at scale</li>
        </ul>
      </div>
    </TrackLayout>
  );
}
