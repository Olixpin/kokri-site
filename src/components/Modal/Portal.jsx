import React, { useState } from "react"
import { createPortal } from "react-dom"
import ModalContent from "./ModalContent"

const Portal = ({}) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div>
      <button onClick={() => setShowModal(true)}>
        Show modal using portal
      </button>
      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.body
        )}
    </div>
  )
}

export default Portal
