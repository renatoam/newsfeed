import { QueryProvider } from "@/components";
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
      <QueryProvider>
        <FeedList />
      </QueryProvider>
    </FeedWrapper>
  );
}
