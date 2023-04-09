import React, { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import "./Gallery.css"
import { Btn } from "../../components/Button"
import { getHomeData } from "../../utils/apis"
import Her9 from "../../assets/images/work-images/her/Her9.png"
import Skeleton from "react-loading-skeleton"
import { useAppContext } from "../../context/context"
import { BsArrowRight } from "react-icons/bs"

const Gallery = () => {
  const { data, loading } = useAppContext()
  if (loading) return <h3>Loading...</h3>

  return (
    <section className="gallery-wrapper">
      <div className="gallery-container">
        <div className="back-to-top back-to-top-bottom"></div>
        <section className="section-content">
          <div className="section-39 section-70-30">
            <div className="section-row type-1">
              <div className="col-1">
                <div className="col-item-overlay">
                  <div className="col-item-background">
                    <Link
                      to={`/work/${data[0].slug}`}
                      className=""
                      title={data[0].name}
                      style={{
                        backgroundImage: `url(${data[0].images[0]})`,
                      }}
                    ></Link>
                  </div>
                  <div className="col-item-text">
                    <h4></h4>
                    <h5>{data[0].name}</h5>
                  </div>
                  <div className="col-item-link">
                    <Link
                      to={`/work/${data[0].slug}`}
                      title={data[0].name}
                    ></Link>
                  </div>
                </div>
              </div>
              <div className="col-2">
                <div className="col-item-overlay">
                  <div className="col-item-background">
                    <Link
                      to={`/work/${data[1].slug}`}
                      className=""
                      title={data[1].name}
                      style={{
                        backgroundImage: `url(${data[1].images[0]})`,
                      }}
                    ></Link>
                  </div>
                  <div className="col-item-text">
                    <h4></h4>
                    <h5>{data[1].name}</h5>
                  </div>
                  <div className="col-item-link">
                    <Link
                      to={`/work/${data[1].slug}`}
                      title={data[1].name}
                    ></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-39 section-30-70">
            <div className="section-row type-1">
              <div className="col-1">
                <div className="col-item-overlay">
                  <div className="col-item-background">
                    <Link
                      to={`/work/${data[2].slug}`}
                      className=""
                      title={data[2].name}
                      style={{
                        backgroundImage: `url(${data[2].images[0]})`,
                      }}
                    ></Link>
                  </div>
                  <div className="col-item-text">
                    <h4></h4>
                    <h5>{data[2].name}</h5>
                  </div>
                  <div className="col-item-link">
                    <Link
                      to={`/work/${data[2].slug}`}
                      title={data[2].name}
                    ></Link>
                  </div>
                </div>
              </div>
              <div className="col-2">
                <div className="col-item-overlay">
                  <div className="col-item-background">
                    <Link
                      to={`/work/${data[3].slug}`}
                      className=""
                      title={data[3].name}
                      style={{
                        backgroundImage: `url(${data[3].images[0]})`,
                      }}
                    ></Link>
                  </div>
                  <div className="col-item-text">
                    <h4></h4>
                    <h5>{data[3].name}</h5>
                  </div>
                  <div className="col-item-link">
                    <Link
                      to={`/work/${data[3].slug}`}
                      title={data[3].name}
                    ></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-39 section-70-30">
            <div className="section-row type-1">
              <div className="col-1">
                <div className="col-item-overlay">
                  <div className="col-item-background">
                    <Link
                      to={`/work/${data[4].slug}`}
                      className=""
                      title={data[4].name}
                      style={{
                        backgroundImage: `url(${data[4].images[0]})`,
                      }}
                    ></Link>
                  </div>
                  <div className="col-item-text">
                    <h4></h4>
                    <h5>{data[4].name}</h5>
                  </div>
                  <div className="col-item-link">
                    <Link
                      to={`/work/${data[4].slug}`}
                      title={data[4].name}
                    ></Link>
                  </div>
                </div>
              </div>
              <div className="col-2">
                <div className="col-item-overlay">
                  <div className="col-item-background">
                    <Link
                      to={`/work/${data[1].slug}`}
                      className=""
                      title={data[1].name}
                      style={{
                        backgroundImage: `url(${data[1].images[0]})`,
                      }}
                    ></Link>
                  </div>
                  <div className="col-item-text">
                    <h4></h4>
                    <h5>{data[1].name}</h5>
                  </div>
                  <div className="col-item-link">
                    <Link
                      to={`/work/${data[1].slug}`}
                      title={data[1].name}
                    ></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="gallery-btn-container button-block-wrap">
          <Link to="/work">
            <Btn text="More Work" Icon={BsArrowRight} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Gallery

const GalleryChild = (item, className) => {
  return (
    <div className={className}>
      <div className="section-row type-1">
        <div className={className}>
          <div className="col-item-overlay">
            <div className="col-item-background">
              <Link
                to={`/work/${item?.name}`}
                title={item?.title}
                style={{
                  backgroundImage: `url(${item?.images?.[0]})`,
                }}
              ></Link>
            </div>
            <div className="col-item-text">
              <h4></h4>
              <h5>{item?.title}</h5>
            </div>
            <div className="col-item-link">
              <Link to={`/work/${item?.name}`} title={item?.name}></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
