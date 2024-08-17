import { ChangeEvent, ChangeEventHandler, createContext, PropsWithChildren, useCallback, useMemo, useState } from "react";
import { useFavoriteCategory, useFetchNews } from "../Search.hooks";

type SearchContextProps = {
  searchTerm: string,
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void,
  data?: NewsCard[],
  isLoading: boolean,
  isError: boolean
  activeFilter: boolean
  setCategoryFilter: (item: string) => void
  setSourceFilter: (item: string) => void
  setDateFilter: (item: string) => void
}

export const SearchContext = createContext<SearchContextProps>({
  searchTerm: '',
  isLoading: false,
  isError: false,
  handleSearch: () => undefined,
  data: [],
  setCategoryFilter: () => {},
  setSourceFilter: () => {},
  setDateFilter: () => {},
  activeFilter: false
})

let timeout: NodeJS.Timeout
const DEBOUNCE_DELAY = 1000

export const SearchContextProvider = ({ children }: PropsWithChildren) => {
  const favoriteCategory = useFavoriteCategory()
  
  const [searchTerm, setSearchTerm] = useState(favoriteCategory)
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedSource, setSelectedSource] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [activeFilter, setActiveFilter] = useState(false)

  const { data, isLoading, isError } = useFetchNews({
    searchTerm,
    author: '',
    category: selectedCategory,
    date: selectedDate,
    source: selectedSource
  })

  const resetFilters = useCallback(() => {
    setActiveFilter(false)
    setSelectedCategory('')
    setSelectedSource('')
    setSelectedDate('')
  }, [])

  const setCategoryFilter = useCallback((category: string) => {
    setSelectedCategory(category)
    setActiveFilter(true)
  }, [])
  
  const setSourceFilter = useCallback((source: string) => {
    setSelectedSource(source)
    setActiveFilter(true)
  }, [])
  
  const setDateFilter = useCallback((date: string) => {
    setSelectedDate(date)
    setActiveFilter(true)
  }, [])

  const handleSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      const term = event.target.value
      setSearchTerm(term)
      resetFilters()
    }, DEBOUNCE_DELAY)
  }, [])

  const value = useMemo(() => ({
    searchTerm,
    handleSearch,
    data,
    isLoading,
    isError,
    activeFilter,
    setCategoryFilter,
    setSourceFilter,
    setDateFilter
  }), [
    searchTerm,
    handleSearch,
    data,
    isLoading,
    isError,
    activeFilter,
    setCategoryFilter,
    setSourceFilter,
    setDateFilter
  ])

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  )
}
