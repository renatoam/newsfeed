import { memo } from "react";
import { useCard } from "../Card.context";

function CardTitle() {
  const { title, badge } = useCard()
  return (
    <h2 className="card-title">
      {title}
      {badge && <div className="badge badge-secondary">{badge}</div>}
    </h2>
  );
}

export default memo(CardTitle)
