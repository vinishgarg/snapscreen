import React from 'react'
import { Nav, Container, Row, Col } from 'react-bootstrap'
import { Link, FormattedMessage, injectIntl } from 'gatsby-plugin-intl'
import LanguageSelector from '@components/element/LanguageSelector'

const Footer = () => {
  return (
    <footer className="footer bg-light">
      <Container>
        <Row>
          {/*
          <Col xs="12" md="6" lg="8" className="mr-auto">
            <Nav as="ul" className="list-inline justify-content-center justify-content-md-start lead font-weight-bold">
              <li>
                <Link to="/about/" className="nav-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq/" className="nav-link">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/press/" className="nav-link">
                  Press
                </Link>
              </li>
              <li>
                <Link to="/developers/" className="nav-link">
                  Developers
                </Link>
              </li>
              <li>
                <Link to="/developers/" className="nav-link">
                  Investors
                </Link>
              </li>
            </Nav>
          </Col>
          */}
          <Col xs="12" md="6" lg="6" className="ml-auto my-2">
            <ul className="list-inline text-md-right text-center ml-auto">
              <li className="list-inline-item mr-3">
                <a href="https://github.com/snpscrn" target="_blank" rel="noopener noreferrer" className="text-dark">
                  <ion-icon name="logo-github" size="large" />
                </a>
              </li>
              <li className="list-inline-item mr-3">
                <a href="https://twitter.com/snapscreen_com" target="_blank" rel="noopener noreferrer" className="text-dark">
                  <ion-icon name="logo-twitter" size="large" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/company/snapscreen/" target="_blank" rel="noopener noreferrer" className="text-dark">
                  <ion-icon name="logo-linkedin" size="large" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs="12" className="text-center text-md-left my-auto small">
            <LanguageSelector />
            <Nav as="ul" className="list-inline d-inline-flex justify-content-center justify-content-lg-start ml-2">
              <li>
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li>
                <Link to="/sitemap/" className="nav-link">
                  Sitemap
                </Link>
              </li>
              <li>
                <Link to="/privacy/" className="nav-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-use/" className="nav-link">
                  Terms of Use
                </Link>
              </li>
            </Nav>
            <span className="d-inline-flex mb-4 mb-lg-0">
              &copy;&nbsp;<FormattedMessage id="companyName" />
              &nbsp;{new Date().getFullYear()}.
              &nbsp; <FormattedMessage id="footer.copyright" />
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default injectIntl(Footer)
