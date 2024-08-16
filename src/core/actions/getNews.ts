"use server"

import { newsApiAdapter, theGuardianAdapter, bbcApiAdapter } from "../adapters"
import { applyPagination } from "../application/application.service"
import { newsApiService, theGuardianApiService, bbcApiService } from "../services"
import { RequestDTO } from "../services/shared/dto"

export default async function getNews(dto: RequestDTO) {
  const response = await Promise.all([
    newsApiService(dto),
    theGuardianApiService(dto),
    bbcApiService(dto)
  ])
  
  const newsResults = response[0].status === 'success' ? newsApiAdapter(response[0].data) : []
  const guardianResults = response[1].status === 'success' ? theGuardianAdapter(response[1].data) : []
  const bbcResults = response[2].status === 'success' ? bbcApiAdapter(response[2].data) : []
  
  const results = [
    ...newsResults,
    ...guardianResults,
    ...bbcResults
  ]

  const paginated = applyPagination(results, {
    page: dto.search.page ?? 1,
    pageSize: dto.search.pageSize ?? 0
  })

  return paginated
}
