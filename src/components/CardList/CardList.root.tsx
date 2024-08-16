import Card from "../Card/Card.root";

export default function CardList(props: { data: NewsCard[] }) {
  return (
    <>
      {props.data.slice(2).map((article, index) => (
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
