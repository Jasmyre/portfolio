import { NavigationBar, type NavItem } from "@/components/navigation-bar";
import { HeroSection } from "@/components/pages/anixplorer/hero-section";
import { HydrateClient } from "@/trpc/server";
import { Home } from "lucide-react";

export default async function AniXplorerPage() {
  return (
    <HydrateClient>
      <div className="relative">
        <NavigationBar
          navItems={getNavItems()}
          enableBlock={false}
          title="AniXplorer"
        />
        <HeroSection />
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
  ];

  return navItems;
}
