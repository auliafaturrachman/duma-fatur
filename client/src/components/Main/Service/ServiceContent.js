import React from "react"
import { Col, Image } from "react-bootstrap"

const ServiceContent = ({ data }) => {
  const item = data.desc ?  `${data.title} \n ${data.desc}` : data.title;

  return (
    <Col sm={6} lg={3}>
      <div className="service-content-info">
        <Image src={`/image/Service/${data.image}.png`} alt={data.image} />
        <div className="service-content-description">
          <p>
            {item}
          </p>
        </div>
      </div>
    </Col>
  )
}

export default ServiceContent