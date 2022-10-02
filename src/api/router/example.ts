import { z } from 'zod';

import { createRouter } from './context';

export const exampleRouter = createRouter()
  .query('hello', {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve: ({ input }) => ({
      greeting: `Hello ${input?.text ?? 'world'}`,
    }),
  })
  .query('getAll', {
    resolve: async ({ ctx }) => await ctx.prisma.example.findMany(),
  });
