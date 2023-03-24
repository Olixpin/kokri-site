import React from "react"
import { useAppContext } from "../../context/context"
import { Form } from "../Upload"

export const Upload = () => {
  const {
    imageUrls,
    myWidget,
    headerImageUrl,
    myWidgetHeader,
    myWidgetVideo,
    videoUrl,
    setVideoUrl,
    setImageUrls,
    setHeaderImageUrl,
  } = useAppContext()

  React.useEffect(() => {
    const uploadBtn = document?.getElementById("upload-widget")
    uploadBtn.addEventListener("click", () => {
      myWidget?.open()
    })

    return () => {
      uploadBtn.removeEventListener("click", () => {
        myWidget?.open()
      })
    }
  }, [])

  React.useEffect(() => {
    const uploadBtn = document?.getElementById("upload-widget-header")
    uploadBtn.addEventListener("click", () => {
      myWidgetHeader?.open()
    })

    return () => {
      uploadBtn.removeEventListener("click", () => {
        myWidgetHeader?.open()
      })
    }
  }, [])

  React.useEffect(() => {
    const uploadBtn = document?.getElementById("upload-widget-video")
    uploadBtn.addEventListener("click", () => {
      myWidgetVideo?.open()
    })

    return () => {
      uploadBtn.removeEventListener("click", () => {
        myWidgetVideo?.open()
      })
    }
  }, [])

  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: "150px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Upload Data</h1>
      <div
        className="upload-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="buttons"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <button
            id="upload-widget"
            className="cloudnery-btn"
            onClick={() => {
              console.log(imageUrls)
            }}
          >
            Upload Images
          </button>

          <button id="upload-widget-header" className="cloudnery-btn">
            Upload Header Image
          </button>

          <button id="upload-widget-video" className="cloudnery-btn">
            Upload Videos
          </button>
        </div>
      </div>

      <Form
        imageUrls={imageUrls}
        headerImage={headerImageUrl}
        videoUrls={videoUrl}
        setVideoUrl={setVideoUrl}
        setHeaderImageUrl={setHeaderImageUrl}
        setImageUrls={setImageUrls}
      />
    </div>
  )
}
