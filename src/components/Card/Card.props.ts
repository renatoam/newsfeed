import { ImageProps } from "next/image"
import { MouseEventHandler, PropsWithChildren } from "react"

export type Size = 'default' | 'wide'
export type CardProps = {
  size?: Size
  image?: ImageProps
  title: string
  badge?: string
  description: string
  categories: string[]
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export type CardContextProviderProps = PropsWithChildren<CardProps>
