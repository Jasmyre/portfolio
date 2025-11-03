"use client";

import type React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Palette,
  Zap,
  Smartphone,
  Database,
  Globe,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { useRef, useState } from "react";
import { useCloseOnBack } from "@/hooks/use-close-on-back";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Service {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  icon: React.ElementType;
  highlights: string[];
  deliverables: string[];
  technologies: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: "Web Design",
    description:
      "Beautiful, user-centric designs that balance aesthetics with functionality. I create interfaces that engage and convert.",
    longDescription:
      "I create stunning, user-centric web designs that combine aesthetic appeal with practical functionality. From wireframes to high-fidelity mockups, I ensure every element serves a purpose while maintaining visual harmony. My designs are responsive, accessible, and optimized for conversion.",
    icon: Palette,
    highlights: [
      "Responsive design approach",
      "User-centric methodology",
      "Accessibility-first thinking",
      "Modern design trends",
    ],
    deliverables: [
      "UI/UX mockups",
      "Wireframes",
      "Design system",
      "Interactive prototypes",
    ],
    technologies: ["Figma", "Adobe XD", "Tailwind CSS", "shadcn/ui"],
  },
  {
    id: 2,
    title: "Frontend Development",
    description:
      "Building responsive, performant web applications using modern frameworks like React, Next.js, and TypeScript.",
    longDescription:
      "I build fast, responsive frontend applications using cutting-edge technologies and best practices. Whether it's a static site or a complex interactive application, I ensure clean code, optimal performance, and exceptional user experience across all devices.",
    icon: Code2,
    highlights: [
      "React & Next.js expertise",
      "TypeScript implementation",
      "Performance optimization",
      "SEO-friendly structure",
    ],
    deliverables: [
      "Responsive web apps",
      "Component libraries",
      "Performance audits",
      "Interactive UI",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    id: 3,
    title: "Full-Stack Development",
    description:
      "End-to-end development solutions combining frontend expertise with backend architecture and database design.",
    longDescription:
      "I deliver complete full-stack solutions from frontend to backend, handling everything from API design to database architecture. My approach ensures scalable, secure applications with seamless integration between all layers.",
    icon: Globe,
    highlights: [
      "Complete project ownership",
      "Scalable architecture",
      "Security best practices",
      "Real-time functionality",
    ],
    deliverables: [
      "Full web applications",
      "REST APIs",
      "Database design",
      "Authentication systems",
    ],
    technologies: [
      "Node.js",
      "Next.js",
      "PostgreSQL",
      "Neon.tech",
      "Prisma",
      "Supabase",
    ],
  },
  {
    id: 4,
    title: "Performance Optimization",
    description:
      "Analyzing and optimizing web applications for speed, accessibility, and SEO. Every millisecond matters.",
    longDescription:
      "I optimize websites for speed, accessibility, and search engine visibility. Through code analysis, image optimization, and strategic caching, I ensure your application performs at peak efficiency.",
    icon: Zap,
    highlights: [
      "Core Web Vitals optimization",
      "Accessibility audits (WCAG)",
      "SEO enhancement",
      "Code splitting & lazy loading",
    ],
    deliverables: [
      "Performance reports",
      "Optimization recommendations",
      "Implementation support",
    ],
    technologies: ["Lighthouse", "WebPageTest", "Chrome DevTools", "Webpack"],
  },
  {
    id: 5,
    title: "Responsive Mobile Design",
    description:
      "Crafting seamless experiences across all devices. Your site looks stunning on phones, tablets, and desktops.",
    longDescription:
      "Every project I build is mobile-first by design. I ensure seamless, intuitive experiences across all screen sizes, from smartphones to large displays, with thoughtful touch interactions and optimized performance.",
    icon: Smartphone,
    highlights: [
      "Mobile-first approach",
      "Touch-friendly interactions",
      "Screen size optimization",
      "Cross-browser compatibility",
    ],
    deliverables: [
      "Mobile-optimized sites",
      "Responsive frameworks",
      "Touch gesture support",
    ],
    technologies: [
      "CSS Grid",
      "Flexbox",
      "Tailwind CSS",
      "Mobile viewport optimization",
    ],
  },
  {
    id: 6,
    title: "Database Architecture",
    description:
      "Designing scalable database solutions with proper indexing, relationships, and optimization strategies.",
    longDescription:
      "I design robust, scalable database architectures that grow with your application. From schema design to query optimization, I ensure your data is organized efficiently and securely.",
    icon: Database,
    highlights: [
      "Relational database design",
      "Query optimization",
      "Indexing strategies",
      "Data security & backup",
    ],
    deliverables: [
      "Database schema",
      "Optimization queries",
      "Migration scripts",
      "Backup strategies",
    ],
    technologies: [
      "PostgreSQL",
      "Neon.tech",
      "Prisma ORM",
      "SQL",
      "Row Level Security",
    ],
  },
];

