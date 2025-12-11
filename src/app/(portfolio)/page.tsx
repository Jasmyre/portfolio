import { ContactSection } from "@/components/pages/portfolio/contact-section";
import ContentSection from "@/components/pages/portfolio/content-1";
import { CTASection } from "@/components/pages/portfolio/cta";
import FooterSection from "@/components/pages/portfolio/footer";
import HeroSection from "@/components/pages/portfolio/hero-section";
import { ProjectsSection } from "@/components/pages/portfolio/project-section";
import { ServicesSection } from "@/components/pages/portfolio/service-section";
import { HydrateClient } from "@/trpc/server";

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
          <ProjectsSection label={"Highlights"} limit={3} />
          {/* <WallOfLoveSection /> */}
          <CTASection />
          <ContactSection />
        </main>
        <FooterSection />
      </div>
    </HydrateClient>
  );
}
