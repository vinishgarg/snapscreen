import React from 'react'
import { Link, FormattedMessage, injectIntl } from 'gatsby-plugin-intl'
import { Container, Navbar, Nav } from 'react-bootstrap'
import SnapscreenLogo from '@components/element/snapscreenLogo'

const CustomNavbar = () => {

  const menu = [
    {
      label: 'Vision',
      link: 'vision',
    },
    {
      label: 'Solution',
      link: 'solution',
    },
    {
      label: 'Broadcaster',
      link: 'business',
    },
    {
      label: 'Get in touch',
      link: 'contact',
    }
  ]

  return (
    <header className="navbar__wrapper">
      <noscript>
        <p>Please enable javascript to see this page. Thanks</p>
      </noscript>
      <Navbar collapseOnSelect expand="sm" id="site-navbar" variant="dark">
        <Container>
          <SnapscreenLogo />
          <a className="sr-only sr-only-focusable nav-link" href="#main">Skip to main content</a>
          <Navbar.Toggle aria-controls="top-navbar-nav" />
          <Navbar.Collapse id="top-navbar-nav">
            <Nav as="ul" className="ml-md-auto">
              {menu.map(function(item, i) {
                return (
                  <li key={i} className="nav-item">
                    <Link to={"/" + item.link + "/"} className="nav-link">
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default injectIntl(CustomNavbar)