function ServiceCard({ service }: { service: Service }) {
  const [isOpen, setIsOpen] = useState(false);

  const buttonOpenerRef = useRef<HTMLButtonElement | null>(null);
  const isMobile = useIsMobile();
  const router = useRouter();

  useCloseOnBack(isOpen, () => setIsOpen(false), {
    restoreFocusRef: buttonOpenerRef,
  });

  const ServiceCardContent = () => (
    <Card className="group bg-card relative h-full cursor-pointer overflow-hidden border transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <div className="flex items-start justify-start">
          <div className="bg-primary/10 group-hover:bg-primary/20 rounded-lg p-3 transition-colors duration-300">
            {service.icon && <service.icon className="text-primary h-6 w-6" />}
          </div>
        </div>
        <CardTitle className="text-foreground group-hover:text-primary mt-4 text-xl font-bold transition-colors">
          {service.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col space-y-4">
        <div className="flex-1 space-y-4">
          <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
            {service.description}
          </p>
          <div className="flex flex-wrap justify-between gap-1.5 truncate">
            <div className="flex flex-wrap gap-1.5 truncate">
              {service.technologies.slice(0, 1).map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="px-2.5 py-1 text-xs font-medium"
                >
                  {tech}
                </Badge>
              ))}
              {service.technologies.length > 1 && (
                <Badge
                  variant="outline"
                  className="px-2.5 py-1 text-xs font-medium"
                >
                  +{service.technologies.length - 1}
                </Badge>
              )}
            </div>
            <div>
              <Button
                size="sm"
                variant="ghost"
                className="text-primary h-8 w-max cursor-pointer border px-3 text-xs font-medium"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const ServiceDetails = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <p className="text-muted-foreground text-base leading-relaxed">
          {service.longDescription}
        </p>
      </div>

      <div className="space-y-4">
        <h4 className="flex items-center text-lg font-bold">
          <CheckCircle2 className="text-primary mr-2 h-5 w-5" />
          Key Highlights
        </h4>
        <ul className="space-y-3">
          {service.highlights.map((highlight, idx) => (
            <li key={idx} className="flex items-start">
              <div className="bg-primary mt-2.5 mr-4 h-2 w-2 flex-shrink-0 rounded-full" />
              <span className="text-muted-foreground leading-relaxed">
                {highlight}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-bold">Deliverables</h4>
        <div className="flex flex-wrap gap-2">
          {service.deliverables.map((deliverable, idx) => (
            <Badge
              key={idx}
              variant="secondary"
              className="px-3 py-1.5 font-medium"
            >
              {deliverable}
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-bold">Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {service.technologies.map((tech, idx) => (
            <Badge
              key={idx}
              variant="outline"
              className="px-3 py-1.5 font-medium"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div className="border-border flex gap-3 border-t pt-6">
        <Button className="flex-1 cursor-pointer" size="lg" asChild>
          <Link
            href={"#contact"}
            onClick={() => {
              setIsOpen(false);
              setTimeout(() => {
                router.push("#contact");
              }, 100);
            }}
          >
            Let&apos;s Discuss
          </Link>
        </Button>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger role="button" ref={buttonOpenerRef} asChild>
          <div className="h-full">
            <ServiceCardContent />
          </div>
        </DrawerTrigger>
        <DrawerContent className="max-h-[90vh]">
          <DrawerHeader className="px-6 pb-6">
            <DrawerTitle className="text-xl font-bold">
              {service.title}
            </DrawerTitle>
          </DrawerHeader>
          <div className="overflow-y-auto px-6 pb-8">
            <ServiceDetails />
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger role="button" asChild>
        <div className="h-full">
          <ServiceCardContent />
        </div>
      </SheetTrigger>
      <SheetContent className="w-full max-w-2xl overflow-y-auto p-0 sm:max-w-3xl">
        <SheetHeader className="border-border bg-background/95 sticky top-0 z-10 border-b p-6 pb-4 backdrop-blur-sm">
          <SheetTitle className="text-xl font-bold">{service.title}</SheetTitle>
        </SheetHeader>
        <div className="p-6">
          <ServiceDetails />
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function ServicesSection() {
  return (
    <section className="relative py-16 md:py-32">
      <div className="mx-auto max-w-7xl space-y-12 px-6 md:space-y-20">
        {/* Header */}
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-foreground text-3xl font-bold tracking-tight text-balance md:text-5xl">
            Services I Offer
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
            From concept to deployment, I provide comprehensive web development
            services tailored to bring your vision to life with precision and
            creativity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mx-auto max-w-2xl pt-8">
          <Card className="border-primary/20 from-primary/5 to-secondary/5 bg-gradient-to-br backdrop-blur-sm">
            <CardContent className="space-y-6 p-8 text-center md:p-12">
              <div>
                <h3 className="text-foreground mb-2 text-2xl font-bold md:text-3xl">
                  Ready to Start Your Project?
                </h3>
                <p className="text-muted-foreground text-lg">
                  Let&apos;s discuss how I can help transform your ideas into
                  reality with expert development and design.
                </p>
              </div>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 font-semibold"
              >
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
