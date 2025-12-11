"use client";

import { Code2, Users, Zap } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function ContentSection() {
  const approach = [
    { icon: Code2, text: "Clean, maintainable code" },
    { icon: Zap, text: "Fast and responsive" },
    { icon: Users, text: "User-focused design" },
  ];

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Full-Stack",
    "Web Design",
  ];

  return (
    <section className="py-16 md:py-32" id="about">
      <div className="mx-auto max-w-7xl space-y-12 px-6 md:space-y-20">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-balance font-bold text-3xl text-foreground tracking-tight md:text-5xl">
            About me
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image Section */}
          <div className="relative flex items-center">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-b from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                alt="Jasmyre Lanuza - Web Developer"
                className="hidden h-full w-full rounded-[15px] object-cover dark:block"
                height={500}
                src="/dev.png"
                width={500}
              />
              <Image
                alt="Jasmyre Lanuza - Web Developer"
                className="h-full w-full rounded-[15px] object-cover shadow-lg dark:hidden"
                height={500}
                src="/dev.png"
                width={500}
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Intro */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-medium text-muted-foreground text-sm">
                  Full-Stack Developer
                </span>
                <Badge className="px-2 py-1 text-xs" variant="outline">
                  Philippines
                </Badge>
              </div>
              <p className="font-semibold text-foreground text-lg leading-snug">
                I build fast, clean websites with modern technologies that work
                beautifully for users.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Specializing in React, Next.js, and full-stack development. I
                focus on creating intuitive interfaces and solid backend
                solutions without unnecessary complexity.
              </p>
            </div>

            {/* Approach with Icons */}
            <div className="flex flex-col gap-3">
              {approach.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div className="flex items-center gap-3" key={item.text}>
                    <div className="shrink-0 rounded-lg bg-primary/10 p-2">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground text-sm">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Skills Tags */}
            <div className="space-y-3 border-border border-t pt-4">
              <p className="font-medium text-muted-foreground text-xs uppercase tracking-wide">
                Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    className="px-3 py-1.5 text-xs"
                    key={skill}
                    variant="secondary"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
