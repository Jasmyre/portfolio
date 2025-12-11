import { BookOpenText, Globe, Rocket, Search } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const FeatureSection = () => {
  return (
    <section className="relative w-full overflow-hidden" id="feature">
      <div className="relative mx-auto min-h-screen max-w-7xl items-center justify-center gap-16 space-y-16 px-6 py-16 md:py-32 lg:min-h-screen lg:flex-row">
        <div>
          <h1 className="text-center font-semibold text-3xl">
            Why use AniXplorer?
          </h1>
          <p className="mt-4 text-pretty text-center text-muted-foreground text-xl">
            AniXplorer is designed for anime fans and researchers who want
            quick, reliable access to anime data.
          </p>
        </div>
        <div className="relative grid grid-cols-1 grid-rows-2 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 hidden h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] md:h-[1000px] md:w-[1000px] lg:block"></div> */}
          <Card className="bg-gradient-to-b from-card/25 to-background/25 px-0 backdrop-blur-xl transition-all duration-200 hover:from-card/75 hover:to-background/75">
            <CardHeader className="flex items-center justify-center px-0">
              <Search className="h-20 w-20 text-center text-primary" />
            </CardHeader>
            <CardContent className="pt-8">
              <div className="text-center">
                <h3 className="font-semibold text-2xl">Search Instantly</h3>
                <p className="mt-4 font-normal text-muted-foreground text-xl">
                  Find titles by name, genre, or season.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-b from-card/25 to-background/25 px-0 backdrop-blur-xl transition-all duration-200 hover:from-card/75 hover:to-background/75">
            <CardHeader className="flex items-center justify-center px-0">
              <Globe className="h-20 w-20 text-center text-primary" />
            </CardHeader>
            <CardContent className="pt-8">
              <div className="text-center">
                <h3 className="font-semibold text-2xl">
                  Browse Top & Trending
                </h3>
                <p className="mt-4 font-normal text-muted-foreground text-xl">
                  Explore popular and seasonal anime.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-b from-card/25 to-background/25 px-0 backdrop-blur-xl transition-all duration-200 hover:from-card/75 hover:to-background/75 md:col-span-full lg:col-span-1">
            <CardHeader className="flex items-center justify-center px-0">
              <BookOpenText className="h-20 w-20 text-center text-primary" />
            </CardHeader>
            <CardContent className="pt-8">
              <div className="text-center">
                <h3 className="font-semibold text-2xl">Detailed Info</h3>
                <p className="mt-4 font-normal text-muted-foreground text-xl">
                  Access synopses, characters, voice actors, and more.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-full bg-gradient-to-b from-card/25 to-background/25 px-0 backdrop-blur-xl transition-all duration-200 hover:from-card/75 hover:to-background/75">
            <CardHeader className="flex items-center justify-center px-0">
              <Rocket className="h-20 w-20 text-center text-primary" />
            </CardHeader>
            <CardContent className="pt-8">
              <div className="text-center">
                <h3 className="font-semibold text-2xl">Fast & Reliable</h3>
                <p className="mt-4 font-normal text-muted-foreground text-xl">
                  Powered by the Jikan API for quick data delivery.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
