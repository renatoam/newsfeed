
type SkeletonListType = {
  count?: number
}

export default function SkeletonList({ count = 3 }: SkeletonListType) {
  const width = count >= 3 ? 'w-96' : 'w-full'
  const behavior = count >= 3 ? 'grid grid-cols-[repeat(auto-fill,minmax(min(100%,384px),1fr))] gap-4 my-8 justify-items-center' : 'flex flex-wrap gap-4 md:flex-nowrap'
  return (
    <section className={behavior}>
      {Array(count).fill(2).map((number, index) => (
        <div key={index * number} className={`flex ${width} flex-col gap-4`}>
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      ))}
    </section>
  );
}
