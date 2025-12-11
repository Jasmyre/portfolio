"use client";

import { CheckCircle2 } from "lucide-react";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { type Dispatch, type SetStateAction, useRef, useState } from "react";
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
import { type Service, services } from "@/data/services";
import { useCloseOnBack } from "@/hooks/use-close-on-back";
import { useIsMobile } from "@/hooks/use-mobile";

function ServiceCard({ service }: { service: Service }) {
  const [isOpen, setIsOpen] = useState(false);

  const buttonOpenerRef = useRef<HTMLButtonElement | null>(null);
  const isMobile = useIsMobile();
  const router = useRouter();

  useCloseOnBack(isOpen, () => setIsOpen(false), {
    restoreFocusRef: buttonOpenerRef,
  });

  if (isMobile) {
    return (
      <Drawer onOpenChange={setIsOpen} open={isOpen}>
        <DrawerTrigger asChild ref={buttonOpenerRef} role="button">
          <div className="h-full">
            <ServiceCardContent service={service} />
          </div>
        </DrawerTrigger>
        <DrawerContent className="max-h-[90vh]">
          <DrawerHeader className="px-6 pb-6">
            <DrawerTitle className="font-bold text-xl">
              {service.title}
            </DrawerTitle>
          </DrawerHeader>
          <div className="overflow-y-auto px-6 pb-8">
            <ServiceDetails
              router={router}
              service={service}
              setIsOpen={setIsOpen}
            />
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Sheet onOpenChange={setIsOpen} open={isOpen}>
      <SheetTrigger asChild role="button">
        <div className="h-full">
          <ServiceCardContent service={service} />
        </div>
      </SheetTrigger>
      <SheetContent className="w-full max-w-2xl overflow-y-auto p-0 sm:max-w-3xl">
        <SheetHeader className="sticky top-0 z-10 border-border border-b bg-background/95 p-6 pb-4 backdrop-blur-sm">
          <SheetTitle className="font-bold text-xl">{service.title}</SheetTitle>
        </SheetHeader>
        <div className="p-6">
          <ServiceDetails
            router={router}
            service={service}
            setIsOpen={setIsOpen}
          />
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
          <h2 className="text-balance font-bold text-3xl text-foreground tracking-tight md:text-5xl">
            Services I Offer
          </h2>
          <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
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

const ServiceDetails = ({
  service,
  setIsOpen,
  router,
}: {
  service: Service;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  router: AppRouterInstance;
}) => (
  <div className="space-y-6">
    <div className="space-y-4">
      <p className="text-base text-muted-foreground leading-relaxed">
        {service.longDescription}
      </p>
    </div>

    <div className="space-y-4">
      <h4 className="flex items-center font-bold text-lg">
        <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
        Key Highlights
      </h4>
      <ul className="space-y-3">
        {service.highlights.map((highlight, index) => (
          <li className="flex items-start" key={index}>
            <div className="mt-2.5 mr-4 h-2 w-2 shrink-0 rounded-full bg-primary" />
            <span className="text-muted-foreground leading-relaxed">
              {highlight}
            </span>
          </li>
        ))}
      </ul>
    </div>

    <div className="space-y-4">
      <h4 className="font-bold text-lg">Deliverables</h4>
      <div className="flex flex-wrap gap-2">
        {service.deliverables.map((deliverable, index) => (
          <Badge
            className="px-3 py-1.5 font-medium"
            key={index}
            variant="secondary"
          >
            {deliverable}
          </Badge>
        ))}
      </div>
    </div>

    <div className="space-y-4">
      <h4 className="font-bold text-lg">Technologies</h4>
      <div className="flex flex-wrap gap-2">
        {service.technologies.map((tech, index) => (
          <Badge
            className="px-3 py-1.5 font-medium"
            key={index}
            variant="outline"
          >
            {tech}
          </Badge>
        ))}
      </div>
    </div>

    <div className="flex gap-3 border-border border-t pt-6">
      <Button asChild className="flex-1 cursor-pointer" size="lg">
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

const ServiceCardContent = ({ service }: { service: Service }) => (
  <Card className="group relative h-full cursor-pointer overflow-hidden border bg-card transition-all duration-300 hover:shadow-lg">
    <CardHeader>
      <div className="flex items-start justify-start">
        <div className="rounded-lg bg-primary/10 p-3 transition-colors duration-300 group-hover:bg-primary/20">
          {service.icon ? (
            <service.icon className="h-6 w-6 text-primary" />
          ) : null}
        </div>
      </div>
      <CardTitle className="mt-4 font-bold text-foreground text-xl transition-colors group-hover:text-primary">
        {service.title}
      </CardTitle>
    </CardHeader>

    <CardContent className="flex flex-1 flex-col space-y-4">
      <div className="flex-1 space-y-4">
        <p className="line-clamp-2 text-muted-foreground text-sm leading-relaxed">
          {service.description}
        </p>
        <div className="flex flex-wrap justify-between gap-1.5 truncate">
          <div className="flex flex-wrap gap-1.5 truncate">
            {service.technologies.slice(0, 1).map((tech) => (
              <Badge
                className="px-2.5 py-1 font-medium text-xs"
                key={tech}
                variant="secondary"
              >
                {tech}
              </Badge>
            ))}
            {service.technologies.length > 1 && (
              <Badge
                className="px-2.5 py-1 font-medium text-xs"
                variant="outline"
              >
                +{service.technologies.length - 1}
              </Badge>
            )}
          </div>
          <div>
            <Button
              className="h-8 w-max cursor-pointer border px-3 font-medium text-primary text-xs"
              size="sm"
              variant="ghost"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);
