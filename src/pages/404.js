import React from "react"
import { Link } from "gatsby"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"
import { Container, Jumbotron } from "react-bootstrap"
import Layout from "@components/layout"
import SEO from "@components/helper/seo"

const ErrorPage = ({ intl }) => {
    return (
      <Layout>
        <SEO
          lang={intl.locale}
          title={`404: ${intl.formatMessage({ id: "title" })}`}
        />
        <Container>
          <Jumbotron className="text-center">
            <img className="img-fluid mb-4" src="/404.gif" alt="Error 404" />
            <h1><FormattedMessage id="notfound.title" /></h1>
            <p className="lead"><FormattedMessage id="notfound.description" /></p>
            <Link to="/"><FormattedMessage id="action.goBack" /></Link>
          </Jumbotron>
        </Container>
      </Layout>
    )
  }
export default injectIntl(ErrorPage)
