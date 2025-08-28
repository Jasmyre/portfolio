import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { BookOpenText, Globe, Rocket, Search } from "lucide-react";

export const FeatureSection = () => {
  return (
    <section className="relative w-full overflow-hidden" id="feature">
      <div className="relative mx-auto min-h-screen max-w-7xl items-center justify-center gap-16 space-y-16 px-6 py-16 md:py-32 lg:min-h-screen lg:flex-row">
        <div>
          <h1 className="text-center text-3xl font-semibold">
            Why use AniXplorer?
          </h1>
          <p className="text-muted-foreground mt-4 text-center text-xl text-pretty">
            AniXplorer is designed for anime fans and researchers who want
            quick, reliable access to anime data.
          </p>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-8">
          {/* <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 hidden h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] md:h-[1000px] md:w-[1000px] lg:block"></div> */}
          <Card className="from-card/25 duration-200 hover:from-card/75 hover:to-background/75 transition-all to-background/25 bg-gradient-to-b px-0 backdrop-blur-xl">
            <CardHeader className="flex items-center justify-center px-0">
              <Search className="text-primary h-20 w-20 text-center" />
            </CardHeader>
            <CardContent className="pt-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold">Search Instantly</h3>
                <p className="text-muted-foreground mt-4 text-xl font-normal">
                  Find titles by name, genre, or season.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="from-card/25 duration-200 hover:from-card/75 hover:to-background/75 transition-all to-background/25 bg-gradient-to-b px-0 backdrop-blur-xl">
            <CardHeader className="flex items-center justify-center px-0">
              <Globe className="text-primary h-20 w-20 text-center" />
            </CardHeader>
            <CardContent className="pt-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold">
                  Browse Top & Trending
                </h3>
                <p className="text-muted-foreground mt-4 text-xl font-normal">
                  Explore popular and seasonal anime.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="from-card/25 md:col-span-full lg:col-span-1 duration-200 hover:from-card/75 hover:to-background/75 transition-all to-background/25 bg-gradient-to-b px-0 backdrop-blur-xl">
            <CardHeader className="flex items-center justify-center px-0">
              <BookOpenText className="text-primary h-20 w-20 text-center" />
            </CardHeader>
            <CardContent className="pt-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold">Detailed Info</h3>
                <p className="text-muted-foreground mt-4 text-xl font-normal">
                  Access synopses, characters, voice actors, and more.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="from-card/25 duration-200 hover:from-card/75 hover:to-background/75 transition-all to-background/25 col-span-full bg-gradient-to-b px-0 backdrop-blur-xl">
            <CardHeader className="flex items-center justify-center px-0">
              <Rocket className="text-primary h-20 w-20 text-center" />
            </CardHeader>
            <CardContent className="pt-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold">Fast & Reliable</h3>
                <p className="text-muted-foreground mt-4 text-xl font-normal">
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
