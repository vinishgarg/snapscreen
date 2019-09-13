import React from 'react'
import { Link, FormattedMessage, injectIntl } from 'gatsby-plugin-intl'
import { Container, Navbar, Nav } from 'react-bootstrap'
import SnapscreenLogo from '@components/element/snapscreenLogo'

const CustomNavbar = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="sm" id="site-navbar" className="navbar navbar-dark bg-secondary">
        <Container>
          <SnapscreenLogo />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav as="ul" className="ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about/" className="nav-link">
                  <FormattedMessage id="navigation.about" />
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
