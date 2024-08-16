type SkeletonListType = {
  count?: number
}

export default function SkeletonList({ count = 3 }: SkeletonListType) {
  const width = count >= 3 ? 'w-96' : 'w-full'
  const dynamicWidth = count >= 3 ? '384px' : '400px'
  return (
    <section className={`grid grid-cols-[repeat(auto-fill,minmax(min(100%,${dynamicWidth}),1fr))] gap-4 my-8 justify-items-center`}>
      {Array(count).fill('').map((_, index) => (
        <div key={index} className={`flex ${width} flex-col gap-4`}>
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      ))}
    </section>
  );
}
