import React from "react"
import { Container } from "react-bootstrap"

import Slideshow from "./Main/Slideshow"
import CollectionOne from "./Main/CollectionOne"
import CollectionTwo from "./Main/CollectionTwo"
import Pick from "./Main/Pick"
import Flickity from "./Main/Flickity"
import Service from "./Main/Service"
import Instagram from "./Main/Instagram"

const Main = () => {
  return (
    <main id="main">
      <Container className="main-wrapper" fluid>
        <Slideshow/>
        <CollectionOne/>
        <CollectionTwo/>
        <Pick/>
        <Flickity/>
        <Service/>
        <Instagram/>
      </Container>
    </main>
  )
}

export default Main