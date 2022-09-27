import React, { useState } from "react"
import { Modal, Button } from "react-bootstrap"

const Wishlist = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="wishlist-sticky hidden-phone">
        <button className="wishlist-card" onClick={handleShow}>
          <i className="fa-solid fa-heart"></i>
          <span>My Wishlist</span>
        </button>
      </div>

      <Modal 
        show={show} 
        onHide={handleClose} 
        animation={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">My Wishlist</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please login to save your wishlist across devices.</Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="outline-secondary" onClick={handleClose}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Wishlist