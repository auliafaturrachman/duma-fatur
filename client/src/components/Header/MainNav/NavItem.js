import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";

import NavDropdownItem from "./NavDropdownItem";

const NavItem = ({ data }) => {
  return (
    <Nav.Item>
      {!data.content ? 
        (
          <Nav.Link href="#">
            {data.color ? 
              <span style={{"color": data.color}}>{data.title}</span>
            : data.title}
          </Nav.Link>
        )
      :
        (
          <NavDropdown title={data.title} id={`collasible-nav-${data.title}`}>
            {data.content.map((content, i) => {
              return <NavDropdownItem content={content} key={i} />
            })}
          </NavDropdown>
        )
      }
    </Nav.Item>
  )
}


export default NavItem