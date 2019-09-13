import React from 'react'
import { Link, FormattedMessage, injectIntl } from 'gatsby-plugin-intl'

const SnapscreenLogo = () => {
  return (
    <Link to="/" className="navbar-brand" title="Welcome to Snapscreen">
      <span className="sr-only"><FormattedMessage id="companyName" /></span>
      <img className="brand-logo" src="/snapscreen-logo--text.svg" alt="The Snapscreen Logo" />
    </Link>
  )
}

export default injectIntl(SnapscreenLogo)
