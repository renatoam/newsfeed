import { applyPagination, Pagination } from "@/core/application/application.service";
import { FilterDTO, RequestDTO, ServiceResponse } from "../shared/dto";
import { BBCApiResponseDTO, News } from "./bbcapi.dto";
import bbcApiGateway from "./bbcapi.gateway";
import { filterByCategory, filterByTerm } from "./bbcapi.utils";

export default async function bbcApiService(dto: RequestDTO): Promise<ServiceResponse<News[]>> {
  const { category, source, ...rest } = dto.filter as FilterDTO
  const { searchTerm, ...pagination } = dto.search
  const endpoint = '/news?lang=english'
  const sourceIsNotBBC = source && !source.toLowerCase().includes('bbc')

  if (Object.values(rest).some(v => !!v) || sourceIsNotBBC) {
    return {
      status: 'skipped',
      data: []
    }
  }
  
  try {
    const response = await bbcApiGateway<BBCApiResponseDTO>(endpoint)
    const filteredByCategory = filterByCategory(response, category)
    const filteredByTerm = filterByTerm(filteredByCategory, searchTerm)
    const paginated = applyPagination<News>(filteredByTerm, pagination as Pagination)
    
    return {
      status: 'success',
      data: paginated
    }
  } catch (err) {
    const error = err as Error
    return {
      status: 'error',
      message: error.message,
    }
  }
}
