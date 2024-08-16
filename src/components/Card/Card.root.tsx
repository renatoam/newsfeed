"use client"

import { CardContextProvider } from "./Card.context";
import { CardProps } from "./Card.props";
import {
  CardActionsGroup,
  CardBody,
  CardCategories,
  CardCloseButton,
  CardDescription,
  CardImage,
  CardTitle,
  CardWrapper
} from "./fragments";

export default function Card(props: CardProps) {
  return (
    <CardContextProvider {...props}>
      <CardWrapper>
        <CardImage />
        <CardBody>
          <CardTitle />
          <CardDescription />
          <CardActionsGroup>
            <CardCategories />
            <CardCloseButton />
          </CardActionsGroup>
        </CardBody>
      </CardWrapper>
    </CardContextProvider>
  )
}
