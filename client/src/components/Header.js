import React, { useState, useEffect } from "react"

import Search from "./Header/Search"
import HeaderWrapper from "./Header/HeaderWrapper"

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleCloseSearch = (e) => {
    e.preventDefault();
    setShowSearch(false);
  }

  const handleShowSearch = () => setShowSearch(true);

  useEffect(() => {
    const headerSection = document.getElementById("header-section")
    const sticky = headerSection.offsetTop;

    const handlerSticky = () =>{
      setIsSticky(window.pageYOffset >= sticky);
    }

    const watchScroll = () => {
      window.addEventListener("scroll", handlerSticky);
    }
    watchScroll();

    return () => {
      window.removeEventListener("scroll", handlerSticky);
    }
  });

  return (
    <>
      <header id="header-section" className={`header-section ${!isSticky ? "header-transparent" : ""}`}>
        <HeaderWrapper handleShowSearch={handleShowSearch} />
        <Search handleCloseSearch={handleCloseSearch} showSearch={showSearch} />
      </header>
    </>
  )
}

export default Header