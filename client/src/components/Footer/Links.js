import React from "react"
import { Col } from "react-bootstrap"

import LinkItem from "./LinkItem"

const Links = ({ data }) => {
  return (
    <Col md={3} className="footer-block">
      <h2 className="footer-title">{data.header}</h2>
      <ul className="link-list">
        {data.items.map((item, i) => {
          return <LinkItem item={item} key={i} />
        })}
      </ul>
    </Col>
  )
}

export default Links