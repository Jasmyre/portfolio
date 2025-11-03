import { type NavItem } from "@/components/navigation-bar";
import { HydrateClient } from "@/trpc/server";
import {
  Briefcase,
  Home,
  Mail,
  MessageSquareText,
  Pickaxe,
  User,
} from "lucide-react";

import ContentSection from "@/components/pages/portfolio/content-1";
import FooterSection from "@/components/pages/portfolio/footer";
import HeroSection from "@/components/pages/portfolio/hero-section";
import { NavigationBar } from "@/components/navigation-bar";
import { ProjectsSection } from "@/components/pages/portfolio/project-section";
import WallOfLoveSection from "@/components/pages/portfolio/testimonials";
import { ContactSection } from "@/components/pages/portfolio/contact-section";
import { ServicesSection } from "../../components/pages/portfolio/service-section";
import { CTASection } from "@/components/pages/portfolio/cta";

export default async function HomePage() {
  // const hello = await api.post.hello({ text: "from tRPC Test" });

  // await api.ai.test({text: "What is the meaning of life?"});

  // void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <div className="relative">
        <NavigationBar
          navItems={getNavItems()}
          pageItems={getPageItems()}
          enableBlock={false}
          title="Jasmyre"
        />
        <main className="min-h-[100vh] w-full" id="home">
          <HeroSection />
          <ContentSection />
          <ServicesSection />
          <ProjectsSection />
          <WallOfLoveSection />
          <CTASection />
          <ContactSection />
        </main>
        <FooterSection />
      </div>
    </HydrateClient>
  );
}

function getPageItems() {
  const pageItems: NavItem[] = [
    {
      href: "/",
      name: "Portfolio",
      icon: <Home className="h-4 w-4" />,
    },
    {
      href: "/anixplorer",
      name: "Anixplorer",
      icon: <Home className="h-4 w-4" />,
    },
  ];

  return pageItems;
}

function getNavItems() {
  const navItems: NavItem[] = [
    {
      href: "#home",
      name: "Home",
      icon: <Home className="h-4 w-4" />,
    },
    {
      name: "About",
      icon: <User className="h-4 w-4" />,
      href: "#about",
    },
    {
      name: "Services",
      icon: <Pickaxe className="h-4 w-4" />,
      href: "#services",
    },
    {
      href: "#portfolio",
      name: "Projects",
      icon: <Briefcase className="h-4 w-4" />,
    },
    {
      name: "Testimonial",
      icon: <MessageSquareText className="h-4 w-4" />,
      href: "#testimonial",
    },
    {
      name: "Contact",
      icon: <Mail className="h-4 w-4" />,
      href: "#contact",
    },
  ];

  return navItems;
}
