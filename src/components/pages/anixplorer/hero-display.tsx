export interface Root {
  result: Result;
}

export interface Result {
  data: Data;
}

export interface Data {
  json: Json;
}

export interface Json {
  pagination: Pagination;
  data: Daum[];
}

export interface Pagination {
  last_visible_page: number | null;
  has_next_page: boolean | null;
  current_page: number | null;
  items: Items;
}

export interface Items {
  count: number | null;
  total: number | null;
  per_page: number | null;
}

export interface Daum {
  mal_id: number | null;
  url: string | null;
  images: Images;
  trailer: Trailer;
  approved: boolean | null;
  titles: Title[];
  title: string | null;
  title_english?: string | null;
  title_japanese: string | null;
  title_synonyms: string[] | null;
  type: string | null;
  source: string | null;
  episodes: number | null;
  status: string | null;
  airing: boolean | null;
  aired: Aired;
  duration: string | null;
  rating: string | null;
  score: number | null;
  scored_by: number | null;
  rank: number | null;
  popularity: number | null;
  members: number | null;
  favorites: number | null;
  synopsis: string | null;
  background: string | null;
  season?: string | null;
  year?: number | null;
  broadcast: Broadcast;
  producers: Producer[];
  licensors: Licensor[];
  studios: Studio[];
  genres: Genre[];
  explicit_genres: unknown[] | null;
  themes: Theme[];
  demographics: Demographic[];
}

export interface Images {
  jpg: Jpg;
  webp: Webp;
}

export interface Jpg {
  image_url: string | null;
  small_image_url: string | null;
  large_image_url: string | null;
}

export interface Webp {
  image_url: string | null;
  small_image_url: string | null;
  large_image_url: string | null;
}

export interface Trailer {
  youtube_id?: string | null;
  url?: string | null;
  embed_url?: string | null;
  images: Images2;
}

export interface Images2 {
  image_url?: string | null;
  small_image_url?: string | null;
  medium_image_url?: string | null;
  large_image_url?: string | null;
  maximum_image_url?: string | null;
}

export interface Title {
  type: string | null;
  title: string | null;
}

export interface Aired {
  from: string | null;
  to?: string | null;
  prop: Prop;
  string: string | null;
}

export interface Prop {
  from: From;
  to: To;
}

export interface From {
  day: number | null;
  month: number | null;
  year: number | null;
}

export interface To {
  day?: number | null;
  month?: number | null;
  year?: number | null;
}

export interface Broadcast {
  day?: string | null;
  time?: string | null;
  timezone?: string | null;
  string?: string | null;
}

export interface Producer {
  mal_id: number | null;
  type: string | null;
  name: string | null;
  url: string | null;
}

export interface Licensor {
  mal_id: number | null;
  type: string | null;
  name: string | null;
  url: string | null;
}

export interface Studio {
  mal_id: number | null;
  type: string | null;
  name: string | null;
  url: string | null;
}

export interface Genre {
  mal_id: number | null;
  type: string | null;
  name: string | null;
  url: string | null;
}

export interface Theme {
  mal_id: number | null;
  type: string | null;
  name: string | null;
  url: string | null;
}

export interface Demographic {
  mal_id: number | null;
  type: string | null;
  name: string | null;
  url: string | null;
}

import { Badge } from "@/components/ui/badge";
import topAnime from "@/lib/tmp.json";
import Image from "next/image";

const data: Root = topAnime;

export const HeroDisplay = async () => {
  //   const anime = await api.anixplorer.getTopAnime({ page: 1, limit: 6 });
  const anime = data.result.data.json;

  return (
    <div className="space-y-4">
      <div className="relative overflow-visible">
        <div className="flex w-fit flex-col space-y-4 lg:absolute lg:top-1/2 lg:-translate-y-1/2">
          <div className="flex gap-4">
            {anime.data.slice(0, 4).map((item, _index) => {
              return AnimeRow({ item: item, _index: _index });
            })}
          </div>
          <div className="flex gap-4">
            {anime.data.slice(4, 8).map((item, _index) => {
              return AnimeRow({ item: item, _index: _index });
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

function AnimeRow({ item, _index }: { item: Daum; _index: number }) {
  return (
    <div
      key={_index}
      className="bg-secondary group border-accent relative min-w-[250px] flex-shrink-0 basis-1/10 cursor-pointer overflow-hidden rounded-md transition-all"
    >
      <Image
        width={225}
        height={225}
        src={item.images.webp.large_image_url ?? "/ictquest-banner.png"}
        alt={item.title_english ?? "Unknown Anime"}
        className="aspect-4/5 w-full rounded object-cover object-center transition-all group-hover:scale-110"
      />
      <span className="absolute top-0 left-0 z-10 h-full w-full bg-gradient-to-b from-transparent to-black/70 to-90% dark:from-black/20 dark:to-black" />
      <div className="absolute bottom-2 z-20 flex h-full w-full flex-row items-end justify-start px-2 py-2">
        <Badge className="dark:text-secondary-foreground bg-primary absolute top-4 right-2 border font-bold text-white shadow">
          {item.type}
        </Badge>
        <p className="dark:text-muted-foreground group-hover:dark:text-foreground line-clamp-1 font-semibold text-gray-300 group-hover:text-white">
          {item.title_english ?? item.title ?? "Unknown Anime"}
        </p>
      </div>
    </div>
  );
}
