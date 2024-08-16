"use client"

import { queryClient } from "@/core/configs/reactQuery";
import { QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

export default function QueryProvider({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
