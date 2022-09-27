import React from "react"
import Announcement from "./Announcement"
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"

const PageContainer = () => {
  return (
    <>
      <Announcement/>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}

export default PageContainer