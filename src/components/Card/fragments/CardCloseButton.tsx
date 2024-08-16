import { CloseIcon } from "@/icons";
import { useCard } from "../Card.context";

export default function CardCloseButton() {
  const { onClick } = useCard()

  if (!onClick) return null

  return (
    <button
      type="button"
      className="btn btn-square btn-sm absolute top-2 right-2"
      onClick={onClick}
    >
      <span className="sr-only">close</span>
      <CloseIcon />
    </button>
  );
}
