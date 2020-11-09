import React from 'react'
import { Nav, Container, Row, Col } from 'react-bootstrap'
import { Link, FormattedMessage, injectIntl } from 'gatsby-plugin-intl'
import LanguageSelector from '../element/LanguageSelector'

const Footer = ({ intl }) => {

  const menu = [
    {
      label: intl.formatMessage({ id: "main.navigation.vision" }),
      link: 'vision',
    },
    {
      label: intl.formatMessage({ id: "footer.navigation.faq" }),
      link: 'faq',
    },
    {
      label: intl.formatMessage({ id: "footer.navigation.press" }),
      link: 'press',
    }
  ]

  const baseMenu = [
    {
      label: intl.formatMessage({ id: "footer.navigation.home" }),
      link: '',
    },
    {
      label: intl.formatMessage({ id: "footer.navigation.privacy" }),
      link: 'privacy',
    },
    {
      label: intl.formatMessage({ id: "footer.navigation.terms" }),
      link: 'terms',
    }
  ]

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xs="12" md="6" lg="6" className="mr-auto">
            <Nav as="ul" className="list-inline justify-content-center justify-content-md-start lead font-weight-bold">
              {menu.map(function(item, i) {
                return (
                  <li key={i}>
                    <Link to={"/" + item.link} className="nav-link">
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </Nav>
          </Col>
          <Col xs="12" md="6" lg="6" className="ml-auto my-2">
            <ul className="list-inline text-md-right text-center ml-auto">
              <li className="list-inline-item mr-3">
                <a href="https://github.com/snpscrn" target="_blank" rel="noopener noreferrer">
                  <ion-icon name="logo-github" size="large" />
                </a>
              </li>
              <li className="list-inline-item mr-3">
                <a href="https://twitter.com/snapscreen_com" target="_blank" rel="noopener noreferrer">
                  <ion-icon name="logo-twitter" size="large" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/company/snapscreen/" target="_blank" rel="noopener noreferrer">
                  <ion-icon name="logo-linkedin" size="large" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs="12" className="text-center text-md-left my-auto small">
            <LanguageSelector />
            <Nav as="ul" className="list-inline d-inline-flex justify-content-center justify-content-lg-start">
              {baseMenu.map(function(item, i) {
                return (
                  <li key={i}>
                    <Link to={"/" + item.link} className="nav-link">
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </Nav>
            <span className="d-inline-flex mx-3 mb-4 mb-lg-0">
              &copy;&nbsp;<FormattedMessage id="companyName" />
              &nbsp;{new Date().getFullYear()}. <FormattedMessage id="footer.copyright" />
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default injectIntl(Footer)
