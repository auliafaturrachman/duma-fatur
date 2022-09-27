import React from "react"
import { Container, Row, Col } from "react-bootstrap";

import Links from "./Footer/Links"
import Newsletter from "./Footer/Newsletter"
import Aside from "./Footer/Aside"

const Footer = () => {
  const datas = [
    {
      "header": "About Us",
      "items": [
        "About Duma",
        "Find Us",
        "Careers"
      ],
    },
    {
      "header": "Info",
      "items": [
        "Returns and Exchanges",
        "Terms and Conditions",
        "Shipping Information"
      ],
    },
    {
      "header": "Customer Care",
      "items": [
        "Anteraja Tracking",
        "Contact Us"
      ],
    },
  ];
  return (
    <footer className="footer">
      <Container className="footer-wrapper" fluid>
        <Row>
          {datas.map((data, i) => {
            return <Links data={data} key={i}/>
          })}
          <Col className="footer-block" md={3}>
            <Newsletter/>
          </Col>
        </Row>
        <Row>
          <Col>
            <Aside/>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer