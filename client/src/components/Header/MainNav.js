import React from "react";
import Nav from "react-bootstrap/Nav";
import NavItem from "./MainNav/NavItem";

const MainNav = () => {
  const datas = [
    {
      "title": "New In"
    },
    {
      "title": "Category",
      "content": [
        {
          "title": "Clothing",
          "subContent": [
            {
              "title": "Top"
            },
            {
              "title": "Bottom"
            },
            {
              "title": "Outerwear"
            },
            {
              "title": "Dress"
            }
          ],
        },
        {
          "title": "Accessories"
        },
        {
          "title": "Home Living"
        },
        {
          "title": "Kids"
        }
      ]
    },
    {
      "title": "Most Wanted"
    },
    {
      "title": "Gifting"
    },
    {
      "title": "Shop All"
    },
    {
      "title": "SALE",
      "color": "red"
    },
  ];

  return (
    <Nav className="navbar navbar-expand-lg main-nav">
      {datas.map((data, i) => {
        return <NavItem data={data} key={i} />
      })}
    </Nav>
  );
}

export default MainNav;
