import "@/styles/anixplorer/index.css";

import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { env } from "@/env";
import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
  title: "Muhehehehe",
  description: "Muhehehehe",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  category: "Interactive Story",
  creator: "Jasmyre Andrei Lanuza",
  generator: "Next.js",
  keywords: [
    "muhehehehe",
    "interactive page",
    "choice based story",
    "valentine page",
    "love letter app",
    "nextjs interactive app",
    "tailwind css page",
    "romantic web app",
    "jasmyre",
    "jasmyre andrei lanuza",
    "andrei lanuza",
    "portfolio project",
    "cs student portfolio",
    "nextjs project",
  ],
  openGraph: {
    type: "website",
    url: "https://jasmyre.vercel.app/muhehehehe",
    description: "Muhehehehe",
    siteName: "Muhehehehe",
    images: ["/og-image.png"],
    title: "Muhehehehe",
    countryName: "Philippines",
  },
  robots: {
    index: false,
    follow: false,
  },
  other: {
    "google-site-verification": env.GOOGLE_SITE_VERIFICATION,
  },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function MuheheheheLayout({
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
            {children}
          </ThemeProvider>
        </TRPCReactProvider>
        <Analytics />
      </body>
    </html>
  );
}
