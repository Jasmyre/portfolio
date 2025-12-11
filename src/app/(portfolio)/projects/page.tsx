import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { ProjectsSection } from "@/components/pages/projects/projects-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Projects - Developer Portfolio",
  description:
    "Explore my portfolio of web development projects, showcasing expertise in React, Next.js, and full-stack development.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Projects Grid */}
      <ProjectsSection />

      {/* CTA Section */}
      <section className="py-16 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Card className="border-primary/20 bg-linear-to-br from-primary/5 to-secondary/5 backdrop-blur-sm">
            <CardContent className="space-y-6 p-8 text-center md:p-16">
              <div className="space-y-4">
                <h2 className="text-balance font-bold text-3xl text-foreground tracking-tight md:text-4xl">
                  Have a project in mind?
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
                  I'm always interested in hearing about new projects and
                  opportunities. Let's create something amazing together.
                </p>
              </div>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button asChild className="cursor-pointer" size="lg">
                  <Link href="/#contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  className="cursor-pointer"
                  size="lg"
                  variant="outline"
                >
                  <Link href="/#services">View Services</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
