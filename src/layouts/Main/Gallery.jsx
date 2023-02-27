import React, { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import "./Gallery.css"
import { Btn } from "../../components/Button"
import { East } from "@mui/icons-material"
import { getHomeData } from "../../utils/apis"

const splitItems = (items) => {
  const half = Math.ceil(items.length / 2)
  const firstHalf = items.slice(0, half)
  const secondHalf = items.slice(half)
  return [firstHalf, secondHalf]
}
const Gallery = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getHomeData().then((res) => {
      setData(res)
      setLoading(false)
    })
  }, [])

  const [leftItems, rightItems] = useMemo(() => {
    if (data.length > 0) {
      return splitItems(data)
    } else {
      return [[], []]
    }
  }, [data])

  if (loading) {
    return <div>Loading...</div>
  }

  console.log(rightItems)

  return (
    <section className="gallery-wrapper">
      <div className="gallery-container">
        <div className="back-to-top">&nbsp;</div>
        <div className="gallery">
          {data && (
            <>
              <div className="gallery-item">
                <div className="gallery-row">
                  <div className="gallery-col-1">
                    <GalleryChild item={leftItems[0][0]} />
                  </div>
                  <div className="gallery-col-2">
                    <GalleryChild item={leftItems[0][1]} />
                  </div>
                </div>
              </div>
            </>
          )}
          {data && (
            <>
              <div className="gallery-item">
                <div className="gallery-row">
                  <div className="gallery-col-3">
                    <GalleryChild item={rightItems[0][0]} />
                  </div>
                  <div className="gallery-col-4">
                    <GalleryChild item={rightItems[0][1]} />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="gallery-btn-container">
          <Link to="/work">
            <Btn text="More Work" Icon={East} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Gallery

const GalleryChild = ({ item }) => {
  return (
    <div className="col-item-overlay">
      <div className="col-item-background">
        <Link
          to={`/work/${item.name}`}
          title={item.name}
          style={{ backgroundImage: `url(${item?.images?.[0]})` }}
        ></Link>
      </div>
      <div className="col-item-text" id="col-item-textid">
        <h5>{item.name}</h5>
      </div>
      <div className="col-item-link">
        <Link to={`/work/${item.name}`} title={item.name}></Link>
      </div>
    </div>
  )
}
