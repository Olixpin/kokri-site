import React, { useState, useEffect, ref } from "react"
import { generateUniqueId } from "../../utils/logic"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const Form = ({
  imageUrls,
  headerImage,
  videoUrls,
  setVideoUrl,
  setImageUrls,
  setHeaderImageUrl,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    title: "",
    text: "",
    headerImage: "",
    aboutTitle: "",
    aboutText: "",
    client: "",
    modeOfLife: "",
    sector: "",
    expertise: "",
    year: "",
    images: "",
    videos: "",
    tags: "",
    categories: "",
    awards: "",
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

    if (!values.tags) {
      errors.tags = "Tags is Required"
    }

    if (!values.categories) {
      errors.categories = "Categories is Required"
    }

    if (!values.awards) {
      errors.awards = "Awards is Required"
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

  const handleSubmit = (e) => {
    e.preventDefault()
    formData.images = imageUrls
    formData.headerImage = headerImage
    formData.videos = videoUrls
    formData.slug = formData.name.toLowerCase()

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
    }
  }

  useEffect(() => {
    if (validated) {
      if (Object.keys(errors).length === 0) {
        toast.success("Form Submitted Successfully")
        setFormData({
          name: "",
          slug: "",
          title: "",
          text: "",
          headerImage: "",
          aboutTitle: "",
          aboutText: "",
          client: "",
          modeOfLife: "",
          sector: "",
          expertise: "",
          year: "",
          images: "",
          videos: "",
          tags: "",
          categories: "",
          awards: "",
        })
      } else {
        toast.error(
          errors.name ||
            errors.title ||
            errors.aboutTitle ||
            errors.aboutText ||
            errors.client ||
            errors.modeOfLife ||
            errors.sector ||
            errors.expertise ||
            errors.year ||
            errors.tags ||
            errors.categories ||
            errors.awards ||
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
          <label htmlFor="header-image">Header Image</label>
          <input
            type="text"
            name="headerImage"
            id="header-image"
            defaultValue={headerImage}
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
        <div className="form-group">
          <label htmlFor="tags">Tags</label>
          <input
            type="text"
            name="tags"
            id="tags"
            value={formData.tags}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="categories">Categories</label>
          <input
            type="text"
            name="categories"
            id="categories"
            value={formData.categories}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="awards">Awards won</label>
          <input
            type="text"
            name="awards"
            id="awards"
            value={formData.awards}
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
