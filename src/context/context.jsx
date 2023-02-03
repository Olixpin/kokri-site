import React, { useState, useContext, createContext } from "react"
const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const [openMenu, setOpenMenu] = useState(false)
  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  const closeMenu = () => {
    setOpenMenu(false)
  }

  const value = {
    isModalOpen,
    openModal,
    closeModal,
    toggleMenu,
    openMenu,
    setOpenMenu,
    closeMenu,
  }

  return <AppContext.Provider value={value} children={children} />
}

export const useAppContext = () => useContext(AppContext)
export { AppProvider }
