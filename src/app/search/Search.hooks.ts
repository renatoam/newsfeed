import { useContext, useEffect, useRef } from "react"
import { SearchContext } from "./fragments"
import { useQuery } from "@tanstack/react-query"
import { getCategories, getNews, getSources } from "@/core/actions"
import { FilterDTO, SearchDTO } from "@/core/services/shared/dto"

export const useSearch = () => useContext(SearchContext)

export function useFavoriteCategory() {
  const isClientEnvironment = typeof window !== undefined && typeof document !== "undefined"
  let selectedCategory = 'football'
  
  if (isClientEnvironment) {
    selectedCategory = localStorage.getItem('selectedCategory') ?? selectedCategory
  }

  return selectedCategory
}

export function useFormReset(activeFilter: boolean) {
  const form = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (!activeFilter && form.current) {
      form.current.reset()
    }
  }, [activeFilter])

  return form
}

export function useFetchNews(searchParams: Pick<SearchDTO, "searchTerm"> & FilterDTO) {
  const { searchTerm, ...filter } = searchParams
  return useQuery({
    queryKey: ['search', searchTerm, ...Object.values(filter)],
    queryFn: async () => await getNews({
      search: { searchTerm },
      filter
    }),
    enabled: Object.values(searchParams).some(param => !!param),
    retry: 3
  })
}

export function useFetchCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => await getCategories(),
    retry: 3
  })
}

export function useFetchSources() {
  return useQuery({
    queryKey: ['sources'],
    queryFn: async () => await getSources(),
    retry: 3
  })
}
