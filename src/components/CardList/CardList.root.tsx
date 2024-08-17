import Card from "../Card/Card.root";
import NoResults from "../NoResults/NoResults.root";
import ResultError from "../ResultError/ResultError.root";
import SkeletonList from "../SkeletonList/SkeletonList.root";

type CardListProps = {
  data?: NewsCard[]
  isError: boolean
  isLoading: boolean
}

export default function CardList(props: CardListProps) {
  const { isLoading, isError, data } = props

  if (isLoading) return <SkeletonList />
  if (!data || data.length === 0) return <NoResults />
  if (isError) return <ResultError />
  
  return (
    <>
      {data.slice(2).map((article, index) => (
        <Card
          key={`${article.title}_${index}`}
          categories={[article.category ?? '']}
          description={article.description}
          // image={{
          //   src: article.image,
          //   alt: article.title,
          //   width: 300,
          //   height: 300
          // }}
          title={article.title}
        />
      ))}
    </>
  );
}
