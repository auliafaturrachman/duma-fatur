import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";

const SecondaryNavItem = ({ data, handleShowSearch }) => {

  return (
    <Nav.Item>
      {!data.content ? 
        (
          <Nav.Link href="#" onclick={data.title === "Search" ? handleShowSearch : "" }>
            {data.color ? 
              <span style={{"color": data.color}}>{data.title}</span>
            : data.title}
          </Nav.Link>
        )
      :
        (
          <NavDropdown title={data.title} id={`collasible-nav-${data.title}`}>
            {data.content.map((content, i) => {
              return <NavDropdown.Item href="#" key={i}>{content.title}</NavDropdown.Item>
            })}
          </NavDropdown>
        )
      }
    </Nav.Item>
  )
}


export default SecondaryNavItem