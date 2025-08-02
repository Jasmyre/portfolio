import { cn } from "@/lib/utils";
import React from "react";

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className, ...props }: HeroSectionProps) => {
  return (
    <section
      className={cn(
        "flex h-full min-h-screen flex-col justify-center",
        className,
      )}
      {...props}
    >
      <div className="text-center">
        <h1 className="h1">Jasmyre Andrei M. Lanuza</h1>
        <p className="lead mt-4">
          Building websites is what i love doing in my free time!
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
