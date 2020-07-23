import React from 'react'
import { Link, FormattedMessage, injectIntl } from 'gatsby-plugin-intl'
import { Container, Navbar, Nav } from 'react-bootstrap'
import SnapscreenLogo from '@components/element/snapscreenLogo'

const CustomNavbar = () => {
  return (
    <header className="navbar__wrapper">
      <Navbar collapseOnSelect expand="sm" id="site-navbar" variant="dark">
        <Container>
          <SnapscreenLogo />
          <a className="sr-only sr-only-focusable nav-link" href="#main">Skip to main content</a>
          <Navbar.Toggle aria-controls="top-navbar-nav" />
          <Navbar.Collapse id="top-navbar-nav">
            <Nav as="ul" className="ml-md-auto">
              <li className="nav-item">
                <Link to="/vision/" className="nav-link">
                  Vision
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/solution/" className="nav-link">
                  Solution
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/business/" className="nav-link">
                  Broadcaster
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact/" className="nav-link">
                  Get in touch
                </Link>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default injectIntl(CustomNavbar)
