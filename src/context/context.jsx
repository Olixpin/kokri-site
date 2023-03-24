import React, { useState, useContext, createContext, useEffect } from "react"
const AppContext = createContext()
import { getHomeData } from "../utils/apis"

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

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getHomeData().then((res) => {
      setData(res)
      setLoading(false)
    })
  }, [])

  const cloudName = import.meta.env.VITE_CLOUD_NAME
  const presetName = import.meta.env.VITE_PRESET_NAME

  const [cloudImage, setCloudImage] = useState("")

  const [imageUrls, setImageUrls] = useState(() => {
    const urls = localStorage.getItem("imageUrls")
    return urls ? JSON.parse(urls) : []
  })

  const myWidget = window.cloudinary?.createUploadWidget(
    {
      cloudName,
      uploadPreset: presetName,
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info)
        setCloudImage(result.info.secure_url)
        setImageUrls((prev) => [...prev, result.info.secure_url])
      }
    }
  )

  useEffect(() => {
    localStorage.setItem("imageUrls", JSON.stringify(imageUrls))
    console.log(imageUrls)
  }, [imageUrls])

  const [headerImageUrl, setHeaderImageUrl] = useState(() => {
    const urls = localStorage.getItem("headerUrl")
    return urls ? JSON.parse(urls) : []
  })

  const myWidgetHeader = window.cloudinary?.createUploadWidget(
    {
      cloudName,
      uploadPreset: presetName,
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info)
        setCloudImage(result.info.secure_url)
        setHeaderImageUrl(result.info.secure_url)
      }
    }
  )

  useEffect(() => {
    localStorage.setItem("headerUrl", JSON.stringify(headerImageUrl))
    console.log(headerImageUrl)
  }, [headerImageUrl])

  const [videoUrl, setVideoUrl] = useState(() => {
    const urls = localStorage.getItem("videoUrl")
    return urls ? JSON.parse(urls) : []
  })

  const myWidgetVideo = window.cloudinary?.createUploadWidget(
    {
      cloudName,
      uploadPreset: presetName,
    },

    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log("Done! Here is the video info: ", result.info)
        setCloudImage(result.info.secure_url)
        setVideoUrl((prev) => [...prev, result.info.secure_url])
      }
    }
  )

  useEffect(() => {
    localStorage.setItem("videoUrl", JSON.stringify(videoUrl))
    console.log(videoUrl)
  }, [videoUrl])

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
    data,
    loading,
    cloudImage,
    imageUrls,
    myWidget,
    myWidgetHeader,
    headerImageUrl,
    setHeaderImageUrl,
    videoUrl,
    setVideoUrl,
    myWidgetVideo,
    setImageUrls,
  }

  return <AppContext.Provider value={value} children={children} />
}

export const useAppContext = () => useContext(AppContext)
export { AppProvider }
