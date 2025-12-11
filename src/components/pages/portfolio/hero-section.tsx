import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden lg:min-h-screen">
      <div className="absolute bottom-10 cursor-pointer">
        <Button
          asChild
          className="z-50 animate-bounce cursor-pointer rounded-full opacity-75"
          size={"icon"}
          variant={"outline"}
        >
          <Link
            className="cursor-pointer rounded-full opacity-75"
            href={"#about"}
          >
            <ArrowDown />
          </Link>
        </Button>
      </div>
      <div
        aria-hidden
        className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
      >
        <div className="-translate-y-87.5 -rotate-45 absolute top-0 left-0 h-320 w-140 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="-rotate-45 absolute top-0 left-0 h-320 w-60 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="-translate-y-87.5 -rotate-45 absolute top-0 left-0 h-320 w-60 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>
      <section className="flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          <div className="-z-10 absolute inset-0 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]" />
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center sm:mx-auto lg:mt-0 lg:mr-auto">
              <h1 className="text-balance text-4xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-[5.25rem]">
                No tech skills? No problem. I&apos;ll build the site for you.
              </h1>
              <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-pretty">
                You don’t need to know how websites work—I’ll handle the details
                and build something that fits exactly what you need
              </p>

              <div className="mx-auto mt-12 flex w-full max-w-sm flex-col items-center justify-center gap-4 md:flex-row">
                <Button
                  asChild
                  className="rounded-xl px-5 text-base max-md:w-full"
                  size="lg"
                >
                  <Link href="#portfolio">
                    <span className="text-nowrap">View portfolio</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  className="h-10.5 rounded-xl px-5 max-md:w-full"
                  key={2}
                  size="lg"
                  variant="outline"
                >
                  <Link href="#contact">
                    <span className="text-nowrap">Contact me</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
