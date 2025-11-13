"use client";

import { services, type Service } from "@/app/data/services";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { useCloseOnBack } from "@/hooks/use-close-on-back";
import { useIsMobile } from "@/hooks/use-mobile";
import { CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

import Link from "next/link";

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
    <section className="relative py-16 md:py-32" id="services">
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
      </div>
    </section>
  );
}
