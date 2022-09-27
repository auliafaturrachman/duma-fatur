import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const InstagramCarouselItem = ({ item }) => {
  return (
    <div className="item-wrapper">
      <Link to="#" className="item-image">
        <Image src={`/image/Instagram/${item}.jpg`} alt={item} fluid />
        <div className="item-icon">
          <i className="fab fa-instagram"></i>
        </div>
      </Link>
    </div>
  )
}

export default InstagramCarouselItem