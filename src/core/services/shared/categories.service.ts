import { BBCApiResponseDTO } from "../bbc/bbcapi.dto"
import bbcApiGateway from "../bbc/bbcapi.gateway"
import { TheGuardianTagAPIResponseDTO } from "../theGuardian/theguardian.dto"
import theGuardianApiGateway from "../theGuardian/theguardian.gateway"
import { extractCategories } from "./categories.utils"
import { ServiceResponse } from "./dto"

export default async function categoriesApiService(): Promise<ServiceResponse<string[]>> {
  const bbcGatewayEndpoint = '/news?lang=english'
  const theGuardianGatewayEndpoint = '/tags'

  try {
    const bbcResults = await bbcApiGateway<BBCApiResponseDTO>(bbcGatewayEndpoint)
    const guardianResults = await theGuardianApiGateway<TheGuardianTagAPIResponseDTO>(theGuardianGatewayEndpoint)
    const categories = extractCategories(bbcResults, guardianResults)
    
    if (categories.length === 0) {
      return {
        status: 'skipped',
        data: []
      }
    }

    return {
      status: 'success',
      data: categories
    }
  } catch (err) {
    const error = err as Error
    return {
      status: 'error',
      message: error.message,
    }
  }
}
