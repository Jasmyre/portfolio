import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
  title: "Jasmyre Portfolio",
  description:
    "Full-Stack Web Developer | Jasmyre Andrei lanuza personal portfolio.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  category: "Portfolio",
  creator: "Jasmyre Andrei Lanuza",
  generator: "Next.js",
  keywords: [
    "jasmyre",
    "andrei",
    "lanuza",
    "jasmyre andrei lanuza",
    "jasmyre andrei",
    "jasmyre lanuza",
    "andrei lanuza",
    "developer",
    "portfolio",
  ],
  openGraph: {
    type: "profile",
    url: "https://jazmyre.vercel.app",
    description:
      "Full-Stack Web Developer | Jasmyre Andrei lanuza personal portfolio.",
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
  }
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
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
