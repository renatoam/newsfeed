import { useCard } from "../Card.context";

export default function CardDescription() {
  const { description } = useCard()
  return (
    <p className="break-all line-clamp-3">{description}</p>
  );
}
