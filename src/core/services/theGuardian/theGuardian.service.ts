import { RequestDTO, ServiceResponse } from "../shared/dto";
import { TheGuardianAPIResponseDTO } from "./theguardian.dto";
import theGuardianApiGateway from "./theguardian.gateway";
import { makeFilters } from "./theGuardian.utils";

export default async function theGuardianApiService(
  dto: RequestDTO
): Promise<ServiceResponse<TheGuardianAPIResponseDTO>> {
  const { source, author } = dto.filter
  const sourceIsNotTheGuardian = source && !source.includes('guardian')
  const filters = makeFilters(dto)
  const endpoint = `/search?${filters}`

  if (!dto.search.searchTerm) {
    return {
      status: 'error',
      message: 'Search term is required.'
    }
  }

  if (author || sourceIsNotTheGuardian) {
    return {
      status: 'skipped',
      data: []
    }
  }

  try {
    const response = await theGuardianApiGateway<TheGuardianAPIResponseDTO>(endpoint)
    
    if (response.results.length === 0) {
      return {
        status: 'skipped',
        data: []
      }
    }

    return {
      status: 'success',
      data: response
    }
  } catch (err) {
    const error = err as Error
    return {
      status: 'error',
      message: error.message,
    }
  }
}
