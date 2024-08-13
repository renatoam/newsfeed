export type TheGuardianAPIResponseDTO = {
  status: string
  userTier: string
  total: number
  startIndex: number
  pageSize: number
  currentPage: number
  pages: number
  orderBy: string
  results: Result[]
}

export type Result = {
  id: string
  type: string
  sectionId: string
  sectionName: string
  webPublicationDate: string
  webTitle: string
  webUrl: string
  apiUrl: string
  isHosted: boolean
  pillarId: string
  pillarName: string
}

export type TheGuardianAPIRequestDTO = {
  searchTerm: string
  tag: string
  page: number
  pageSize: number
}

export interface TheGuardianTagAPIResponseDTO {
  response: Response
}

export interface Response {
  status: string
  userTier: string
  total: number
  startIndex: number
  pageSize: number
  currentPage: number
  pages: number
  results: TagResult[]
}

export interface TagResult {
  id: string
  type: string
  webTitle: string
  webUrl: string
  apiUrl: string
  sectionId: string
  sectionName: string
}

