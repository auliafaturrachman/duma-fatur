import React from "react"
import { Row, Col, Image, Button } from "react-bootstrap"

const Slideshow = () => {
  return (
    <Row className="row-section slideshow-section">
      <Col>
        <div className="image-container">
          <Image src={"/image/Slideshow_1.jpg"} className="hidden-phone" alt="Slideshow_1" fluid />
          <Image src={"/image/Slideshow_2.jpg"} className="hidden-desk" alt="Slideshow_2" fluid />
          <div className="slideshow-content">
            <Button variant="primary" size="lg">PART TWO</Button>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default Slideshow