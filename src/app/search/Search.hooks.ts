import { useContext } from "react"
import { SearchContext } from "./fragments"
import { useQuery } from "@tanstack/react-query"
import { getCategories, getNews, getSources } from "@/core/actions"

export const useSearch = () => useContext(SearchContext)

export function useFavoriteCategory() {
  const isClientEnvironment = typeof window !== undefined && typeof document !== "undefined"
  let selectedCategory = 'football'
  
  if (isClientEnvironment) {
    selectedCategory = localStorage.getItem('selectedCategory') ?? selectedCategory
  }

  return selectedCategory
}

export function useFetchNews(searchTerm: string) {
  return useQuery({
    queryKey: ['search', searchTerm],
    queryFn: async () => await getNews({
      search: { searchTerm }
    }),
    enabled: !!searchTerm,
  })
}

export function useFetchCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => await getCategories()
  })
}

export function useFetchSources() {
  return useQuery({
    queryKey: ['sources'],
    queryFn: async () => await getSources()
  })
}
