import { PropsWithChildren } from "react";
import ModalTrigger from "./fragments/ModalTrigger";

type ModalProps = {
  title: string
  triggerText: string
}

export default function Modal(props: PropsWithChildren<ModalProps>) {
  const { title, triggerText, children } = props
  return (
    <section>
      <ModalTrigger triggerText={triggerText} />
      <dialog id="customModal" className="modal">
        <div className="modal-box prose">
          <h3 className="font-bold text-lg">{title}</h3>
          {children}
        </div>
      </dialog>
    </section>
  )
}
