import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import ServiceContent from "./Service/ServiceContent";

const Service = () => {
  const datas = [
    {
      "image": "Service_1",
      "title": "Easy Returns",
      "desc": "Up To 10 Days"
    },
    {
      "image": "Service_2",
      "title": "In-Store Experience",
      "desc": "at Duma Flagship Store"
    },
    {
      "image": "Service_3",
      "title": "Worldwide Delivery",
      "desc": ""
    },
    {
      "image": "Service_4",
      "title": "Personal Shopper",
      "desc": "& Style Advisor"
    },
  ];
  return (
    <Row className="row-section service-section">
      <Col>
        <div className="service-header">
          <h2 className="service-title">Our Services</h2>
        </div>
        <div className="service-content">
          <Container fluid>
            <Row className="row-section">
              {datas.map((data, i) => {
                return <ServiceContent data={data} key={i}/>
              })}
            </Row>
          </Container>
        </div>
      </Col>
    </Row>
  )
}

export default Service