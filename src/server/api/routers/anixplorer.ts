import z from "zod";

import { JikanClient } from "@tutkli/jikan-ts";
import { createTRPCRouter, publicProcedure } from "../trpc";

const jikanClient = new JikanClient();

export const anixplorerRouter = createTRPCRouter({
  getAnimeByID: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const anime = await jikanClient.anime.getAnimeById(input.id);

      return anime;
    }),
});
