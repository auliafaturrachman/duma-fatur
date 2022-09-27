import React from 'react'
import { Navbar, Offcanvas } from 'react-bootstrap'

const OffCanvas = () => {
  return (
    <>
      <Navbar.Toggle className="toggle-cart link-mobile" aria-controls={`offcanvasNavbar`}>
        <i className="fa-solid fa-bag-shopping"></i>
        <span className="hidden-phone"> (0)</span>
      </Navbar.Toggle>
        <Navbar.Offcanvas
        id={`offcanvasNavbar`}
        aria-labelledby={`offcanvasNavbar`}
        placement="end"
        className="cart-off-canvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbar`}>
            Cart
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Your cart is empty
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </>
  )
}

export default OffCanvas