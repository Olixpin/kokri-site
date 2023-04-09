import React from "react"
import MyPage from "../../components/ScrollToTop/ScrollToTop"
import "./Careers.css"
import { CareerCardList, Avatar } from "../../components/Card"

const careers = [
  {
    title: "Graphic Artist",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    location: "100% Remote",
    hours: "Full Time",
  },
]

const Careers = () => {
  return (
    <MyPage>
      <div className="career">
        <div className="career-content">
          <div className="career-main">
            <h1>Careers</h1>
            <p className="career-text">
              We’re hiring… <br />
              Ask yourself: Am I an impactful personality and have I got talent
              or potential? Am I savvy, ambitious and a great communicator? If
              so then you’re five steps closer to joining a definitive creative
              partnership. The next step is to prove it.
            </p>
            <div>
              {" "}
              {Array.from({ length: 4 }).map((_, index) => {
                return (
                  <div key={index} className="career-card-list">
                    <CareerCardList cards={careers} />
                  </div>
                )
              })}
            </div>
            <h1>Placements & Internships</h1>
            <h3 className="career-text-h3">
              We select a handful each year to come and experience the Korkri
              way of doing things.
            </h3>
            <p className="career-text">
              We don’t mind where you are on your journey to becoming a creative
              professional, but what we do care deeply about is your raw talent
              and sparkling personality. A placement or internship with us is
              about getting stuck in and involved in everything we do, so that’s
              why we need to make sure we select the right person with the right
              attitude. We don’t do nepotism, bribery or blackmail – the only
              way to secure an opportunity with us is to apply and send us your
              work. So please concentrate all your talent, intelligence and
              creativity into your email and we will get in touch if we like
              what we see!
            </p>

            <h1>Get in touch</h1>
            <div className="avatar-container">
              <Avatar />
              <Avatar />
            </div>
          </div>
        </div>
      </div>
    </MyPage>
  )
}

export default Careers
