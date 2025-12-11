import { HeroDisplay } from "@/components/pages/anixplorer/hero-display";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden" id="hero">
      <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center gap-16 px-6 lg:min-h-screen lg:flex-row">
        <div className="flex min-h-[75vh] max-w-xl flex-1 flex-col justify-center space-y-8 lg:h-full lg:min-h-fit">
          <div className="relative space-y-4">
            <h1 className="text-pretty font-bold text-6xl leading-tight">
              Your Gateway to the World of Anime
            </h1>
            <p className="font-normal text-muted-foreground text-xl leading-8">
              Discover and explore a comprehensive database of anime titles,
              genres, and characters powered by the Jikan API.
            </p>
            {/* <div className="pointer-events-none absolute top-1/2 left-1/2 hidden h-[500px] w-[500px] -translate-x-[100%] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] md:h-[800px] md:w-[800px] lg:block"></div> */}
          </div>
          <div className="space-x-4">
            <Button
              className="h-full cursor-pointer text-white"
              variant={"default"}
            >
              Explore Anime
            </Button>
            <Button className="h-full cursor-pointer" variant={"outline"}>
              Browse Top Anime
            </Button>
          </div>
        </div>
        <div className="hidden h-full flex-1 lg:block">
          <HeroDisplay />
        </div>
      </div>
    </section>
  );
};
