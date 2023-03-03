import React, { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import "./Gallery.css"
import { Btn } from "../../components/Button"
import { East } from "@mui/icons-material"
import { getHomeData } from "../../utils/apis"
import Her9 from "../../assets/images/work-images/her/Her9.png"
import Skeleton from "react-loading-skeleton"
import { useAppContext } from "../../context/context"

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
          <div className="section-39 section-30-70">
            <div className="section-row type-1">
              <div className="col-1">
                <div className="col-item-overlay">
                  <div className="col-item-background">
                    <a
                      href="https://www.pearlfisher.com/work/sogood-sake/"
                      className=""
                      style={{
                        backgroundImage: `url(${Her9})`,
                      }}
                    ></a>
                  </div>
                  <div className="col-item-text">
                    <h4></h4>
                    <h5>SoGood Saké</h5>
                  </div>
                  <div className="col-item-link">
                    <a
                      href="https://www.pearlfisher.com/work/sogood-sake/"
                      title="SoGood Saké"
                    ></a>
                  </div>
                </div>
              </div>
              <div className="col-2">
                <div className="col-item-overlay">
                  <div className="col-item-background">
                    <a
                      href="https://www.pearlfisher.com/work/love-ocean"
                      className=""
                      title="Love Ocean"
                      style={{
                        backgroundImage: `url(${Her9})`,
                      }}
                    ></a>
                  </div>
                  <div className="col-item-text">
                    <h4></h4>
                    <h5>Love Ocean</h5>
                  </div>
                  <div className="col-item-link">
                    <a
                      href="https://www.pearlfisher.com/work/love-ocean"
                      title="Love Ocean"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-29 section-50-50">
            <div className="section-row type-1">
              <div className="col-1">
                <div className="col-item-overlay">
                  <div className="col-item-background">
                    <a
                      href="https://www.pearlfisher.com/work/bang-olufsen/"
                      className=""
                      title="Bang &amp; Olufsen"
                      style={{
                        backgroundImage: `url(${Her9})`,
                      }}
                    ></a>
                  </div>
                  <div className="col-item-text">
                    <h4></h4>
                    <h5>Bang &amp; Olufsen</h5>
                  </div>
                  <div className="col-item-link">
                    <a
                      href="https://www.pearlfisher.com/work/bang-olufsen/"
                      title="Bang &amp; Olufsen"
                    ></a>
                  </div>
                </div>
              </div>
              <div className="col-2">
                <div className="col-item-overlay">
                  <div className="col-item-background">
                    <a
                      href="https://www.pearlfisher.com/work/ocean-generation-brand-design-by-pearlfisher/"
                      className=""
                      title="Ocean Generation"
                      style={{
                        backgroundImage: `url(${Her9})`,
                      }}
                    ></a>
                  </div>
                  <div className="col-item-text">
                    <h4></h4>
                    <h5>Ocean Generation</h5>
                  </div>
                  <div className="col-item-link">
                    <a
                      href="https://www.pearlfisher.com/work/ocean-generation-brand-design-by-pearlfisher/"
                      title="Ocean Generation"
                    ></a>
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
                    <a
                      href="https://www.pearlfisher.com/work/hum-by-colgate/"
                      className=""
                      title="Hum by Colgate"
                      style={{
                        backgroundImage: `url(${Her9})`,
                      }}
                    ></a>
                  </div>
                  <div className="col-item-text">
                    <h4></h4>
                    <h5>Hum by Colgate</h5>
                  </div>
                  <div className="col-item-link">
                    <a
                      href="https://www.pearlfisher.com/work/hum-by-colgate/"
                      title="Hum by Colgate"
                    ></a>
                  </div>
                </div>
              </div>
              <div className="col-2">
                <div className="col-item-overlay">
                  <div className="col-item-background">
                    <a
                      href="https://www.pearlfisher.com/work/jo-loves/"
                      className=""
                      title="Jo Loves"
                      style={{
                        backgroundImage: `url(${Her9})`,
                      }}
                    ></a>
                  </div>
                  <div className="col-item-text">
                    <h4></h4>
                    <h5>Jo Loves</h5>
                  </div>
                  <div className="col-item-link">
                    <a
                      href="https://www.pearlfisher.com/work/jo-loves/"
                      title="Jo Loves"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="gallery-btn-container button-block-wrap">
          <Link to="/work">
            <Btn text="More Work" Icon={East} />
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
