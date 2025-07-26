import { HydrateClient } from "@/trpc/server";
import { ModeToggle } from "../components/mode-toggle";
import { NavigationBar, type NavItem } from "@/components/navigation-bar";
import { BarChart3, FileText, Home, Package, Settings, ShoppingCart, User, Users } from "lucide-react";

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

export default async function HomePage() {
  // const hello = await api.post.hello({ text: "from tRPC Test" });

  // await api.ai.test({text: "What is the meaning of life?"});

  // void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <div className="relative">
        <NavigationBar navItems={navItems} />
        <main className="flex min-h-[100vh] flex-col items-center justify-center">
          <ModeToggle />
          {/* {JSON.stringify((await api.ai.test({text: "Tell me a joke."})).choices[0]?.message, null, 2)} */}
          Hello world!
        </main>
      </div>
    </HydrateClient>
  );
}
