import { NavigationBar, type NavItem } from "@/components/navigation-bar";
import { ContactSection } from "@/components/pages/portfolio/contact-section";
import { CTASection } from "@/components/pages/portfolio/cta";
import { ProjectsSection } from "@/components/pages/portfolio/project-section";
import { ServicesSection } from "@/components/pages/portfolio/service-section";
import { HydrateClient } from "@/trpc/server";
import { Briefcase, Home, Mail, Pickaxe, User } from "lucide-react";

import ContentSection from "@/components/pages/portfolio/content-1";
import FooterSection from "@/components/pages/portfolio/footer";
import HeroSection from "@/components/pages/portfolio/hero-section";

export default async function HomePage() {
  // const hello = await api.post.hello({ text: "from tRPC Test" });

  // await api.ai.test({text: "What is the meaning of life?"});

  // void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <div className="relative">
        <main className="min-h-[100vh] w-full" id="home">
          <HeroSection />
          <ContentSection />
          <ServicesSection />
          <ProjectsSection limit={3} label={"Highlights"} />
          {/* <WallOfLoveSection /> */}
          <CTASection />
          <ContactSection />
        </main>
        <FooterSection />
      </div>
    </HydrateClient>
  );
}
