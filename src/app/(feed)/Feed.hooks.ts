import { getNews } from "@/core/actions"
import { useQuery } from "@tanstack/react-query"

export function getFavorites() {
  const isClientEnvironment = typeof window !== 'undefined' && typeof document !== 'undefined'
  let selectedCategory = 'football'
  let selectedSource = ''
  
  if (isClientEnvironment) {
    selectedCategory = localStorage.getItem('selectedCategory') ?? selectedCategory
    selectedSource = localStorage.getItem('selectedSource') ?? selectedSource
  }

  return [selectedCategory, selectedSource]
}

export default function useFeed() {
  const [selectedCategory, selectedSource] = getFavorites()
  return useQuery({
    queryKey: ['hero', selectedCategory, selectedSource],
    queryFn: async () => await getNews({
      search: {
        searchTerm: selectedCategory
      },
      filter: {
        source: selectedSource
      }
    }),
    select: (data) => data.slice(0, 2)
  })
}

export function useFeedList() {
  const [selectedCategory, selectedSource] = getFavorites()
  return useQuery({
    queryKey: ['feed', selectedCategory, selectedSource],
    queryFn: async () => await getNews({
      search: {
        searchTerm: selectedCategory
      },
      filter: {
        source: selectedSource
      }
    })
  })
}
