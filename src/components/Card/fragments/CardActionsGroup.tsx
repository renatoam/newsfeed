import { ComponentPropsWithoutRef } from "react";

export default function CardActionsGroup({ children }: ComponentPropsWithoutRef<"section">) {
  return (
    <section className="card-actions justify-end">
      {children}
    </section>
  );
}
