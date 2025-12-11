export type Root = {
  result: Result;
};

export type Result = {
  data: Data;
};

export type Data = {
  json: Json;
};

export type Json = {
  pagination: Pagination;
  data: Daum[];
};

export type Pagination = {
  last_visible_page: number | null;
  has_next_page: boolean | null;
  current_page: number | null;
  items: Items;
};

export type Items = {
  count: number | null;
  total: number | null;
  per_page: number | null;
};

export type Daum = {
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
};

export type Images = {
  jpg: Jpg;
  webp: Webp;
};

export type Jpg = {
  image_url: string | null;
  small_image_url: string | null;
  large_image_url: string | null;
};

export type Webp = {
  image_url: string | null;
  small_image_url: string | null;
  large_image_url: string | null;
};

export type Trailer = {
  youtube_id?: string | null;
  url?: string | null;
  embed_url?: string | null;
  images: Images2;
};

export type Images2 = {
  image_url?: string | null;
  small_image_url?: string | null;
  medium_image_url?: string | null;
  large_image_url?: string | null;
  maximum_image_url?: string | null;
};

export type Title = {
  type: string | null;
  title: string | null;
};

export type Aired = {
  from: string | null;
  to?: string | null;
  prop: Prop;
  string: string | null;
};

export type Prop = {
  from: From;
  to: To;
};

export type From = {
  day: number | null;
  month: number | null;
  year: number | null;
};

export type To = {
  day?: number | null;
  month?: number | null;
  year?: number | null;
};

export type Broadcast = {
  day?: string | null;
  time?: string | null;
  timezone?: string | null;
  string?: string | null;
};

export type Producer = {
  mal_id: number | null;
  type: string | null;
  name: string | null;
  url: string | null;
};

export type Licensor = {
  mal_id: number | null;
  type: string | null;
  name: string | null;
  url: string | null;
};

export type Studio = {
  mal_id: number | null;
  type: string | null;
  name: string | null;
  url: string | null;
};

export type Genre = {
  mal_id: number | null;
  type: string | null;
  name: string | null;
  url: string | null;
};

export type Theme = {
  mal_id: number | null;
  type: string | null;
  name: string | null;
  url: string | null;
};

export type Demographic = {
  mal_id: number | null;
  type: string | null;
  name: string | null;
  url: string | null;
};

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import topAnime from "@/lib/tmp.json";

const data: Root = topAnime;

export const HeroDisplay = () => {
  //   const anime = await api.anixplorer.getTopAnime({ page: 1, limit: 6 });
  const anime = data.result.data.json;

  return (
    <div className="space-y-4">
      <div className="relative overflow-visible">
        <div className="lg:-translate-y-1/2 flex w-fit flex-col space-y-4 lg:absolute lg:top-1/2">
          <div className="flex gap-4">
            {anime.data
              .slice(0, 4)
              .map((item, _index) => AnimeRow({ item, _index }))}
          </div>
          <div className="flex gap-4">
            {anime.data
              .slice(4, 8)
              .map((item, _index) => AnimeRow({ item, _index }))}
          </div>
        </div>
      </div>
    </div>
  );
};

function AnimeRow({ item, _index }: { item: Daum; _index: number }) {
  return (
    <div
      className="group relative min-w-[250px] shrink-0 basis-1/10 cursor-pointer overflow-hidden rounded-md border-accent bg-secondary transition-all"
      key={_index}
    >
      <Image
        alt={item.title_english ?? "Unknown Anime"}
        className="aspect-4/5 w-full rounded object-cover object-center transition-all group-hover:scale-110"
        height={225}
        src={item.images.webp.large_image_url ?? "/ictquest-banner.png"}
        width={225}
      />
      <span className="absolute top-0 left-0 z-10 h-full w-full bg-linear-to-b from-transparent to-90% to-black/70 dark:from-black/20 dark:to-black" />
      <div className="absolute bottom-2 z-20 flex h-full w-full flex-row items-end justify-start px-2 py-2">
        <Badge className="absolute top-4 right-2 border bg-primary font-bold text-white shadow dark:text-secondary-foreground">
          {item.type}
        </Badge>
        <p className="line-clamp-1 font-semibold text-gray-300 group-hover:text-white dark:text-muted-foreground group-hover:dark:text-foreground">
          {item.title_english ?? item.title ?? "Unknown Anime"}
        </p>
      </div>
    </div>
  );
}
