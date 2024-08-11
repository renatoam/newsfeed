"use client"

import { useCallback } from "react"
import { ComponentProps } from "react"

type CustomModalProps = ComponentProps<"dialog"> & { showModal: Function }

export default function ModalTrigger() {
  const openModal = useCallback(() => {
    const isClientCodeActive = typeof window !== "undefined" && typeof document !== "undefined"
    if (isClientCodeActive) {
      const modal = document.getElementById('customModal') as unknown as CustomModalProps
      modal.showModal()
    }
  }, [])

  return (
    <button type="button" className="btn" onClick={openModal}>open modal</button>
  )
}
