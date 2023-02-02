import React from "react"
import { createPortal } from "react-dom"
import { useAppContext } from "../../context/context"
import "./Modal.css"

const Backdrop = ({ className }) => {
  const { closeModal } = useAppContext()
  return <div className={`${className} backdrop`} onClick={closeModal} />
}

const ModalOverlay = (props) => {
  return (
    <div className={`modal-overlay ${props.className ? props.className : ""}`}>
      <div>{props.children}</div>
    </div>
  )
}

const portalElement = document.getElementById("overlays")

const Modal = (props) => {
  return (
    <>
      {createPortal(<Backdrop className={props.className} />, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  )
}

export default Modal
