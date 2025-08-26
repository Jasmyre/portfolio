import "@/styles/anixplorer/index.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { TRPCReactProvider } from "@/trpc/react";
import { env } from "@/env";

export const metadata: Metadata = {
  title: "AniXplorer | Jasmyre Andrei Lanuza",
  description:
    "AniXplorer is an anime discovery website built with Next.js, powered by the Jikan API. Created by Full-Stack Web Developer Jasmyre Andrei Lanuza.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  category: "Anime Website",
  creator: "Jasmyre Andrei Lanuza",
  generator: "Next.js",
  keywords: [
    "anixplorer",
    "anime explorer",
    "anime website",
    "anime discovery",
    "anime database",
    "jikan api",
    "myanimelist api",
    "jasmyre",
    "jasmyre andrei lanuza",
    "andrei lanuza",
    "anime portfolio project",
    "cs student portfolio",
    "nextjs anime website",
    "anime search app",
    "anime catalog website",
  ],
  openGraph: {
    type: "website",
    url: "https://jasmyre.vercel.app/anixplorer",
    description:
      "Explore anime with AniXplorer — an anime discovery platform powered by the Jikan API. Built by Full-Stack Web Developer Jasmyre Andrei Lanuza.",
    siteName: "AniXplorer",
    images: ["/og-image.png"],
    title: "AniXplorer | Anime Discovery Website",
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
    <html lang="en" className={`${geist.variable}`} suppressHydrationWarning>
      <body>
        <TRPCReactProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
