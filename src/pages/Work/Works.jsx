import React, { useState } from "react"
import { Btn } from "../../components/Button"
import { generateUniqueId } from "../../utils/logic"
import { CardWork } from "../Work"
import {
  BsArrowDown,
  BsArrowLeft,
  BsChevronDown,
  BsChevronUp,
} from "react-icons/bs"
import "./Works.css"

const expertise = [
  {
    id: 1,
    name: "Naming & Storytelling",
    url: "https://www.pearlfisher.com/work/expertise/naming-storytelling/",
  },
  {
    id: 2,
    name: "Portfolio Architecture",
    url: "https://www.pearlfisher.com/work/expertise/portfolio-architecture/",
  },
  {
    id: 3,
    name: "Visual identity",
    url: "https://www.pearlfisher.com/work/expertise/visual-identity/",
  },
  {
    id: 4,
    name: "Sustainability",
    url: "https://www.pearlfisher.com/work/expertise/sustainability/",
  },
  {
    id: 5,
    name: "Brand Strategy",
    url: "https://www.pearlfisher.com/work/expertise/brand-strategy/",
  },
  {
    id: 6,
    name: "Brand Architecture",
    url: "https://www.pearlfisher.com/work/expertise/brand-architecture/",
  },
  {
    id: 7,
    name: "Brand Experience",
    url: "https://www.pearlfisher.com/work/expertise/brand-experience/",
  },
  {
    id: 8,
    name: "Brand Activation",
    url: "https://www.pearlfisher.com/work/expertise/brand-activation/",
  },
  {
    id: 9,
    name: "Brand Naming",
    url: "https://www.pearlfisher.com/work/expertise/brand-naming/",
  },
  {
    id: 10,
    name: "Brand Storytelling",
    url: "https://www.pearlfisher.com/work/expertise/brand-storytelling/",
  },
  {
    id: 11,
    name: "Brand Design",
    url: "https://www.pearlfisher.com/work/expertise/brand-design/",
  },
]
const articles = [
  {
    id: 1,
    name: "Seedlip",
    urlurl: "#/",
    background: "https://cdn.pearlfisher.com/2019/10/Seedlip_thumbnail.jpg",
  },
  {
    id: 2,
    name: "allPlant",
    url: "#",
    background:
      "https://cdn.pearlfisher.com/2023/01/AP_Case-Study_Web-Pages-09-2-scaled.jpg",
  },
  {
    id: 3,
    name: "Her.9",
    url: "#-shop/",
    background: "https://cdn.pearlfisher.com/2021/09/thumb.jpg",
  },
  {
    id: 2,
    name: "allPlant",
    url: "#",
    background:
      "https://cdn.pearlfisher.com/2023/01/AP_Case-Study_Web-Pages-09-2-scaled.jpg",
  },
  {
    id: 3,
    name: "Her.9",
    url: "#-shop/",
    background: "https://cdn.pearlfisher.com/2021/09/thumb.jpg",
  },
  {
    id: 1,
    name: "Seedlip",
    url: "#",
    background: "https://cdn.pearlfisher.com/2019/10/Seedlip_thumbnail.jpg",
  },
  {
    id: 1,
    name: "Seedlip",
    url: "#",
    background: "https://cdn.pearlfisher.com/2019/10/Seedlip_thumbnail.jpg",
  },
  {
    id: 2,
    name: "allPlant",
    url: "#",
    background:
      "https://cdn.pearlfisher.com/2023/01/AP_Case-Study_Web-Pages-09-2-scaled.jpg",
  },
  {
    id: 3,
    name: "Her.9",
    url: "#-shop/",
    background: "https://cdn.pearlfisher.com/2021/09/thumb.jpg",
  },
  {
    id: 2,
    name: "allPlant",
    url: "#",
    background:
      "https://cdn.pearlfisher.com/2023/01/AP_Case-Study_Web-Pages-09-2-scaled.jpg",
  },
  {
    id: 3,
    name: "Her.9",
    url: "#-shop/",
    background: "https://cdn.pearlfisher.com/2021/09/thumb.jpg",
  },
  {
    id: 1,
    name: "Seedlip",
    url: "#",
    background: "https://cdn.pearlfisher.com/2019/10/Seedlip_thumbnail.jpg",
  },
  {
    id: 2,
    name: "allPlant",
    url: "#",
    background:
      "https://cdn.pearlfisher.com/2023/01/AP_Case-Study_Web-Pages-09-2-scaled.jpg",
  },
  {
    id: 3,
    name: "Her.9",
    url: "#-shop/",
    background: "https://cdn.pearlfisher.com/2021/09/thumb.jpg",
  },
  {
    id: 1,
    name: "Seedlip",
    url: "#",
    background: "https://cdn.pearlfisher.com/2019/10/Seedlip_thumbnail.jpg",
  },
]

const Works = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <main className="works">
      <div className="works-content">
        <div className="section-work-header">
          <div className="section-work-title">
            <h1>Work</h1>
          </div>
          <div
            className="section-all-work-items section-all-work-items-arrows"
            // onMouseEnter={() => setOpen(true)}
          >
            <span>Filter work by:</span>
            <a
              href="#"
              title="Area of Expertise"
              data-toggle="expertise"
              className=""
              onClick={handleOpen}
            >
              Area of Expertise
              <span>{open ? <BsChevronUp /> : <BsChevronDown />}</span>
            </a>{" "}
          </div>
        </div>

        <div
          className="work-filter-dropdown work-filter-expertise"
          style={{
            opacity: open && "0",
          }}
        >
          <div className="back-to-top back-to-list back-to-list-one">
            <div className="sort-items expertise-list">
              {expertise.map((item) => (
                <a href={item.url} key={item.id}>
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <section
          className="section-work-grid section-all-work-grid"
          onMouseEnter={() => setOpen(true)}
        >
          {articles.map((item) => (
            <CardWork
              key={generateUniqueId()}
              name={item.name}
              url={item.url}
              background={item.background}
            />
          ))}
        </section>
        <div className="works-button-container">
          <Btn text="Load more" Icon={BsArrowDown} />
        </div>
      </div>
    </main>
  )
}

export default Works
