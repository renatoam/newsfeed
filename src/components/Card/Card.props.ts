import Image from "next/image"
import { ComponentPropsWithoutRef, MouseEventHandler, PropsWithChildren } from "react"

export type Size = 'default' | 'wide'
export type CardProps = {
  size?: Size
  image?: ComponentPropsWithoutRef<typeof Image>
  title: string
  badge?: string
  description: string
  categories: string[]
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export type CardContextProviderProps = PropsWithChildren<CardProps>
