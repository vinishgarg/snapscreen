import React from 'react'
import { graphql } from 'gatsby'
import { injectIntl } from 'gatsby-plugin-intl'
import Layout from '@components/layout'
import SEO from '@components/helper/seo'
import Header from '@components/block/header'
import Masthead from '@components/block/masthead'

const IndexPage = ({ intl, data }) => {
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "title" })}
        keywords={[`clipshare`, `snapscreen`, `innovative`]}
      />
      <Header />
      <Masthead backgroundImage={data.file.childImageSharp.fluid} />
    </Layout>
  )
}

export default injectIntl(IndexPage)

export const data = graphql`
  query IndexQuery {
    file(relativePath: { eq: "masthead-bg.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
