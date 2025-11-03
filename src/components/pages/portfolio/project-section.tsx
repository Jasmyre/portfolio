"use client";
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
import { useCloseOnBack } from "@/hooks/use-close-on-back";
import { useIsMobile } from "@/hooks/use-mobile";
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

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  year: string;
  status: "completed" | "in-progress" | "archived";
  githubUrl?: string;
  liveUrl?: string;
  stats: {
    users?: number;
    performance?: number;
    codeQuality?: number;
    features?: number;
  };
  highlights: string[];
  challenges: string[];
}

const projects: Project[] = [
  {
    id: "1",
    title: "ICTQuest",
    description:
      "ICTQuest is a website that offers interactive coding lessons in web development. It provides activities such as arranging components and multiple-choice quizzes to support hands-on learning.",
    longDescription:
      "ICTQuest is an educational website designed to help learners practice coding concepts through interactive activities. The platform includes features like an arrange component exercise and multiple-choice quizzes that reinforce key topics. Its content is structured into groups, starting with HTML basics and moving toward more advanced elements such as forms and tables. The lessons are presented in a clear format that allows users to actively engage with the material rather than just reading about it. The overall focus is on making the learning process approachable and practical for beginners and intermediate learners.",
    image: "/ictquest-banner.png",
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Neon.tech",
      "Prisma",
      "OAuth",
      "Tailwind",
      "Shadcn ui",
    ],
    category: "Web Application",
    year: "2025",
    status: "completed",
    githubUrl: "https://github.com/Jasmyre/ictquest",
    liveUrl: "https://ictquest.vercel.app",
    stats: {
      performance: 88,
      codeQuality: 94,
      features: 6,
    },
    highlights: [
      "Interactive lesson",
      "Track progress",
      "Socialize with other users",
      "Save data with accounts",
    ],
    challenges: ["Limited development deadline"],
  },
  {
    id: "2",
    title: "FateShaper",
    description:
      "Reimagining rock, paper, scissors with strategic RPG elements, dynamic stats, and tactical depth for an epic gaming experience.",
    longDescription:
      "This game is a next-level spin on the classic rock-paper-scissors. It's not just about picking rock, paper, or scissors—there's an entire RPG-style system working behind the scenes. You'll need to manage stats like strength, precision, crit, speed, fatigue, and momentum, which all affect every move in combat. This makes each battle more strategic, dynamic, and unpredictable.",
    image: "/fateshaper-banner.png",
    technologies: ["Vite", "Typescript", "Tailwind"],
    category: "Game dev",
    year: "2024",
    status: "completed",
    githubUrl: "https://github.com/Jasmyre/fateshaper",
    liveUrl: "https://fateshaper.vercel.app",
    stats: {
      users: 10,
      performance: 91,
      codeQuality: 89,
      features: 1,
    },
    highlights: ["Challenging gameplay"],
    challenges: [],
  },
  {
    id: "3",
    title: "Search4Movies",
    description:
      "Search4Movies is a website that provides basic details about films, including release year, genre, cast, and summaries.",
    longDescription:
      "Search4Movies is a website that lets users quickly look up movies and explore essential details about them. It provides information such as release year, genre, cast, and summaries in a simple, easy-to-read format. The site is designed for straightforward browsing without unnecessary clutter. Users can type in a movie title to find relevant results or discover related films through connected data. Its focus is on delivering clear movie information in an organized and accessible way.",
    image: "/search4movies-banner.png",
    technologies: ["React", "Next.js", "TMDB API", "Tailwind", "Javascript"],
    category: "Web Application",
    year: "2024",
    status: "completed",
    githubUrl: "https://github.com/Jasmyre/search4movies",
    liveUrl: "https://search4movies.vercel.app",
    stats: {
      users: 10,
      performance: 91,
      codeQuality: 89,
      features: 1,
    },
    highlights: ["Search for any movies"],
    challenges: [],
  },
  {
    id: "4",
    title: "BlissBrew",
    description:
      "BlissBrew is a static website design concept for a coffee shop. It presents a simple layout that highlights the shop’s atmosphere, menu, and offerings in a clean visual style.",
    longDescription:
      "BlissBrew is a personal project showcasing a static single-page web design created for a coffee shop. The design focuses on a calm and inviting atmosphere, reflecting the cozy vibe of a café setting. It features sections for the shop’s menu, specials, and general information without complex functionality. The layout emphasizes clean typography, warm colors, and an organized structure to give visitors a smooth browsing experience. As a design project, its goal is to capture the essence of a coffee shop through visual presentation rather than interactive features.",
    image: "/blissbrew-banner.png",
    technologies: ["React", "Tailwind", "Next.js"],
    category: "Web Design",
    year: "2023",
    status: "completed",
    githubUrl: "https://github.com/Jasmyre/blissbrew",
    liveUrl: "https://blissbrew.vercel.app",
    stats: {
      performance: 96,
      codeQuality: 95,
      features: 0,
    },
    highlights: ["Specialized design vibe"],
    challenges: [],
  },
];

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

  const ProjectContent = () => (
    <div className="h-full">
      <Card
        className={`group from-card to-card/80 hover:from-accent/20 hover:to-accent/10 h-full cursor-pointer overflow-hidden border-0 bg-gradient-to-br py-0 backdrop-blur-sm transition-all duration-300 ${className}`}
      >
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <Image
            width={500}
            height={500}
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105 md:h-56 lg:h-64"
          />
          <div className="absolute top-3 right-3 z-20">
            <Badge
              variant="outline"
              className="bg-background/80 text-xs font-medium backdrop-blur-md"
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
                <h3 className="group-hover:text-primary max-w-[80%] truncate text-lg leading-tight font-bold transition-colors">
                  {project.title}
                </h3>
                <div className="text-muted-foreground ml-3 flex flex-shrink-0 items-center text-xs">
                  <Calendar className="mr-1 h-3 w-3" />
                  {project.year}
                </div>
              </div>
              <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 truncate">
              {project.technologies.slice(0, 2).map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="px-2.5 py-1 text-xs font-medium"
                >
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 2 && (
                <Badge
                  variant="outline"
                  className="px-2.5 py-1 text-xs font-medium"
                >
                  +{project.technologies.length - 2}
                </Badge>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between pt-2">
            <div className="flex gap-2">
              {project.githubUrl && (
                <Button
                  size="sm"
                  variant="outline"
                  className="h-8 w-8 cursor-pointer bg-transparent p-0"
                >
                  <Github className="h-3.5 w-3.5" />
                </Button>
              )}
              {project.liveUrl && (
                <Button
                  size="sm"
                  variant="outline"
                  className="h-8 w-8 cursor-pointer bg-transparent p-0"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </Button>
              )}
            </div>
            <Button
              size="sm"
              variant="ghost"
              className="text-primary h-8 cursor-pointer border px-3 text-xs font-medium"
            >
              View Details
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const ProjectDetails = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="relative overflow-hidden rounded-xl">
          <Image
            width={800}
            height={450}
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="h-64 w-full object-cover md:h-72"
          />
        </div>
        <p className="text-muted-foreground leading-relaxed">
          {project.longDescription}
        </p>
      </div>

      {Object.keys(project.stats).length > 0 && (
        <div className="space-y-4">
          <h4 className="flex items-center text-lg font-bold">
            <Zap className="text-primary mr-2 h-5 w-5" />
            Project Metrics
          </h4>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {project.stats.users && (
              <div className="border-border/50 bg-muted/30 rounded-xl border p-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground flex items-center font-medium">
                    <Users className="mr-2 h-4 w-4" />
                    Active Users
                  </span>
                  <span className="text-foreground text-lg font-bold">
                    {project.stats.users.toLocaleString()}
                  </span>
                </div>
              </div>
            )}
            {project.stats.performance && (
              <div className="border-border/50 bg-muted/30 rounded-xl border p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-muted-foreground font-medium">
                    Performance Score
                  </span>
                  <span className="text-foreground text-lg font-bold">
                    {project.stats.performance}%
                  </span>
                </div>
                <Progress value={project.stats.performance} className="h-2.5" />
              </div>
            )}
            {project.stats.codeQuality && (
              <div className="border-border/50 bg-muted/30 rounded-xl border p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-muted-foreground flex items-center font-medium">
                    <Code className="mr-2 h-4 w-4" />
                    Code Quality
                  </span>
                  <span className="text-foreground text-lg font-bold">
                    {project.stats.codeQuality}%
                  </span>
                </div>
                <Progress value={project.stats.codeQuality} className="h-2.5" />
              </div>
            )}
            {project.stats.features && (
              <div className="border-border/50 bg-muted/30 rounded-xl border p-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground font-medium">
                    Features Built
                  </span>
                  <span className="text-foreground text-lg font-bold">
                    {project.stats.features}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="space-y-4">
        <h4 className="flex items-center text-lg font-bold">
          <Database className="text-primary mr-2 h-5 w-5" />
          Technologies Used
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="px-3 py-1.5 font-medium"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-bold">Key Highlights</h4>
        <ul className="space-y-3">
          {project.highlights.map((highlight, index) => (
            <li key={index} className="flex items-start">
              <div className="bg-primary mt-2.5 mr-4 h-2 w-2 flex-shrink-0 rounded-full" />
              <span className="text-muted-foreground leading-relaxed">
                {highlight}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-bold">Technical Challenges</h4>
        <ul className="space-y-3">
          {project.challenges.map((challenge, index) => (
            <li key={index} className="flex items-start">
              <div className="bg-muted-foreground mt-2.5 mr-4 h-2 w-2 flex-shrink-0 rounded-full" />
              <span className="text-muted-foreground leading-relaxed">
                {challenge}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-border flex gap-3 border-t pt-6">
        {project.githubUrl && (
          <Button
            variant="outline"
            className="flex-1 cursor-pointer bg-transparent"
            asChild
          >
            <Link href={project.githubUrl} target="_blank">
              <Github className="mr-2 h-4 w-4" />
              View Code
            </Link>
          </Button>
        )}
        {project.liveUrl && (
          <Button className="flex-1 cursor-pointer" asChild>
            <Link href={project.liveUrl} target="_blank">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          </Button>
        )}
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerTrigger role="button" ref={buttonOpenerRef} asChild>
          <div className="h-full">
            <ProjectContent />
          </div>
        </DrawerTrigger>
        <DrawerContent className="max-h-[90vh]">
          <DrawerHeader className="px-6 pb-6">
            <DrawerTitle className="flex items-center justify-between text-xl font-bold">
              <span>{project.title}</span>
              <Badge variant="outline" className="font-medium">
                {project.year}
              </Badge>
            </DrawerTitle>
          </DrawerHeader>
          <div className="overflow-y-auto px-6 pb-8">
            <ProjectDetails />
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Sheet>
      <SheetTrigger role="button" asChild>
        <div className="h-full">
          <ProjectContent />
        </div>
      </SheetTrigger>
      <SheetContent className="w-full max-w-2xl overflow-y-auto p-0 sm:max-w-3xl">
        <SheetHeader className="border-border bg-background/95 sticky top-0 z-10 border-b p-6 pb-4 backdrop-blur-sm">
          <SheetTitle className="flex items-center justify-between text-xl font-bold">
            <span>{project.title}</span>
            <Badge variant="outline" className="font-medium">
              {project.year}
            </Badge>
          </SheetTitle>
        </SheetHeader>
        <div className="p-6">
          <ProjectDetails />
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function ProjectsSection() {
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
            <h2 className="text-muted-foreground text-center text-3xl font-semibold text-balance md:text-4xl">
              Projects
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap md:items-center md:justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
              className="cursor-pointer px-6 py-2 font-medium capitalize"
            >
              {category === "all" ? "All Projects" : category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div className="h-full" key={project.id}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        <div className="mt-12">
          <div>
            <div className="from-muted/30 to-muted/10 border-border/50 rounded-2xl border bg-gradient-to-r p-8 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
                <div className="space-y-3">
                  <div className="text-primary text-3xl font-bold">
                    {projects.length}
                  </div>
                  <div className="text-muted-foreground text-sm font-medium">
                    Projects Completed
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="text-primary text-3xl font-bold">
                    {
                      Array.from(
                        new Set(projects.flatMap((p) => p.technologies)),
                      ).length
                    }
                  </div>
                  <div className="text-muted-foreground text-sm font-medium">
                    Technologies Used
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="text-primary text-3xl font-bold">
                    {projects
                      .reduce((acc, p) => acc + (p.stats.users ?? 0), 0)
                      .toLocaleString()}
                  </div>
                  <div className="text-muted-foreground text-sm font-medium">
                    Total Users Reached
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="text-primary text-3xl font-bold">
                    {Math.round(
                      projects.reduce(
                        (acc, p) => acc + (p.stats.performance ?? 0),
                        0,
                      ) / projects.length,
                    )}
                    %
                  </div>
                  <div className="text-muted-foreground text-sm font-medium">
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
