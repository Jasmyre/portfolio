import { TRPCError } from "@trpc/server";
import { JikanClient } from "@tutkli/jikan-ts";
import z from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  publicRateLimitedProcedure,
} from "@/server/api/trpc";

const jikanClient = new JikanClient();

const defaultPage = 1;
const defaultLimit = 10;

export const anixplorerRouter = createTRPCRouter({
  getRateLimitedAnimeByID: publicRateLimitedProcedure
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

  getRateLimitedTopAnime: publicRateLimitedProcedure
    .input(
      z
        .object({
          page: z.number().min(1).default(defaultPage),
          limit: z.number().min(1).max(25).default(defaultLimit),
        })
        .optional()
    )
    .query(async ({ input }) => {
      try {
        const { page, limit } = input ?? {};
        const data = await jikanClient.top.getTopAnime({
          page: page ?? defaultPage,
          limit: limit ?? defaultLimit,
        });

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

  getTopAnime: publicProcedure
    .input(
      z
        .object({
          page: z.number().min(1).default(defaultPage),
          limit: z.number().min(1).max(25).default(defaultLimit),
        })
        .optional()
    )
    .query(async ({ input }) => {
      try {
        const { page, limit } = input ?? {};
        const data = await jikanClient.top.getTopAnime({
          page: page ?? defaultPage,
          limit: limit ?? defaultLimit,
        });

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
