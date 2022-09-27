import React from "react"
import { Form } from "react-bootstrap"

const Search = ({ handleCloseSearch, showSearch }) => {
  const showClass = showSearch ? "search-show" : "";

  return (
    <div id="search" className={`search ${showClass}`}>
      <div className="search-wrapper">
        <div className="search-searchBar">
          <Form className="search-form">
            <Form.Group className="form-group form-icon">
              <Form.Label>
                <i className="fa-solid fa-magnifying-glass"></i>
              </Form.Label>
            </Form.Group>  
            <Form.Group className="form-group search-bar">
              <Form.Control type="text" className="search-input" placeholder="Search..." />
            </Form.Group>          
            <button className="search-close" onClick={handleCloseSearch}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Search