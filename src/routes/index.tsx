import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/atlas/Nav";
import { Hero } from "@/components/atlas/Hero";
import { Ticker } from "@/components/atlas/Ticker";
import { Vision } from "@/components/atlas/Vision";
import { Ecosystem } from "@/components/atlas/Ecosystem";
import { PerformanceLab } from "@/components/atlas/PerformanceLab";
import { Community } from "@/components/atlas/Community";
import { Philosophy } from "@/components/atlas/Philosophy";
import { Contributors } from "@/components/atlas/Contributors";
import { Media } from "@/components/atlas/Media";
import { FutureLabs } from "@/components/atlas/FutureLabs";
import { Cta } from "@/components/atlas/Cta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atlas Sanctum — Sports as a System. Built in Nairobi." },
      {
        name: "description",
        content:
          "Open-source sports, human-performance, civic-tech and innovation ecosystem from Nairobi. Built by students. Built in Africa. Built for humanity.",
      },
      { property: "og:title", content: "Atlas Sanctum" },
      { property: "og:description", content: "Sports as a system. Athletes as leaders. Communities as legacy." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Ticker />
      <Vision />
      <Ecosystem />
      <PerformanceLab />
      <Community />
      <Philosophy />
      <Contributors />
      <Media />
      <FutureLabs />
      <Cta />
    </main>
  );
}
