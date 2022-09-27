import React from "react"
import { Row, Col, Image } from "react-bootstrap"
import { Link } from "react-router-dom"

const CollectionTwo = () => {
  return (
    <Row className="row-section collection-section collection-two-section">
      <Col md={6}>
        <Link to="#">
          <Image src={"/image/CollectionTwo/CollectionTwo_1.jpg"} alt="CollectionTwo_1" fluid />
        </Link>
      </Col>
      <Col md={6}>
        <Link to="#">
          <Image src={"/image/CollectionTwo/CollectionTwo_2.jpg"} alt="CollectionTwo_2" fluid />
        </Link>
      </Col>
    </Row>
  )
}

export default CollectionTwo