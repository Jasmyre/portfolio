"use client";

import {
  ArrowUpRight,
  Calendar,
  Code,
  Database,
  ExternalLink,
  Github,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Progress } from "@/components/ui/progress";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { projects } from "@/data/projects";
import { useCloseOnBack } from "@/hooks/use-close-on-back";
import { useIsMobile } from "@/hooks/use-mobile";
import type { Project } from "../../../data/projects";

function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
  index: number;
}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const buttonOpenerRef = useRef<HTMLButtonElement | null>(null);
  const isMobile = useIsMobile();

  useCloseOnBack(isDrawerOpen, () => setIsDrawerOpen(false), {
    restoreFocusRef: buttonOpenerRef,
  });

  if (isMobile) {
    return (
      <Drawer onOpenChange={setIsDrawerOpen} open={isDrawerOpen}>
        <DrawerTrigger asChild ref={buttonOpenerRef} role="button">
          <div className="h-full">
            <ProjectContent className={className} project={project} />
          </div>
        </DrawerTrigger>
        <DrawerContent className="max-h-[90vh]">
          <DrawerHeader className="px-6 pb-6">
            <DrawerTitle className="flex items-center justify-between font-bold text-xl">
              <span>{project.title}</span>
              <Badge className="font-medium" variant="outline">
                {project.year}
              </Badge>
            </DrawerTitle>
          </DrawerHeader>
          <div className="overflow-y-auto px-6 pb-8">
            <ProjectDetails project={project} />
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Sheet>
      <SheetTrigger asChild role="button">
        <div className="h-full">
          <ProjectContent project={project} />
        </div>
      </SheetTrigger>
      <SheetContent className="w-full max-w-2xl overflow-y-auto p-0 sm:max-w-3xl">
        <SheetHeader className="sticky top-0 z-10 border-border border-b bg-background/95 p-6 pb-4 backdrop-blur-sm">
          <SheetTitle className="flex items-center justify-between font-bold text-xl">
            <span>{project.title}</span>
            <Badge className="font-medium" variant="outline">
              {project.year}
            </Badge>
          </SheetTitle>
        </SheetHeader>
        <div className="p-6">
          <ProjectDetails project={project} />
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function ProjectsSection({
  limit,
  label,
}: {
  limit?: number;
  label?: string;
}) {
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    "all",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];
  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="py-16 md:py-32" id="portfolio">
      <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">
        <div className="flex flex-col items-center justify-center gap-6 text-center md:flex-row md:items-center">
          <div>
            <h2 className="text-balance text-center font-semibold text-3xl text-muted-foreground md:text-4xl">
              Projects
            </h2>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 md:flex-row">
          {/* Category buttons */}
          <div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap md:items-center md:justify-center">
            {categories.map((category) => {
              const displayText =
                category === "all"
                  ? ((label as string) ?? "All Projects")
                  : (category as string);

              return (
                <Button
                  className="cursor-pointer px-6 py-2 font-medium capitalize"
                  key={category}
                  onClick={() => setFilter(category)}
                  size="sm"
                  variant={filter === category ? "default" : "outline"}
                >
                  {displayText}
                </Button>
              );
            })}
          </div>

          {/* View All section */}
          <div className="flex justify-center max-md:w-full">
            <Button
              asChild
              className="px-6 py-2 font-medium max-md:w-full"
              onClick={() => setFilter("all")}
              size="sm"
              variant="outline"
            >
              <Link href={"/"}>Home</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {limit
            ? filteredProjects.slice(0, limit).map((project, index) => (
                <div className="h-full" key={project.id}>
                  <ProjectCard index={index} project={project} />
                </div>
              ))
            : filteredProjects.map((project, index) => (
                <div className="h-full" key={project.id}>
                  <ProjectCard index={index} project={project} />
                </div>
              ))}
        </div>

        <div className="mt-12">
          <div>
            <div className="rounded-2xl border border-border/50 bg-linear-to-r from-muted/30 to-muted/10 p-8 backdrop-blur-sm">
              <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
                <div className="space-y-3">
                  <div className="font-bold text-3xl text-primary">
                    {projects.length}
                  </div>
                  <div className="font-medium text-muted-foreground text-sm">
                    Projects Completed
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="font-bold text-3xl text-primary">
                    {
                      Array.from(
                        new Set(projects.flatMap((p) => p.technologies))
                      ).length
                    }
                  </div>
                  <div className="font-medium text-muted-foreground text-sm">
                    Technologies Used
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="font-bold text-3xl text-primary">
                    {Math.round(
                      projects.reduce(
                        (acc, p) => acc + (p.stats.performance ?? 0),
                        0
                      ) / projects.length
                    )}
                    %
                  </div>
                  <div className="font-medium text-muted-foreground text-sm">
                    Avg Performance Score
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ProjectContent = ({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) => (
  <div className="h-full">
    <Card
      className={`group h-full cursor-pointer overflow-hidden border-0 bg-linear-to-br from-card to-card/80 py-0 backdrop-blur-sm transition-all duration-300 hover:from-accent/20 hover:to-accent/10 ${className}`}
    >
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-10 bg-linear-to-t from-black/60 via-transparent to-transparent" />
        <Image
          alt={project.title}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105 md:h-56 lg:h-64"
          height={500}
          src={project.image || "/placeholder.svg"}
          width={500}
        />
        <div className="absolute top-3 right-3 z-20">
          <Badge
            className="bg-background/80 font-medium text-xs backdrop-blur-md"
            variant="outline"
          >
            {project.category}
          </Badge>
        </div>
        <div className="absolute right-3 bottom-3 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <ArrowUpRight className="h-5 w-5 text-white" />
        </div>
      </div>
      <CardContent className="flex flex-1 flex-col space-y-4 pb-5">
        <div className="flex-1 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start justify-between">
              <h3 className="max-w-[80%] truncate font-bold text-lg leading-tight transition-colors group-hover:text-primary">
                {project.title}
              </h3>
              <div className="ml-3 flex shrink-0 items-center text-muted-foreground text-xs">
                <Calendar className="mr-1 h-3 w-3" />
                {project.year}
              </div>
            </div>
            <p className="line-clamp-2 text-muted-foreground text-sm leading-relaxed">
              {project.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5 truncate">
            {project.technologies.slice(0, 2).map((tech) => (
              <Badge
                className="px-2.5 py-1 font-medium text-xs"
                key={tech}
                variant="secondary"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 2 && (
              <Badge
                className="px-2.5 py-1 font-medium text-xs"
                variant="outline"
              >
                +{project.technologies.length - 2}
              </Badge>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between pt-2">
          <div className="flex gap-2">
            {project.githubUrl ?? (
              <Button
                className="h-8 w-8 cursor-pointer bg-transparent p-0"
                size="sm"
                variant="outline"
              >
                <Github className="h-3.5 w-3.5" />
              </Button>
            )}
            {project.liveUrl ? (
              <Button
                className="h-8 w-8 cursor-pointer bg-transparent p-0"
                size="sm"
                variant="outline"
              >
                <ExternalLink className="h-3.5 w-3.5" />
              </Button>
            ) : null}
          </div>
          <Button
            className="h-8 cursor-pointer border px-3 font-medium text-primary text-xs"
            size="sm"
            variant="ghost"
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
);

const ProjectDetails = ({ project }: { project: Project }) => (
  <div className="space-y-6">
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-xl">
        <Image
          alt={project.title}
          className="h-64 w-full object-cover md:h-72"
          height={450}
          src={project.image || "/placeholder.svg"}
          width={800}
        />
      </div>
      <p className="text-muted-foreground leading-relaxed">
        {project.description}
      </p>
    </div>

    {Object.keys(project.stats).length > 0 && (
      <div className="space-y-4">
        <h4 className="flex items-center font-bold text-lg">
          <Zap className="mr-2 h-5 w-5 text-primary" />
          Project Metrics
        </h4>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {project.stats.users ? (
            <div className="rounded-xl border border-border/50 bg-muted/30 p-4">
              <div className="flex items-center justify-between">
                <span className="flex items-center font-medium text-muted-foreground">
                  <Users className="mr-2 h-4 w-4" />
                  Active Users
                </span>
                <span className="font-bold text-foreground text-lg">
                  {project.stats.users.toLocaleString()}
                </span>
              </div>
            </div>
          ) : null}
          {project.stats.performance ? (
            <div className="rounded-xl border border-border/50 bg-muted/30 p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-medium text-muted-foreground">
                  Performance Score
                </span>
                <span className="font-bold text-foreground text-lg">
                  {project.stats.performance}%
                </span>
              </div>
              <Progress className="h-2.5" value={project.stats.performance} />
            </div>
          ) : null}
          {project.stats.accessibility ? (
            <div className="rounded-xl border border-border/50 bg-muted/30 p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-medium text-muted-foreground">
                  Accessibility
                </span>
                <span className="font-bold text-foreground text-lg">
                  {project.stats.accessibility}%
                </span>
              </div>
              <Progress className="h-2.5" value={project.stats.accessibility} />
            </div>
          ) : null}
          {project.stats.codeQuality ? (
            <div className="rounded-xl border border-border/50 bg-muted/30 p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="flex items-center font-medium text-muted-foreground">
                  <Code className="mr-2 h-4 w-4" />
                  Code Quality
                </span>
                <span className="font-bold text-foreground text-lg">
                  {project.stats.codeQuality}%
                </span>
              </div>
              <Progress className="h-2.5" value={project.stats.codeQuality} />
            </div>
          ) : null}
          {project.stats.seo ? (
            <div className="rounded-xl border border-border/50 bg-muted/30 p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-medium text-muted-foreground">SEO</span>
                <span className="font-bold text-foreground text-lg">
                  {project.stats.seo}%
                </span>
              </div>
              <Progress className="h-2.5" value={project.stats.seo} />
            </div>
          ) : null}
        </div>
      </div>
    )}

    <div className="space-y-4">
      <h4 className="flex items-center font-bold text-lg">
        <Database className="mr-2 h-5 w-5 text-primary" />
        Technologies Used
      </h4>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <Badge
            className="px-3 py-1.5 font-medium"
            key={tech}
            variant="secondary"
          >
            {tech}
          </Badge>
        ))}
      </div>
    </div>

    <div className="space-y-4">
      <h4 className="font-bold text-lg">Key Highlights</h4>
      <ul className="space-y-3">
        {project.highlights.map((highlight, index) => (
          <li className="flex items-start" key={index}>
            <div className="mt-2.5 mr-4 h-2 w-2 shrink-0 rounded-full bg-primary" />
            <span className="text-muted-foreground leading-relaxed">
              {highlight}
            </span>
          </li>
        ))}
      </ul>
    </div>

    <div className="flex gap-3 border-border border-t pt-6">
      {project.githubUrl ? (
        <Button
          asChild
          className="flex-1 cursor-pointer bg-transparent"
          variant="outline"
        >
          <Link href={project.githubUrl} target="_blank">
            <Github className="mr-2 h-4 w-4" />
            View Code
          </Link>
        </Button>
      ) : null}
      {project.liveUrl ? (
        <Button asChild className="flex-1 cursor-pointer">
          <Link href={project.liveUrl} target="_blank">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </Link>
        </Button>
      ) : null}
    </div>
  </div>
);
