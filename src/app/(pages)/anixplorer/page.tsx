import { NavigationBar, type NavItem } from "@/components/navigation-bar";
import { FeatureSection } from "@/components/pages/anixplorer/feature-section";
import { HydrateClient } from "@/trpc/server";
import { HeroSection } from "@/components/pages/anixplorer/hero-section";
import { Home } from "lucide-react";

export default async function AniXplorerPage() {
  return (
    <HydrateClient>
      <div className="relative">
        <NavigationBar
          navItems={getNavItems()}
          pageItems={getPageItems()}
          enableBlock={true}
          title="AniXplorer"
        />
        <HeroSection />
        <FeatureSection />
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
  ];

  return navItems;
}
