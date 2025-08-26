import { HeroDisplay } from "@/components/pages/anixplorer/hero-display";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section
      className="h-100vh relative min-h-[100vh] w-full overflow-hidden"
      id="hero"
    >
      <div className="relative mx-auto flex h-full min-h-[90vh] max-w-7xl flex-row items-center justify-center gap-16 py-10 lg:min-h-screen">
        <div className="h-full flex-1 space-y-8">
          <div className="relative space-y-4">
            <h1 className="text-6xl leading-tight font-bold text-pretty">
              Your Gateway to the World of Anime
            </h1>
            <p className="text-muted-foreground text-xl leading-8 font-normal">
              Discover and explore a comprehensive database of anime titles,
              genres, and characters powered by the Jikan API.
            </p>
            <div className="absolute pointer-events-none top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-[100%] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] md:h-[800px] md:w-[800px]"></div>
          </div>
          <div className="space-x-4">
            <Button className="h-full cursor-pointer text-white" variant={"default"}>
              Explore Anime
            </Button>
            <Button className="h-full cursor-pointer" variant={"outline"}>
              Browse Top Anime
            </Button>
          </div>
        </div>
        <div className="h-full flex-1">
          <HeroDisplay />
        </div>
      </div>
    </section>
  );
};
