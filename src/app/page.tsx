import { type NavItem } from "@/components/navigation-bar";
import { HydrateClient } from "@/trpc/server";
import {
  BarChart3,
  FileText,
  Home,
  Package,
  Settings,
  ShoppingCart,
  User,
  Users,
} from "lucide-react";

import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import { NavigationBar } from "@/components/navigation-bar";
import ContentSection from '@/components/content-1';
import SkillsSection from '@/components/pages/portfolio/skills';
import { ProjectsSection } from '../components/project-section';

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
      icon: <Package className="h-4 w-4" />,
      href: "#about"
    },
    {
      name: "Technologies",
      icon: <Users className="h-4 w-4" />,
      href: "#technologies"
    },
    {
      href: "#portfolio",
      name: "Portfolio",
      icon: <Settings className="h-4 w-4" />,
    },
  ];

  return navItems;
}
