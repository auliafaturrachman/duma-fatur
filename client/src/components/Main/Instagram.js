import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import InstagramCarousel from "./Instagram/InstagramCarousel"

const Instagram = () => {
  return (
    <Row className="row-section instagram-section">
      <Col>
        <div className="instagram-header">
          <h2 className="instagram-title">Follow us on Instagram ↓</h2>
        </div>
        <div className="instagram-content">
          <Container fluid>
            <Row>
              <Col>
                <InstagramCarousel />
              </Col>
            </Row>
          </Container>
        </div>
      </Col>
    </Row>
  )
}

export default Instagram