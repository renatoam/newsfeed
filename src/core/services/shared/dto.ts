export type FilterDTO = Partial<{
  source: string,
  author: string,
  category: string,
  date: string,
}>

export type SearchDTO = Partial<{
  searchTerm: string
  page: number
  pageSize: number
}>

export type RequestDTO = {
  search: SearchDTO
  filter: FilterDTO
}

export type ServiceResponse<Data> = {
  status: 'success',
  data: Data
} | {
  status: 'error',
  message: string,
} | {
  status: 'skipped',
  data: []
}

export interface SourcesResponse {
  status: string
  sources: Source[]
}

export interface Source {
  id: string
  name: string
  description: string
  url: string
  category: string
  language: string
  country: string
}

