import { ChangeEvent, createContext, PropsWithChildren, useCallback, useContext, useMemo, useState } from "react";
import { getNews } from "@/core/actions";
import { useQuery } from "@tanstack/react-query";
import { useFavoriteCategory, useFetchCategories, useFetchNews, useFetchSources } from "../Search.hooks";

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

let timeout: NodeJS.Timeout
const DEBOUNCE_DELAY = 1000

export const SearchContextProvider = ({ children }: PropsWithChildren) => {
  const favoriteCategory = useFavoriteCategory()
  const [searchTerm, setSearchTerm] = useState(favoriteCategory)
  const { data, isLoading, isError } = useFetchNews(searchTerm)

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
