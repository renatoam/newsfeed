"use client"

import { ComponentProps, useCallback } from "react"

type CustomModalProps = ComponentProps<"dialog"> & {
  showModal: Function
}

type ModalTriggerProps = {
  triggerText: string
}

export default function ModalTrigger({ triggerText }: ModalTriggerProps) {
  const openModal = useCallback(() => {
    const isClientCodeActive = typeof window !== "undefined" && typeof document !== "undefined"
    if (isClientCodeActive) {
      const modal = document.getElementById('customModal') as unknown as CustomModalProps
      modal.showModal()
    }
  }, [])

  return (
    <button type="button" className="btn" onClick={openModal}>{triggerText}</button>
  )
}
