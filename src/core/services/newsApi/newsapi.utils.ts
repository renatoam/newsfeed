import { FilterDTO, RequestDTO } from "../shared/dto"
import { NewsAPIResponseDTO } from "./newsapi.dto"

export function makeFilters(dto: RequestDTO): string {
  const {
    searchTerm,
    page,
    pageSize,
  } = dto.search

  const {
    source = '',
    date = ''
  } = dto.filter = {} as FilterDTO
  
  const today = new Date().toISOString().split('T')[0]
  
  const filters = [
    `q=${searchTerm}`,
    page ? `&page=${page}` : '',
    pageSize ? `&pageSize=${pageSize}` : '',
    date ? `&from=${date}&to=${today}` : '',
    source ? `&sources=${source}` : '',
    '&searchIn=title',
    '&language=en',
  ]

  return filters.join('')
}

export function filterByAuthor(data: NewsAPIResponseDTO, author?: string) {
  if (!author) return data.articles
  return data.articles.filter(article => article.author === author)
}
