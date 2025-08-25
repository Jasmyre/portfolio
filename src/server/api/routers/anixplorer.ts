import z from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { JikanClient } from "@tutkli/jikan-ts";
import { TRPCError } from "@trpc/server";

const jikanClient = new JikanClient();

export const anixplorerRouter = createTRPCRouter({
  getAnimeByID: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      try {
        const data = await jikanClient.anime.getAnimeById(input.id);
        return data;
      } catch (error) {
        console.error("getAnimeByID public procedure error:", error);
        
        if (error instanceof Error && error.message.includes("429")) {
          throw new TRPCError({
            code: "TOO_MANY_REQUESTS",
            message: "Jikan API rate limit exceeded. Please try again later.",
          });
        }

        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to fetch anime details",
        });
      }
    }),

  getTopAnime: publicProcedure
    .input(
      z.object({
        page: z.number().min(1).default(1),
        limit: z.number().min(1).max(25).default(10),
      }),
    )
    .query(async ({ input }) => {
      try {
        const { page, limit } = input;
        const data = await jikanClient.top.getTopAnime({ page, limit });

        return data;
      } catch (error) {
        console.error("getTopAnime public procedure error: ", error);

        if (error instanceof Error && error.message.includes("429")) {
          throw new TRPCError({
            code: "TOO_MANY_REQUESTS",
            message: "Jikan API rate limit exceeded. Please try again later.",
          });
        }

        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to fetch top anime list",
        });
      }
    }),
});
