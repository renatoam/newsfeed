import { QueryProvider } from "@/components";
import { ComponentPropsWithoutRef } from "react";

export default function FeedWrapper({ children }: ComponentPropsWithoutRef<"main">) {
  return (
    <QueryProvider>
      <main className="container my-8 w-full lg:w-[1280px]">
        {children}
      </main>
    </QueryProvider>
  );
}
