import newsApiGateway from "../newsApi/newsapi.gateway";
import { ServiceResponse, SourcesResponse } from "./dto";

export default async function sourcesApiService(): Promise<ServiceResponse<string[]>> {
  const endpoint = '/top-headlines/sources?language=en'
  
  try {
    const response = await newsApiGateway<SourcesResponse>(endpoint)

    if (response.sources.length === 0) {
      return {
        status: 'skipped',
        data: []
      }
    }

    return {
      status: 'success',
      data: [...response.sources.map(source => source.name), 'BBC', 'The Guardian']
    }
  } catch (err) {
    const error = err as Error
    return {
      status: 'error',
      message: error.message,
    }
  }
}
