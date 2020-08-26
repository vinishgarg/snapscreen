import React from 'react'
import { Container } from 'react-bootstrap'

const SnapButton = () => (
  <div className="base__container">
    <Container>
      <h6>
        <span className="badge badge-secondary mr-2">New</span>
        <a
          href="https://xd.adobe.com/view/2251e36c-5a52-40b4-bfdb-17898e0582b2-7702/screen/bc4cf5ec-f619-4322-b8fe-5233191f7b6e/"
          className="d-inline-block">Discover TV</a>
      </h6>
      <div className="snap-button__keeper">
        <a href="https://xd.adobe.com/view/2251e36c-5a52-40b4-bfdb-17898e0582b2-7702/" className="snap-button shadow-sm">
          <span className="sr-only">Snap TV now</span>
        </a>
        <span className="snap-label">Snap TV</span>
      </div>
    </Container>
  </div>
)

export default SnapButton
