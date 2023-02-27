import React, { useState, useContext, createContext, useEffect } from "react"
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

  const [changeHeader, setChangeHeader] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setChangeHeader(window.pageYOffset > 200)
      )
    }
  }, [])

  const value = {
    isModalOpen,
    openModal,
    closeModal,
    toggleMenu,
    openMenu,
    setOpenMenu,
    closeMenu,
    changeHeader,
    setChangeHeader,
  }

  return <AppContext.Provider value={value} children={children} />
}

export const useAppContext = () => useContext(AppContext)
export { AppProvider }
