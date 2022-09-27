import React from "react"
import { Row, Col, Button } from "react-bootstrap"

const CollectionOne = () => {
  const datas = [];
  const title = [
    "KIDS",
    "HOME LIVING",
    "MOST WANTED",
    "SALE"
  ];

  for (let i = 0; i < 4; i++) {
    let data = {};
    data.class = "collection-one-content collection-one-flex";
    data.image = `url("/image/CollectionOne/CollectionOne_${i+1}.jpg")`;
    data.button = title[i];

    datas.push(data);
  }

  return (
    <Row className="row-section collection-section collection-one-section">
      {datas.map((data, i) => {
        return (
          <Col as="a" className={data.class} style={{"backgroundImage": data.image}} key={i}>
            <div className="collection-one-info">
              <Button variant="primary">{data.button}</Button>
            </div>
          </Col>
        )
      })}
    </Row>
  )
}

export default CollectionOne