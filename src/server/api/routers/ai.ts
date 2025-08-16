import { createTRPCRouter, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { env } from "@/env";

import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: env.OPEN_ROUTER_API_KEY,
  maxRetries: 5,
});

export const aiRouter = createTRPCRouter({
  test: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(async ({ input }) => {
      try {
        const completion = await openai.chat.completions.create({
          model: "deepseek/deepseek-r1-0528:free",
          messages: [{ role: "user", content: input.text }],
        });

        console.log(completion.choices[0]?.message);

        return completion;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        console.error("❌ Rate limit hit – retry later", err);

        throw new TRPCError({
          code: "TOO_MANY_REQUESTS",
          message: "Rate limited, try again later.",
        });
      }
    }),
});
