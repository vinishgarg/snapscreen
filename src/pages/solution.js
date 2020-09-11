import React from 'react'
import { FormattedMessage, injectIntl, Link } from 'gatsby-plugin-intl'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'
import Layout from '@components/layout'
import SEO from '@components/helper/seo'
import GiveFeedback from '@components/block/giveFeedback'
import UserJourney from '@components/block/userJourney'
import SupportedBy from '@components/block/supportedBy'
import Testimonials from '@components/block/testimonials'

const solutionPage = ({ intl }) => {
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "page.solution.title" })}
        description={intl.formatMessage({ id: "page.solution.description" })}
      />
      <Jumbotron>
        <Container>
          <Row>
            <Col xs="12" md="10" lg="9" className="mx-auto">
              <div className="lead-title"><FormattedMessage id="page.solution.title" /></div>
              <h1 className="display-2 mb-4 py-4">
                <strong><FormattedMessage id="page.solution.headline" /></strong>
              </h1>
              <p className="lead">
                <strong><FormattedMessage id="page.solution.emphasize" /></strong>
                {" "}
                <FormattedMessage id="page.solution.text" />
              </p>
              <div className="pt-4 text-center text-sm-left">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  <FormattedMessage id="action.contact" />
                </Link>
                <Link to="/business" className="btn btn-link btn-lg mx-sm-2 mt-2 mt-sm-0">
                  <FormattedMessage id="action.business" />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <UserJourney />
      <section>
        <Container>
          <Row>
            <Col xs="12" sm="10" md="8" lg="8" className="mr-auto mb-4">
              <h2 className="h3">
                <strong><FormattedMessage id={"block.testimonials.emphasize"} /></strong>{' '}
                <FormattedMessage id={"block.testimonials.text"} />
              </h2>
            </Col>
          </Row>
        </Container>
        <Testimonials />
      </section>
      <GiveFeedback />
      <SupportedBy />
    </Layout>
  )
}

export default injectIntl(solutionPage)
