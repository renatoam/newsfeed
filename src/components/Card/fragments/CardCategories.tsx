import { useCard } from "../Card.context";

export default function CardCategories() {
  const { categories = [] } = useCard()
  return (
    <>
      {categories.map(category => (
        <div key={category} className="badge badge-outline">{category}</div>
      ))}
    </>
  );
}
