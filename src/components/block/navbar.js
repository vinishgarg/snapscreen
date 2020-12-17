import React from 'react'
import { Link, FormattedMessage, injectIntl } from 'gatsby-plugin-intl'
import { Container, Navbar, Nav } from 'react-bootstrap'
import SnapscreenLogo from '../element/snapscreenLogo'
import AppStoreBadge from '../../assets/Download_on_the_App_Store_Badge.svg'

const CustomNavbar = ({ intl }) => {

  const menu = [
    {
      label: intl.formatMessage({ id: "main.navigation.vision" }),
      link: 'vision',
    },
    {
      label: intl.formatMessage({ id: "main.navigation.solution" }),
      link: 'solution',
    },
    {
      label: intl.formatMessage({ id: "main.navigation.business" }),
      link: 'business',
    },
    {
      label: intl.formatMessage({ id: "main.navigation.contact" }),
      link: 'contact',
    }
  ]

  return (
    <header className="navbar__wrapper">
      <Navbar collapseOnSelect expand="sm" id="site-navbar">
        <Container>
          <SnapscreenLogo />
          <a className="sr-only sr-only-focusable nav-link" href="#main">
            <FormattedMessage id="action.skipNavigation" />
          </a>
          <div>
            <a href="https://apps.apple.com/us/app/snapscreen/id1529063457" className="mt-2 mt-sm-0 ml-md-2">
              <AppStoreBadge />
            </a>
            <Navbar.Toggle aria-controls="top-navbar-nav" />
          </div>
          <Navbar.Collapse id="top-navbar-nav">
            <Nav as="ul" className="ml-md-auto">
              {menu.map(function(item, i) {
                return (
                  <li key={i} className="nav-item">
                    <Link to={"/" + item.link} className="nav-link">
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
