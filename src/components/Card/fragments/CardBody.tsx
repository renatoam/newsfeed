import { ComponentPropsWithoutRef } from "react";

export default function CardBody({ children }: ComponentPropsWithoutRef<"section">) {
  return (
    <section className="card-body">
      {children}
    </section>
  );
}
