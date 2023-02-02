import React, { useState, useContext, createContext } from "react"
const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const value = { isModalOpen, openModal, closeModal }

  return <AppContext.Provider value={value} children={children} />
}

export const useAppContext = () => useContext(AppContext)
export { AppProvider }
