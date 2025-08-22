import { NavigationBar, type NavItem } from "@/components/navigation-bar";
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
        <main className="min-h-[100vh] w-full" id="home">
          <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden lg:min-h-screen">
            Welcome to AniXplorer -- coming soon
          </section>
        </main>
      </div>
      );
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
