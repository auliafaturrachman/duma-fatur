import React from "react"
import { Form, Button } from "react-bootstrap"

const Newsletter = () => {
  return (
    <div className="footer-newsletter">
      <div className="newsletter-header">
        <h2 className="newsletter-title">Newsletter</h2>
      </div>
      <div className="newsletter-content">
        <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
      </div>
      <Form id="newsletter-form" className="newsletter-form">
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Button variant="primary" size="lg" type="submit">
          Subscribe
        </Button>
      </Form>
    </div>
  )
}

export default Newsletter