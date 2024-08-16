import Image from "next/image";
import { useCard } from "../Card.context";
import { memo } from "react";

function CardImage() {
  const { image } = useCard()
  if (!image) return null
  return (
    <figure>
      <Image {...image} alt={image.alt} />
    </figure>
  );
}

export default memo(CardImage)
