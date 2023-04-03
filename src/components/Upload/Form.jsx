import React, { useState, useEffect, ref } from "react"
import { generateUniqueId } from "../../utils/logic"
import { ToastContainer, toast } from "react-toastify"
import axios from "axios"
import "react-toastify/dist/ReactToastify.css"

export const Form = ({
  imageUrls,
  headerImage,
  videoUrls,
  setVideoUrl,
  setImageUrls,
  setHeaderImageUrl,
}) => {
  const mongoAPI = import.meta.env.VITE_MONGO_API_KEY
  const endpoint = import.meta.env.VITE_MONGO_DB_ENDPOINT
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    title: "",
    text: "",
    headerImage: "",
    about: {
      title: "",
      text: [],
    },
    aboutTitle: "",
    aboutText: "",
    client: "",
    modeOfLife: "",
    sector: "",
    expertise: "",
    year: "",
    images: "",
    videos: "",
  })

  const [errors, setErrors] = useState({})
  const [validated, setValidated] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const validate = (values) => {
    let errors = {}

    if (
      !values.name ||
      values.name.length < 4 ||
      !/^[a-zA-Z]+$/i.test(values.name)
    ) {
      errors.name =
        "Name is required and must be at least 4 characters and only letters"
    }

    if (
      !values.title ||
      values.title.length < 4 ||
      !/^[a-zA-Z]+$/i.test(values.title)
    ) {
      errors.title =
        "Title is required and must be at least 4 characters and only letters"
    }

    if (!values.text) {
      errors.text = "Text is Required"
    }

    if (!values.aboutTitle) {
      errors.aboutTitle = "About Title Required"
    }

    if (!values.aboutText) {
      errors.aboutText = "About Text is Required"
    }

    if (!values.client) {
      errors.client = "Client is Required"
    }

    if (!values.modeOfLife) {
      errors.modeOfLife = "Mode of Life is Required"
    }

    if (!values.sector) {
      errors.sector = "Sector is Required"
    }

    if (!values.expertise) {
      errors.expertise = "Expertise is Required"
    }

    if (!values.year) {
      errors.year = "Year is Required"
    }

    if (!values.headerImage) {
      errors.headerImage = "Header Image is Required"
    } else if (!/\.jpg$|\.png$|\.jpeg$|\.svg$/i.test(values.headerImage)) {
      errors.headerImage = "Header Image must be a jpg, png, jpeg, webp or svg"
    }

    if (!values.images) {
      errors.images = "Images are Required"
    } else if (!/\.jpg$|\.png$|\.jpeg$|\.svg$/i.test(values.images)) {
      errors.images = "Images must be a jpg, png, jpeg, webp or svg"
    }

    if (!values.videos) {
      errors.videos = "Videos is Required"
    } else if (
      !/\.mp4$|\.webm$|\.ogg$/i.test(values.videos) &&
      !/\.mp4$|\.webm$|\.ogg$/i.test(values.videos)
    ) {
      errors.videos = "Videos must be a mp4, webm or ogg"
    }

    console.log(errors)
    return errors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    formData.images = imageUrls
    formData.headerImage = headerImage
    formData.videos = videoUrls
    formData.slug = formData.name.toLowerCase()
    formData.about = {
      about: formData.aboutTitle,
      text: formData.aboutText.includes(",")
        ? formData.aboutText.split(",")
        : [formData.aboutText],
    }
    formData.sector = formData.sector.includes(",")
      ? formData.sector.split(",")
      : [formData.sector]

    formData.expertise = formData.expertise.includes(",")
      ? formData.expertise.split(",")
      : [formData.expertise]

    const errors = validate(formData)
    if (errors.videos) {
      setVideoUrl("")
    }

    if (errors.headerImage) {
      setHeaderImageUrl("")
    }

    if (errors.images) {
      setImageUrls("")
    }
    setErrors(errors)
    setValidated(true)
    if (Object.keys(errors).length === 0) {
      console.log("Form Submitted")
      console.log(formData)

      setIsSubmitting(true)
      const key =
        "lPPqyBSZyIL6hFTbQDPbr2sCHeVe1wsgpyON2mVaJTIdgwc6B6lFDIpXDPp00uaq"
      const secret =
        "https://eu-central-1.aws.realm.mongodb.com/api/client/v2.0/app/data-yejxc/auth/providers/api-key/login"

      // use get to get the token
      const response = await axios.post(
        secret,
        {
          key,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      // use the token to make the request

      const token = response ? response.data.access_token : null
      axios
        .post(endpoint, formData, {
          headers: {
            "Content-Type": "application/json",
            // "api-key": mongoAPI,
            // email: "admin@test.com",
            // password: "admin1234",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res.data)
          setIsSubmitting(false)
          setIsSubmitted(true)
        })
        .catch((err) => {
          console.log(err)
          setIsSubmitting(false)
          setIsSubmitted(false)
        })
      setIsSubmitting(false)
      setIsSubmitted(true)
    }
  }

  useEffect(() => {
    if (validated) {
      if (Object.keys(errors).length === 0) {
        toast.success("Form Submitted Successfully")
        setImageUrls("")
        setHeaderImageUrl("")
        setVideoUrl("")

        setFormData({
          name: "",
          slug: "",
          title: "",
          text: "",
          headerImage: "",
          about: {
            title: "",
            text: [],
          },
          aboutTitle: "",
          aboutText: "",
          client: "",
          modeOfLife: "",
          sector: "",
          expertise: "",
          year: "",
          images: "",
          videos: "",
        })
      } else {
        toast.error(
          errors.name ||
            errors.title ||
            errors.text ||
            errors.about ||
            errors.aboutTitle ||
            errors.aboutText ||
            errors.client ||
            errors.modeOfLife ||
            errors.sector ||
            errors.expertise ||
            errors.year ||
            errors.headerImage ||
            errors.images ||
            errors.videos
        )
      }
    }
  }, [errors])

  return (
    <form onSubmit={handleSubmit}>
      <ToastContainer />
      <div
        className="form-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1rem",
        }}
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="slug">Slug</label>
          <input
            type="text"
            name="slug"
            id="slug"
            value={formData.name.toLowerCase()}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            name="text"
            id="text"
            value={formData.text}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="header-image">Header Image</label>
          <input
            type="text"
            name="headerImage"
            id="header-image"
            value={headerImage}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="about">About</label>
          <input
            type="text"
            name="about"
            id="about"
            value={formData.aboutTitle && formData.aboutText}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="about-title">About Title</label>
          <input
            type="text"
            name="aboutTitle"
            id="about-title"
            value={formData.aboutTitle}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="about-text">About Text</label>
          <input
            type="text"
            name="aboutText"
            id="about-text"
            value={formData.aboutText}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="client">Client</label>
          <input
            type="text"
            name="client"
            id="client"
            value={formData.client}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mode-of-life">Mode of Life</label>
          <input
            type="text"
            name="modeOfLife"
            id="mode-of-life"
            value={formData.modeOfLife}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="sector">Sector</label>
          <input
            type="text"
            name="sector"
            id="sector"
            value={formData.sector}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="expertise">Expertise</label>
          <input
            type="text"
            name="expertise"
            id="expertise"
            value={formData.expertise}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="year">Year</label>
          <input
            type={`datetime-local`}
            name="year"
            id="year"
            value={formData.year}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="images">Images</label>
          <input
            type="text"
            name="images"
            id="images"
            value={imageUrls}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="images">Videos</label>
          <input
            type="text"
            name="videos"
            id="videos"
            value={videoUrls}
            onChange={handleChange}
          />
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <button
          type="submit"
          style={{
            padding: "0.5rem 1rem",
            width: "100%",
          }}
        >
          Submit
        </button>
      </div>
    </form>
  )
}
