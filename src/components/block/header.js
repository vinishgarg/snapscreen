import React from 'react'
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl'
import { Container } from 'react-bootstrap'

const Header = () => (
  <header className="navbar navbar-expand-lg navbar-light bg-white">
    <Container>
      <span className="navbar-brand font-weight-bold">
        <img className="brand-icon mr-3" src="/snapscreen-icon.svg" alt="The Snapscreen Icon" />
        <FormattedMessage id="title" />
      </span>
    </Container>
  </header>
)

export default injectIntl(Header)
