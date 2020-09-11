import React from 'react'
import { graphql } from 'gatsby'
import { FormattedMessage, injectIntl, Link } from 'gatsby-plugin-intl'
import { Container, Row, Col, Jumbotron } from "react-bootstrap"
import Layout from '@components/layout'
import SEO from '@components/helper/seo'
import QuestionLink from '@components/element/questionLink'
import HubSpot from '@components/block/hubspotForm'

import ogImg from '@assets/image/og_home.jpg'

const About = ({
  intl,
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  // GET questions from .md files in src/faq
  const Questions = edges
    .filter(edge => !!edge.node.frontmatter.category) // Filter posts based on some criteria
    .map(edge => <li className="mb-2" key={edge.node.id}><QuestionLink post={edge.node} /></li>)
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "page.faq.title" })}
        description={intl.formatMessage({ id: "page.faq.description" })}
        keywords={[`help`, `faq`, `information`, `questions`]}
        ogImage={ogImg}
      />
      <Jumbotron>
        <Container>
          <Row>
            <Col xs="12" md="10" lg="9" className="ml-auto mr-auto">
              <h1 className="display-2 my-4 py-4">
                <strong><FormattedMessage id="page.faq.headline" /></strong>
              </h1>
              <p className="lead">
                <strong><FormattedMessage id="page.faq.emphasize" /></strong>
                {" "}
                <FormattedMessage id="page.faq.text" />
              </p>
              <div className="pt-4 text-center text-sm-left">
                <HubSpot
                  title={intl.formatMessage({ id: "action.askQuestion" })}
                  actionText={intl.formatMessage({ id: "action.askQuestion" })}
                  formId="713d7366-3f1a-4160-a2d0-d1ad9b015941"
                  person="matthias"
                />
                <Link to="/contact" className="btn btn-link btn-lg mx-sm-2 mt-2 mt-sm-0">
                  <FormattedMessage id="question.wantToKnowMore" />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <section>
        <Container>
          <Row>
            <Col xs="12" sm="10" md="8" lg="8" className="mr-auto mb-4">
              <h2 className="h3">
                <strong><FormattedMessage id="block.questions.emphasize" /></strong>
                {" "}
                <FormattedMessage id="block.questions.text" />
              </h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <ul className="list-unstyled">
                {Questions}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}

export default injectIntl(About)

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___relevance] }) {
      edges {
        node {
          id
          html
          excerpt(pruneLength: 250)
          frontmatter {
            category
            question
            relevance
          }
        }
      }
    }
  }
`
