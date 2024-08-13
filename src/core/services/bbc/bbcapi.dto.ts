export type BBCApiResponseDTO = {
  status: number
  Latest: News[]
  "Only from the BBC": News[]
  "Paris 2024": News[]
  "Must watch": News[]
  Earth: News[]
  Travel: News[]
  News: News[]
  Sport: News[]
  Business: News[]
  Innovation: News[]
  Video: News[]
  Culture: News[]
  "World of Wonder": News[]
  "Latest on the US election": News[]
  "Latest on the Israel-Gaza war": News[]
  "Latest on the Ukraine war": News[]
  "BBC InDepth": News[]
  "elapsed time": string
  timestamp: number
}

export interface News {
  title: string
  summary: string
  image_link?: string
  news_link: string
}
