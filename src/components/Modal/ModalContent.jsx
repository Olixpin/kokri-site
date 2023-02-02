import React from "react"

const ModalContent = ({ onClose }) => {
  return (
    <div
      style={{
        background: "white",
        border: "1px solid #ccc",
      }}
    >
      <p>I am a modal dialogue</p>
      <button onClick={onClose}>Close</button>
    </div>
  )
}

export default ModalContent
