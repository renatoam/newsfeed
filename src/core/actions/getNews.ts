"use server"

import { newsApiAdapter, theGuardianAdapter, bbcApiAdapter } from "../adapters"
import { applyPagination } from "../application/application.service"
import { newsApiService, theGuardianApiService, bbcApiService } from "../services"
import { RequestDTO } from "../services/shared/dto"

export default async function getNews(dto: RequestDTO) {
  const response = await Promise.all([
    bbcApiService(dto),
    newsApiService(dto),
    theGuardianApiService(dto),
  ])
  
  const newsResults = response[1].status === 'success' ? newsApiAdapter(response[1].data) : []
  const guardianResults = response[2].status === 'success' ? theGuardianAdapter(response[2].data) : []
  const bbcResults = response[0].status === 'success' ? bbcApiAdapter(response[0].data) : []
  
  const results = [
    ...bbcResults,
    ...newsResults,
    ...guardianResults,
  ]
  
  const paginated = applyPagination(results, {
    page: dto.search.page,
    pageSize: dto.search.pageSize
  })
  
  return paginated
}
