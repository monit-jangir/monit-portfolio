import { tool } from "ai";
import { z } from "zod";


export const getSports = tool({
  description:
    "This tool will show some photos of Monit enjoying his hobbies.",
  parameters: z.object({}),
  execute: async () => {
    return "Here are some pictures of me enjoying a bike ride!";
  },
});