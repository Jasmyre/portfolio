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

export default async function HomePage() {
  // const hello = await api.post.hello({ text: "from tRPC Test" });

  // await api.ai.test({text: "What is the meaning of life?"});

  // void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <div className="relative">
        <NavigationBar navItems={getNavItems()} enableBlock={false} title="Jasmyre" />
        {/* <HeroHeader /> */}
        <main className="min-h-[100vh] w-full">
          <HeroSection />
          <ContentSection />
          <SkillsSection />
        </main>
        <FooterSection />
      </div>
    </HydrateClient>
  );
}

function getNavItems() {
  const navItems: NavItem[] = [
    {
      href: "/",
      name: "Home",
      icon: <Home className="h-4 w-4" />,
    },
    {
      name: "Products",
      icon: <Package className="h-4 w-4" />,
      children: [
        {
          href: "/products/electronics",
          name: "Electronics",
          icon: <Package className="h-4 w-4" />,
        },
        {
          href: "/products/clothing",
          name: "Clothing",
          icon: <ShoppingCart className="h-4 w-4" />,
        },
        {
          href: "/products/books",
          name: "Books",
          icon: <FileText className="h-4 w-4" />,
        },
      ],
    },
    {
      name: "Company",
      icon: <Users className="h-4 w-4" />,
      children: [
        {
          href: "/about",
          name: "About Us",
          icon: <User className="h-4 w-4" />,
        },
        {
          href: "/team",
          name: "Our Team",
          icon: <Users className="h-4 w-4" />,
        },
        {
          href: "/careers",
          name: "Careers",
          icon: <BarChart3 className="h-4 w-4" />,
        },
      ],
    },
    {
      href: "/contact",
      name: "Contact",
      icon: <Settings className="h-4 w-4" />,
    },
  ];

  return navItems;
}
