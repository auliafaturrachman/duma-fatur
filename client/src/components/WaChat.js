import React, { useState } from "react"
import { Image } from "react-bootstrap"

const WaChat = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <div className="wa wa-sticky">
        <Image src={"/image/WA.png"} alt="WA" />
      </div>
      <div className={`wa-card wa-sticky hidden-phone ${show ? "show-wa-card" : "hide-wa-card"}`}>
        <div className="wa-content">
          <button className="wa-button-close" onClick={() => setShow(false)}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="wa-text">
            <p>Hi there! How can we help you? Tap here to chat with us.</p>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default WaChat