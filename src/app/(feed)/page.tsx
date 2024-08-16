import { QueryProvider, SkeletonList } from "@/components";
import { FeedDivider, FeedHero, FeedList, FeedTitle, FeedWrapper } from "./fragments";
import { Suspense } from "react";

export default async function Home() {
  return (
    <FeedWrapper>
      <FeedTitle />
      <Suspense fallback={<SkeletonList count={2} />}>
        <FeedHero />
      </Suspense>
      <FeedDivider />
      <QueryProvider>
        <FeedList />
      </QueryProvider>
    </FeedWrapper>
  );
}
