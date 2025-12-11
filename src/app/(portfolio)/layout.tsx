import "@/styles/globals.css";

import { Analytics } from "@vercel/analytics/next";
import { Briefcase, Home, Mail, Pickaxe, User } from "lucide-react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { type NavItem, NavigationBar } from "@/components/navigation-bar";
import { ThemeProvider } from "@/components/theme-provider";
import { env } from "@/env";
import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
  title: "Jasmyre Portfolio",
  description:
    "Full-Stack Web Developer | Jasmyre Andrei Lanuza personal portfolio.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  category: "Portfolio",
  creator: "Jasmyre Andrei Lanuza",
  generator: "Next.js",
  keywords: [
    "jasmyre",
    "jazmyre",
    "andrei",
    "lanuza",
    "jazmyre andrei lanuza",
    "jasmyre andrei lanuza",
    "jazmyre andrei",
    "jasmyre andrei",
    "jasmyre lanuza",
    "jazmyre lanuza",
    "andrei lanuza",
    "developer",
    "portfolio",
    "portfolio design",
    "design for portfolio",
    "portfolio folder",
    "work immersion portfolio",
    "portfolio website",
    "web developer portfolio",
    "web developer portfolio examples",
    "front end developer portfolio",
    "sample web developer portfolio",
  ],
  openGraph: {
    type: "profile",
    url: "https://jazmyre.vercel.app",
    description:
      "Full-Stack Web Developer | Jasmyre Andrei Lanuza personal portfolio.",
    siteName: "Jasmyre Portfolio",
    images: [""],
    title: "Jasmyre Portfolio",
    firstName: "Jasmyre Andrei",
    lastName: "Lanuza",
    countryName: "Philippines",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "google-site-verification": env.GOOGLE_SITE_VERIFICATION,
  },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function PortfolioLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={`${geist.variable}`} lang="en" suppressHydrationWarning>
      <body>
        <TRPCReactProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
            enableSystem
          >
            <NavigationBar
              enableBlock={true}
              navItems={getNavItems()}
              pageItems={getPageItems()}
              title="Jasmyre"
            />
            {children}
          </ThemeProvider>
        </TRPCReactProvider>
        <Analytics />
      </body>
    </html>
  );
}

function getPageItems() {
  const pageItems: NavItem[] = [
    {
      href: "/",
      name: "Portfolio",
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
    // {
    //   name: "Testimonial",
    //   icon: <MessageSquareText className="h-4 w-4" />,
    //   href: "#testimonial",
    // },
    {
      name: "Contact",
      icon: <Mail className="h-4 w-4" />,
      href: "#contact",
    },
  ];

  return navItems;
}
