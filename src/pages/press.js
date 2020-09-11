import React from 'react'
import { graphql } from 'gatsby'
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'
import Layout from '@components/layout'
import SEO from '@components/helper/seo'
import PostLink from "@components/element/postLink"
import HubSpot from '@components/block/hubspotForm'

import ogImg from '@assets/image/og_home.jpg'

const Press = ({
  intl,
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  // SET LINKEDIN URL,
  const linkedInURL = 'https://www.linkedin.com/company/snapscreen/'
  // GET posts from .md files in src/press
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // Filter posts based on some criteria
    .map(edge => <li className="mb-2" key={edge.node.id}><PostLink post={edge.node} /></li>)
  return (
    <Layout>
      <SEO
        lang="en"
        title={intl.formatMessage({ id: "page.press.title" })}
        description={intl.formatMessage({ id: "page.press.description" })}
        keywords={[`articles`, `clippings`, `mentions`, `coverage`, `success`]}
        ogImage={ogImg}
      />
      <Jumbotron>
        <Container>
          <Row>
            <Col xs="12" md="10" lg="9" className="ml-auto mr-auto">
              <h1 className="display-2 my-4 py-4">
                <strong><FormattedMessage id="page.press.headline" /></strong>
              </h1>
              <p className="lead">
                <strong><FormattedMessage id="page.press.emphasize" /></strong>
                {" "}
                <FormattedMessage id="page.press.text" />
              </p>
              <div className="pt-4 text-center text-sm-left">
                <HubSpot
                  title="Receive Updates"
                  actionText="Subscribe for Updates"
                  formId="bbaa110a-c527-4d3f-8d51-cd6fdad4faa9"
                  person="matthias"
                />
                <a
                  href={linkedInURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-link btn-lg mx-sm-2 mt-2 mt-sm-0"
                >
                  <FormattedMessage id="action.followLinkedin" />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <section>
        <Container>
          <ul className="list-unstyled">
            {Posts}
          </ul>
        </Container>
      </section>
    </Layout>
  )
}

export default injectIntl(Press)

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {document: {eq: "press"}}}, sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          id
          html
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            url
            teaser
            reference
            title
          }
        }
      }
    }
  }
`
