import React from "react"
import propTypes from "prop-types"

const MasonryLayout = (props) => {
  const columnWrapper = {}
  const result = []

  for (let i = 0; i < props.columns; i++) {
    columnWrapper[`column${i}`] = []
  }

  for (let i = 0; i < props.children.length; i++) {
    const columnIndex = i % props.columns
    columnWrapper[`column${columnIndex}`].push(
      <div style={{ marginBottom: `${props.gap}px` }}>{props.children[i]}</div>
    )
  }

  for (let i = 0; i < props.columns; i++) {
    result.push(
      <div
        style={{
          marginLeft: `${i > 0 ? props.gap : 0}px`,
          flex: 1,
        }}
      >
        {columnWrapper[`column${i}`]}
      </div>
    )
  }

  return <div style={{ display: "flex" }}>{result}</div>
}

export default MasonryLayout

MasonryLayout.propTypes = {
  children: propTypes.arrayOf(propTypes.element),
  column: propTypes.number.isRequired,
  gap: propTypes.number.isRequired,
}

MasonryLayout.defaultProps = {
  children: [],
  column: 2,
  gap: 10,
}
