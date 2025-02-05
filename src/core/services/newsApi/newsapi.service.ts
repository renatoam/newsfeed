import { RequestDTO, ServiceResponse } from "../shared/dto";
import { NewsAPIResponseDTO } from "./newsapi.dto";
import newsApiGateway from "./newsapi.gateway";
import { filterByAuthor, makeFilters } from "./newsapi.utils";

export default async function newsApiService(
  dto: RequestDTO
): Promise<ServiceResponse<NewsAPIResponseDTO['articles']>> {
  const filters = makeFilters(dto)
  const endpoint = `/everything?${filters}`
  
  try {
    const response = await newsApiGateway<NewsAPIResponseDTO>(endpoint)
    const filtered = filterByAuthor(response, dto.filter?.author)

    if (filtered.length === 0) {
      return {
        status: 'skipped',
        data: []
      }
    }

    return {
      status: 'success',
      data: filtered
    }
  } catch (err) {
    const error = err as Error
    return {
      status: 'error',
      message: error.message,
    }
  }
}
