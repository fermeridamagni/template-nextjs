import { z } from "zod";

const env = z.object({
  // Here, define the environment variables
});

env.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof env> {}
  }
}
