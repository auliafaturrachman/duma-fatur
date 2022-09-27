import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"

import PickCarousel from "./Pick/PickCarousel";

const Pick = () => {
  return (
    <Row className="pick-section row-section">
      <Col>
        <div className="pick-header">
          <h2>Our Picks</h2>
        </div>
        <div className="pick-content">
          <Container fluid>
            <Row>
              <Col>
                <PickCarousel />
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="pick-footer">
                  <Button variant="primary" size="lg">VIEW ALL PRODUCTS</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Col>
    </Row>
  )
}

export default Pick