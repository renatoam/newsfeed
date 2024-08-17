import { FilterDTO, RequestDTO } from "../shared/dto"

export function makeFilters(dto: RequestDTO) {
  const { category, date, author } = dto.filter as FilterDTO
  const { searchTerm, page, pageSize } = dto.search
  const today = new Date().toISOString().split('T')[0]

  const filters = [
    `q=${searchTerm ?? category ?? author}`,
    '&lang=en',
    category ? `&tag=${category}` : '',
    page ? `&page=${page}` : '',
    pageSize ? `&page-size=${pageSize}` : '',
    date ? `&from-date=${date}&to-date=${today}` : '',
    '&query-fields=headline,body'
  ].join('')

  return filters
}
