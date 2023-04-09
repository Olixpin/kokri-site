import React, { useEffect, useState } from "react"
import "./Work.css"
import { Link, useParams } from "react-router-dom"
import { useAppContext } from "../../context/context"
import { Error } from "../Error"
import { useMatch } from "react-router-dom"
import MyPage from "../../components/ScrollToTop/ScrollToTop"
import { generateUniqueId } from "../../utils/logic"
import IconClose from "../../assets/images/icon-close.svg"
import { Btn } from "../../components/Button"
import ArrowRight from "../../assets/images/image2.svg"
import { BsArrowRight } from "react-icons/bs"

const Work = () => {
  const { workId } = useParams()
  const { data, loading } = useAppContext()
  const match = useMatch("/work/:workId")
  const { openModal, isModalOpen } = useAppContext()

  console.log(data)

  const work = data?.find((item) => item?.slug === match?.params?.workId)

  if (!loading && work === undefined) return <Error />

  const [getScrollY, setGetScrollY] = useState(window.scrollY)

  useEffect(() => {
    const handleScroll = () => {
      setGetScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const [readStory, setReadStory] = useState(false)

  const handleReadStory = () => {
    setReadStory(!readStory)
  }

  return (
    <MyPage>
      <section
        className="work"
        style={{
          backgroundImage: `url(${work?.images?.[0]})`,
        }}
      >
        {
          <>
            <div className="work-overlay">&nbsp;</div>
            <div className="work-content">
              <div className="work-cont">
                <h2>{work?.name}</h2>
                <h1>{work?.title}</h1>
                <div className="para">
                  <p>{work?.text}</p>
                  <p>&nbsp;</p>
                </div>
                <div className="button-container">
                  <a
                    href="#read-story"
                    id="full-story"
                    onClick={handleReadStory}
                  >
                    Read full life story &rarr;
                  </a>
                  <a
                    href="#"
                    id="full-story"
                    onClick={(e) => {
                      e.preventDefault()
                      openModal()
                    }}
                  >
                    Get in touch &rarr;
                  </a>
                </div>
              </div>
            </div>
          </>
        }
      </section>

      <div className="" id="read-story"></div>
      {readStory && (
        <section className="read-full-story">
          <div className="read-full-story-content">
            <article class="section-text">
              <div className="article-close-btn" onClick={handleReadStory}>
                <button>
                  <img src={IconClose} alt="close" />
                </button>
              </div>
              <div class="section-text-row">
                <div
                  class="section-text-col"
                  style={{
                    marginBottom: "20px",
                  }}
                >
                  <h3 class="section-text-header">{work?.name}</h3>
                  <p>{work?.about?.title}</p>
                </div>
              </div>
              <div class="section-text-row">
                <div class="section-text-col">
                  <div class="section-text-content">
                    {work?.about?.texts?.map((text) => (
                      <p key={generateUniqueId()}>{text}</p>
                    ))}
                  </div>
                  <div class="section-button-content">
                    <p>
                      To find out more about our work for {work?.name} or any of
                      our other brands, get in touch.
                    </p>

                    <Btn text="Get in touch" Icon={BsArrowRight} />
                  </div>
                  <div class="section-link-content section-collapse-story">
                    <a
                      href="#"
                      title="Collapse full story"
                      id="back-to-case"
                    ></a>
                  </div>
                </div>
                <div class="section-text-col">
                  <div class="section-list-row">
                    <div class="section-list-col">
                      <div class="list-item">
                        <h5>Client</h5>
                        <p>{work?.client}</p>
                      </div>
                      <div class="list-item">
                        <h5>Mode of life</h5>
                        <p>
                          <Link to={`/work/${work?.slug}`}>
                            {work?.modeOfLife}
                          </Link>
                        </p>{" "}
                      </div>
                      <div class="list-item">
                        <h5>Sector</h5>
                        <p>
                          {work?.sector?.map((item) => (
                            <Link to={`/work/${work?.slug} `}>
                              {work?.sector.lastIndexOf(item)
                                ? item
                                : `${item},`}{" "}
                            </Link>
                          ))}
                        </p>
                      </div>
                      <div class="list-item">
                        <h5>Expertise</h5>
                        <p>
                          {work?.expertise?.map((item) => (
                            <Link to={`/work/${work?.slug} `}>
                              {work?.expertise.lastIndexOf(item)
                                ? item
                                : `${item},`}{" "}
                            </Link>
                          ))}
                        </p>
                      </div>
                    </div>
                    <div class="section-list-col">
                      <div class="list-item">
                        <h5>Year</h5>
                        <div>
                          <p>{work?.year}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      <section className="work-body">
        <div className="work-body-content">
          <div className="row-1">
            {work?.images?.slice(1, 4).map((image, index) => {
              return (
                <Link
                  title={work?.name}
                  to={`/work/${work?.slug}`}
                  className="image-container"
                  key={generateUniqueId()}
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                ></Link>
              )
            })}
          </div>
          <div className="row-2">
            {work?.images?.slice(4, 7).map((image, index) => (
              <Link
                title={work?.name}
                to={`/work/${work?.slug}`}
                className="image-container"
                key={generateUniqueId()}
                style={{
                  backgroundImage: `url(${image})`,
                }}
              ></Link>
            ))}
          </div>
        </div>
        <div className="find-out-more">
          <h1>
            To find out more about our work for {work?.name} or any of our other
            brands, get in touch.
          </h1>
          <div className="">
            <Btn
              text="Get in touch"
              Icon={BsArrowRight}
              handleClick={(e) => {
                e.preventDefault()
                openModal()
              }}
            />
          </div>
        </div>

        <div className="explore-more">
          <h3>Explore more of our work</h3>
          <div
            className="explore-more-content"
            onClick={() => window.scrollTo(0, 0)}
          >
            {data.reduce((acc, item) => {
              if (item.slug !== work?.slug) {
                acc.push(
                  <Link
                    to={`/work/${item.slug}`}
                    className="explore-more-item"
                    key={generateUniqueId()}
                  >
                    <div
                      className="explore-more-item-image"
                      style={{
                        backgroundImage: `url(${item?.images?.[0]})`,
                      }}
                    ></div>
                    <div className="explore-more-item-content">
                      <h3>{item?.name}</h3>
                      <p>{item?.title}</p>
                    </div>
                  </Link>
                )
              }
              return acc
            }, [])}
          </div>
        </div>
      </section>
    </MyPage>
  )
}

export default Work
