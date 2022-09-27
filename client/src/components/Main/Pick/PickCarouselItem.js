import React from "react"
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const PickCarouselItem = ({ data }) => {
  return (
    <div className="item-wrapper">
      <Link to="#" className="item-image">
        <Image src={`/image/Product/${data.image1}.jpg`} alt={data.image1} fluid />
        <Image src={`/image/Product/${data.image2}.jpg`} alt={data.image2} fluid />
      </Link>
      {
        data.itemLabel ? 
        (
          <div className="item-label-list">
            <span className="item-label">Sold out</span>
          </div>
        ) : 
        (<></>) 
      }
      <div className="item-info">
        <h2 className="item-title">{data.name}</h2>
        <div className="item-price">
          <span>{data.price}</span>
        </div>
        <div className="item-color">
          <div className="item-color-circle">
            <label className="radio" title={data.color} data-tooltip={data.color}></label>
          </div>
        </div>
        {
        data.backToStock ? 
          (
            <div className="item-back-in-stock">
              <span>Back In Stock</span>
            </div>
          ) : 
          (<></>) 
        }
      </div>
    </div>
  )
}

export default PickCarouselItem