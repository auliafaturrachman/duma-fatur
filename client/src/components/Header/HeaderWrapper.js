import React, { useState } from "react"
import { Navbar } from "react-bootstrap"

import MainNav from "./MainNav"
import SecondaryNav from "./SecondaryNav"

const HeaderWrapper = ({ handleShowSearch }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  const showClass = show ? "show" : "" ;
  
  return (
    <Navbar className="navbar-header" expand="lg">
      <button 
        aria-controls="basic-navbar-nav" 
        type="button" 
        aria-label="Toggle navigation" 
        className="navbar-toggler collapsed"
        onClick={handleClick}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`justify-content-center navbar-collapse collapse ${showClass}`} id="basic-navbar-nav">
        <MainNav/>
      </div>
      <Navbar.Brand href="#">
        <img src={"/image/Logo.png"} alt="Duma Fatur logo"/>
      </Navbar.Brand>
      <SecondaryNav handleShowSearch={handleShowSearch} />
    </Navbar>
  )
}

export default HeaderWrapper