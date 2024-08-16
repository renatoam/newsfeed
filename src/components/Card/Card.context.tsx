import { createContext, useContext, useMemo } from "react";
import { CardContextProviderProps, CardProps } from "./Card.props";

export const CardContext = createContext<CardProps>({
  image: {
    alt: "",
    src: ""
  },
  title: "",
  description: "",
  categories: [],
})

export const useCard = () => useContext(CardContext)

export function CardContextProvider(props: CardContextProviderProps) {
  const value = useMemo(() => ({ ...props }), [props])

  return (
    <CardContext.Provider value={value}>
      {value.children}
    </CardContext.Provider>
  )
}
