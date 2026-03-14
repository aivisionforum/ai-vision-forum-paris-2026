import { GraduationCap } from "lucide-react";
import { TrackLayout } from "@/components/tracks/TrackLayout";

export default function EducationTrack() {
  return (
    <TrackLayout
      title="Agentic AI in Applications"
      icon={<GraduationCap className="h-14 w-14 text-primary" />}
      gradient="bg-gradient-to-br from-primary/20 via-background to-secondary/10"
      overview="Showcasing real-world deployments across education, creativity, and knowledge work. Focus areas include AI-native learning environments, embodied AI, multimodal knowledge systems, personalized instruction, and tools that amplify human capability across consumer, enterprise, and public sectors."
      keyTopics={[
        "AI for Next-Gen Learning & Creative Pedagogy",
        "AI4Education initiatives and outcomes",
        "Embodied AI applications",
        "Multi-modality knowledge presentations",
        "Personalized education and adaptive systems",
      ]}
      resources={[
        {
          title: "UNESCO's AI in Education Framework",
          url: "https://www.unesco.org/en/digital-education/artificial-intelligence",
        },
      ]}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">Why This Matters</h2>
        <p className="text-muted-foreground">
          As AI transforms every sector, education must evolve to prepare learners not just to use AI, but to think critically about it, create with it, and shape its future. This panel explores how agentic AI can enhance creativity, personalization, and accessibility in learning environments — from classrooms to enterprise training.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4">Focus Areas</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li>AI-native learning environments and creative pedagogy</li>
          <li>Embodied AI and multimodal knowledge systems</li>
          <li>Personalized instruction powered by adaptive AI</li>
          <li>Tools that amplify human capability across sectors</li>
        </ul>
      </div>
    </TrackLayout>
  );
}
