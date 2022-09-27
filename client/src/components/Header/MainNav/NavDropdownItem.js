import React from "react"
import { NavDropdown } from "react-bootstrap";

const NavDropdownItem = ({ content }) => {
  return !content.subContent ?
  (
    <NavDropdown.Item href="#">{content.title}</NavDropdown.Item>
  ) 
  :
  (
    <NavDropdown title={content.title} id={`collasible-nav-${content.title}`} className="sub-dropdown">
      {content.subContent.map((sub, i) => {
        return  <NavDropdown.Item href="#">{sub.title}</NavDropdown.Item>
      })}
    </NavDropdown>
  ) 
}

export default NavDropdownItem