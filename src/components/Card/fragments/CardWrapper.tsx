import { PropsWithChildren } from "react";
import { Size } from "../Card.props";
import { useCard } from "../Card.context";

export default function CardWrapper({ children }: PropsWithChildren) {
  const { size = 'default' } = useCard()
  const sizes: Record<Size, string> = {
    default: 'w-auto',
    wide: 'w-full lg:max-w-[50%]'
  }
  return (
    <section className={`card bg-base-100 shadow-xl ${sizes[size]}`}>
      {children}
    </section>
  );
}
