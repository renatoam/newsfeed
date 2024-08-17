import {
  FeedDivider,
  FeedHero,
  FeedList,
  FeedTitle,
  FeedWrapper
} from "./fragments";

export default async function Home() {
  return (
    <FeedWrapper>
      <FeedTitle />
      <FeedHero />
      <FeedDivider />
      <FeedList />
    </FeedWrapper>
  );
}
