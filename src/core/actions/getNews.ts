"use server"
import { newsApiService, theGuardianApiService, bbcApiService } from "../services"
import { RequestDTO } from "../services/shared/dto"

export default async function getNews(dto: RequestDTO) {
  const response = await Promise.all([
    newsApiService(dto),
    theGuardianApiService(dto),
    bbcApiService(dto)
  ])

  return response
}
