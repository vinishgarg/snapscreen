import React from 'react'
import { graphql } from 'gatsby'
import { FormattedMessage, injectIntl, Link } from 'gatsby-plugin-intl'
import { Container, Row, Col, Jumbotron } from "react-bootstrap"
import Layout from '../components/layout'
import SEO from "../components/helper/seo"
import HubspotRequestForm from '../components/block/hubspotForm'

import ogImg from '../assets/image/og_home.jpg'

function Privacy({ intl, data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "page.privacy.title" })}
        description={intl.formatMessage({ id: "page.privacy.description" })}
        keywords={[`privacy`, `data`, `personal`, `cookies`, `purpose`, `profile`, `contact`]}
        ogImage={ogImg}
      />
      <Jumbotron className="blog-post">
        <Container>
          <Row>
            <Col xs="12" md="10" lg="9" className="ml-auto mr-auto">
              <h1 className="display-2 mb-4 py-4">
                <strong><FormattedMessage id="page.privacy.title" /></strong>
              </h1>
              <p className="lead">
                <strong><FormattedMessage id="page.privacy.description" /></strong>
                {" "}
                <FormattedMessage id="page.privacy.text" />
              </p>
              <p><small>Last update: {frontmatter.date}</small></p>
              <div className="pt-4 text-center text-sm-left">
                <HubspotRequestForm
                  title="Report Privacy Violation"
                  actionText="Report violation"
                  formId="72eb91b6-6663-489c-a81e-71e39b184572"
                  person="matthias"
                />
                <Link to="/contact" className="btn btn-link btn-lg mx-sm-2 mt-2 mt-sm-0">
                  <FormattedMessage id="action.contact" />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <section className="bg-light">
        <Container>
          <Row>
            <Col xs="12" md="10" lg="9" className="ml-auto mr-auto" as="article">
            <article
              dangerouslySetInnerHTML={{ __html: html }}
            />
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}

export default injectIntl(Privacy)

export const pageQuery = graphql`
  {
    markdownRemark(frontmatter: {id: {eq: "privacy"}}) {
      id
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      html
    }
  }
`
