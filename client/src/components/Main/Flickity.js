import React from "react"
import { Row, Col, Image } from "react-bootstrap"

const Flickity = () => {
  return (
    <Row className="row-section">
      <Col>
        <Image src={"/image/Flickity.png"} alt="Flickity" fluid />
      </Col>
    </Row>
  )
}

export default Flickity