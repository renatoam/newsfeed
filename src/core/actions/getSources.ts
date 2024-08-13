"use server"

import { sourcesApiService } from "../services"

export default async function getSources() {
  const sources = await sourcesApiService()
  return sources
}
