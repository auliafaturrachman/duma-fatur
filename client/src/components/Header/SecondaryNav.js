import React from "react"
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import OffCanvas from "./SecondaryNav/OffCanvas";

const SecondaryNav = ({ handleShowSearch }) => {
  const datas = {
      "title": "IDR",
      "content": [
        {
          "title": "Indonesian Rupiah (IDR)"
        },
        {
          "title": "US Dollar (USD)"
        }
      ]
    };

  return (
    <>
      <Nav className="navbar secondary-nav hidden-phone">
        <NavDropdown title={datas.title} id={`collasible-nav-${datas.title}`}>
          {datas.content.map((data, i) => {
            return <NavDropdown.Item href="#" key={i}>{data.title}</NavDropdown.Item>
          })}
        </NavDropdown>
        <Nav.Item>
          <Nav.Link href="#">
            Account
          </Nav.Link>
        </Nav.Item>
        <button className="nav-link toggle-search" onClick={handleShowSearch}>
          Search
        </button>
        <OffCanvas />
      </Nav>
      <Link to="#" className="link-mobile hidden-desk">
        <i className="fa-solid fa-user"></i>
      </Link>
      <Link to="#" className="link-mobile hidden-desk" onClick={handleShowSearch}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </Link>
      <OffCanvas />
    </>
    
  )
}

export default SecondaryNav