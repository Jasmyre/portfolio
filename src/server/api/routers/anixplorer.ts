import z from "zod";

import { JikanClient } from "@tutkli/jikan-ts";
import { createTRPCRouter, publicProcedure } from "../trpc";

const jikanClient = new JikanClient();

export const anixplorerRouter = createTRPCRouter({
  getAnimeByID: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      try {
        const anime = await jikanClient.anime.getAnimeById(input.id);
        return anime;
      } catch {
        console.error(
          "getAnimeByID public procedure error: Something went wrong!",
        );
      }
    }),

  getTopAnime: publicProcedure.query(async () => {
    try {

    } catch {
      console.error(
        "getTopAnime public procedure error: Something went wrong!",
      );
    }
    return await jikanClient.top.getTopAnime();
  }),
});
