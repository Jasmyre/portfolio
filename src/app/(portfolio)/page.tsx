import { ContactSection } from "@/components/pages/portfolio/contact-section";
import ContentSection from "@/components/pages/portfolio/content-1";
import { CTASection } from "@/components/pages/portfolio/cta";
import FooterSection from "@/components/pages/portfolio/footer";
import HeroSection from "@/components/pages/portfolio/hero-section";
import { ProjectsSection } from "@/components/pages/portfolio/project-section";
import { ServicesSection } from "@/components/pages/portfolio/service-section";
import { HydrateClient } from "@/trpc/server";

export default async function HomePage() {
  return (
    <HydrateClient>
      <div className="relative">
        <main className="min-h-screen w-full" id="home">
          <HeroSection />
          <ContentSection />
          <ServicesSection />
          <ProjectsSection label={"Highlights"} limit={3} />
          <CTASection />
          <ContactSection />
        </main>
        <FooterSection />
      </div>
    </HydrateClient>
  );
}
