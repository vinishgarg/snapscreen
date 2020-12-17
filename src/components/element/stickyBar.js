import React from 'react'
import { Container, Button } from "react-bootstrap"
import AppStoreBadge from '../../assets/Download_on_the_App_Store_Badge.svg'

const StickyBar = () => (
  <div className="stickyBar">
    <Container>
      <div>Get our App, it’s free!</div>
      <AppStoreBadge />
    </Container>
  </div>
)

export default StickyBar
