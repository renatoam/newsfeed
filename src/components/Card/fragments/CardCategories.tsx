import { useCard } from "../Card.context";

export default function CardCategories() {
  const { categories = [] } = useCard()
  return (
    <>
      {categories.map(category => (
        <div key={category} className="tooltip" data-tip={category}>
          <div className="badge badge-outline line-clamp-1">{category}</div>
        </div>
      ))}
    </>
  );
}
