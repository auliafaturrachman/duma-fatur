import React from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"

const Announcement = () => {
  return (
    <section id="announcement" className="section-announcement">
      <Container fluid>
        <Row>
          <Col>
            <Link to="#" className="announcement-item">
              OFF DUTY : PART TWO | Ready to inspire your next vacay, off-duty →
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Announcement