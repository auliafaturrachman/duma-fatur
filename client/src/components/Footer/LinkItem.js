import React from "react"
import { Link } from "react-router-dom"

const LinkItem = ({ item }) => {
  return (
    <li className="link-list-item">
      <Link to="#">
        {item}
      </Link>
    </li>
  )
}

export default LinkItem