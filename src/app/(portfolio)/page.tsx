import { type NavItem } from "@/components/navigation-bar";
import { HydrateClient } from "@/trpc/server";
import {
  Briefcase,
  Home,
  Mail,
  MessageSquareText,
  User
} from "lucide-react";

import ContentSection from '@/components/content-1';
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import { NavigationBar } from "@/components/navigation-bar";
import { ProjectsSection } from '@/components/project-section';
import WallOfLoveSection from '@/components/testimonials';
import { ContactSection } from '@/components/contact-section';

export default async function HomePage() {
  // const hello = await api.post.hello({ text: "from tRPC Test" });

  // await api.ai.test({text: "What is the meaning of life?"});

  // void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <div className="relative">
        <NavigationBar navItems={getNavItems()} enableBlock={false} title="Jasmyre" />
        <main className="min-h-[100vh] w-full" id="home">
          <HeroSection />
          <ContentSection />
          {/* <SkillsSection /> */}
          <ProjectsSection />
          <WallOfLoveSection />
          <ContactSection />
        </main>
        <FooterSection />
      </div>
    </HydrateClient>
  );
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
      href: "#portfolio",
      name: "Portfolio",
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
