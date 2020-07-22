import React from 'react'
import { Link, FormattedMessage, injectIntl } from 'gatsby-plugin-intl'
import LogoImg from '@assets/snapscreen-logo--text.svg'

const SnapscreenLogo = () => {
  return (
    <Link to="/" className="navbar-brand" title="Welcome to Snapscreen">
      <span className="sr-only"><FormattedMessage id="companyName" /></span>
      <img className="brand-logo" src={LogoImg} alt="Snapscreen Logo" />
    </Link>
  )
}

export default injectIntl(SnapscreenLogo)
