import { z } from "zod";

const variables = z.object({
  NEWSAPI_APIKEY: z.string(),
  THEGUARDIAN_APIKEY: z.string(),
  BBC_RAPIDAPI_APIKEY: z.string(),
  NEWSAPI_HOST: z.string(),
  THEGUARDIAN_HOST: z.string(),
  BBC_RAPIDAPI_HOST: z.string(),
})

variables.parse(process.env)

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof variables> {}
  }
}
