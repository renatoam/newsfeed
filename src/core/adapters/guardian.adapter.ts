import { TheGuardianAPIResponseDTO } from "../services/theGuardian/theguardian.dto";

export default function theGuardianAdapter(articles: TheGuardianAPIResponseDTO): NewsCard[] {
  return articles?.results?.map(article => ({
    description: `Read more on: ${article.webUrl}`,
    image: '/theguardian.png',
    title: article.webTitle,
    author: 'The Guardian Editorial',
    category: article.sectionName,
    date: article.webPublicationDate,
    source: 'The Guardian'
  }))
}
