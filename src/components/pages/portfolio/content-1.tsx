"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Code2, Zap, Users } from "lucide-react";

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
          <h2 className="text-foreground text-3xl font-bold tracking-tight text-balance md:text-5xl">
            About me
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image Section */}
          <div className="relative flex items-center">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-b from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                src="/dev.png"
                className="hidden h-full w-full rounded-[15px] object-cover dark:block"
                alt="Jasmyre Lanuza - Web Developer"
                width={500}
                height={500}
              />
              <Image
                src="/dev.png"
                className="h-full w-full rounded-[15px] object-cover shadow-lg dark:hidden"
                alt="Jasmyre Lanuza - Web Developer"
                width={500}
                height={500}
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Intro */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-muted-foreground text-sm font-medium">
                  Full-Stack Developer
                </span>
                <Badge variant="outline" className="px-2 py-1 text-xs">
                  Philippines
                </Badge>
              </div>
              <p className="text-foreground text-lg leading-snug font-semibold">
                I build fast, clean websites with modern technologies that work
                beautifully for users.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
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
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="bg-primary/10 shrink-0 rounded-lg p-2">
                      <IconComponent className="text-primary h-5 w-5" />
                    </div>
                    <span className="text-foreground text-sm font-medium">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Skills Tags */}
            <div className="border-border space-y-3 border-t pt-4">
              <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-3 py-1.5 text-xs"
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
