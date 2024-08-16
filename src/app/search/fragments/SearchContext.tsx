import { ChangeEvent, createContext, PropsWithChildren, useCallback, useContext, useMemo, useState } from "react";
import { getNews } from "@/core/actions";
import { useQuery } from "@tanstack/react-query";

type SearchContextProps = {
  searchTerm: string,
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void,
  data?: NewsCard[],
  isLoading: boolean,
  isError: boolean
}

export const SearchContext = createContext<SearchContextProps>({
  searchTerm: '',
  isLoading: false,
  isError: false,
  handleSearch: () => undefined,
  data: []
})

export const useSearch = () => useContext(SearchContext)

let timeout: NodeJS.Timeout
const DEBOUNCE_DELAY = 1000

export const SearchContextProvider = ({ children }: PropsWithChildren) => {
  const isClientEnvironment = typeof window !== undefined && typeof document !== "undefined"
  let selectedCategory = 'football'
  
  if (isClientEnvironment) {
    selectedCategory = localStorage.getItem('selectedCategory') ?? selectedCategory
  }
  
  const [searchTerm, setSearchTerm] = useState(selectedCategory)
  const { data, isLoading, isError } = useQuery({
    queryKey: ['search', searchTerm],
    queryFn: async () => await getNews({
      search: { searchTerm }
    }),
    enabled: !!searchTerm,
  })

  const handleSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      const term = event.target.value
      setSearchTerm(term)
    }, DEBOUNCE_DELAY)
  }, [])

  const value = useMemo(() => ({
    searchTerm,
    handleSearch,
    data,
    isLoading,
    isError 
  }), [
    searchTerm,
    handleSearch,
    data,
    isLoading,
    isError 
  ])

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  )
}
