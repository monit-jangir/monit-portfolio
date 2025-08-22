import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Monit Kumar Jangir. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Monit Kumar Jangir, a developer passionate about data science, AI, and machine learning. I love tackling new challenges, learning, and building innovative solutions. Beyond tech, I enjoy going on bike rides and playing badminton!",
    };
  },
});