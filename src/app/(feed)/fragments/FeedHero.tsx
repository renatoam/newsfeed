import { Card } from "@/components";
import { getNews } from "@/core/actions";

export default async function FeedHero() {
  const response = await getNews({ search: { searchTerm: 'football', page: 1, pageSize: 2 } })
  return (
    <section className="flex flex-wrap lg:flex-nowrap gap-4">
      <Card
        categories={[response[0].category ?? '']}
        description={response[0].description}
        image={{
          src: response[0].image,
          alt: response[0].title,
          width: 400,
          height: 400
        }}
        title={response[0].title}
        badge="Breaking"
        size="wide"
      />
      <Card
        categories={[response[1].category ?? '']}
        description={response[1].description}
        image={{
          src: response[1].image,
          alt: response[1].title,
          width: 400,
          height: 400
        }}
        title={response[1].title}
        badge="Breaking"
        size="wide"
      />
    </section>
  );
}
