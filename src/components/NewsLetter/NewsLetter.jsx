import React, { useState, useEffect } from "react"
import { Modal } from "../Modal"
import "./NewsLetter.css"
import IconClose from "../../assets/images/icon-close.svg"
import { useAppContext } from "../../context/context"
import { Btn } from "../Button"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const NewsLetter = () => {
  const { closeModal } = useAppContext()

  const [newsLetterFormDatas, setNewsLetterFormDatas] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })

  const [errors, setErrors] = useState({})
  const [validated, setValidated] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewsLetterFormDatas({ ...newsLetterFormDatas, [name]: value })
  }

  const validate = (values) => {
    let errors = {}

    if (!values.firstName) {
      errors.firstName = "First name is required"
    } else if (values.firstName.length < 4) {
      errors.firstName = "First name must be at least 4 characters"
    } else if (!/^[a-zA-Z]+$/i.test(values.firstName)) {
      errors.firstName = "First name must be only letters"
    }

    if (!values.lastName) {
      errors.lastName = "First name is required"
    } else if (values.lastName.length < 4) {
      errors.lastName = "First name must be at least 4 characters"
    } else if (!/^[a-zA-Z]+$/i.test(values.lastName)) {
      errors.lastName = "First name must be only letters"
    }

    if (!values.email) {
      errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid"
    }

    console.log(errors)
    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validate(newsLetterFormDatas))
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && validated) {
      toast.success("Thank you for subscribing to our newsletter", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })

      setNewsLetterFormDatas({
        firstName: "",
        lastName: "",
        email: "",
      })

      setTimeout(() => {
        closeModal()
      }, 5000)
    } else {
      setValidated(true)
    }
  }, [errors])

  return (
    <div>
      <ToastContainer />
      <Modal>
        <div className="modal-content">
          <button
            className="close-modal"
            onClick={() => {
              closeModal()
            }}
          >
            <img src={IconClose} alt="close" />
          </button>
          <h3>Subscribe to our newsletter</h3>
          <p className="modal-para">
            Join our mailing list to receive the latest news, <br />
            events highlight, work launches and articles
          </p>

          <form className="form">
            <div className="form-input-1">
              <label>
                First name<span>*</span>
                <br />
                <input
                  type="text"
                  name="firstName"
                  value={newsLetterFormDatas.firstName}
                  onChange={handleChange}
                />
                <p className="label-error">
                  {errors.firstName && errors.firstName}
                </p>
              </label>
              <label>
                Last name<span>*</span>
                <br />
                <input
                  type="text"
                  name="lastName"
                  value={newsLetterFormDatas.lastName}
                  onChange={handleChange}
                />
                <p className="label-error">
                  {errors.lastName && errors.lastName}
                </p>
              </label>
            </div>
            <label>
              Email<span>*</span>
              <br />
              <input
                type="text"
                name="email"
                value={newsLetterFormDatas.email}
                onChange={handleChange}
              />
              <p className="label-error">{errors.email && errors.email}</p>
            </label>
            <p>
              Kokribranders needs the contact information you provide to us to
              contact you about our products and services. You may unsubscribe
              from these communications at any time. For information on how to
              unsubscribe, as well as our privacy practices and commitment to
              protecting your privacy, please review our Privacy Policy.
            </p>
            <Btn
              text="Subscribe"
              handleClick={(e) => {
                handleSubmit(e)
              }}
            >
              Subscribe
            </Btn>
          </form>
        </div>
      </Modal>
    </div>
  )
}

export default NewsLetter
