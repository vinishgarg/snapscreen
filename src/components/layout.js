/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl } from 'gatsby-plugin-intl'
import CustomNavbar from '@components/navbar'
import Footer from '@components/block/footer'

import 'modern-normalize/modern-normalize.css'
import '../scss/styles.scss'
// import 'font-awesome/css/font-awesome.css'

const Layout = ({ children, intl }) => {
  return (
    <React.Fragment>
      <CustomNavbar siteTitle={intl.formatMessage({ id: "title" })} />
      <main id="main">{children}</main>
      <Footer />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default injectIntl(Layout)
