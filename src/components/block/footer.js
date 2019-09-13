import React from 'react'
import { Nav, Container, Row, Col } from 'react-bootstrap'
import { Link, FormattedMessage, injectIntl } from 'gatsby-plugin-intl'
import LanguageSelector from '@components/element/LanguageSelector'

const Footer = () => {
  return (
    <footer className="footer bg-light">
      <Container as="section">
        <Row>
          <Col xs="12" lg="6" className="text-center text-lg-left my-auto">
            <Nav as="ul" className="list-inline">
              <li>
                <Link to="/" className="nav-link p-1">Home</Link>
              </li>
              <li>
                <Link to="/about/" className="nav-link p-1">
                  <FormattedMessage id="navigation.about" />
                </Link>
              </li>
            </Nav>
            <LanguageSelector />
            <p className="d-inline-flex text-muted small mb-4 mb-lg-0">
              &copy;&nbsp;<FormattedMessage id="companyName" />
              &nbsp;{new Date().getFullYear()}.
              &nbsp; <FormattedMessage id="footer.copyright" />
            </p>
          </Col>
          <Col xs="12" lg="6" className="text-center text-lg-right my-auto">
            <ul className="list-inline mb-0">
              <li className="list-inline-item mr-3">
                <a href="https://github.com/snpscrn" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-github fa-2x fa-fw"></i>
                </a>
              </li>
              <li className="list-inline-item mr-3">
                <a href="https://www.facebook.com/snapscreen/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-facebook fa-2x fa-fw"></i>
                </a>
              </li>
              <li className="list-inline-item mr-3">
                <a href="https://twitter.com/snapscreen_com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-twitter fa-2x fa-fw"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/company/snapscreen/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin fa-2x fa-fw"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default injectIntl(Footer)
