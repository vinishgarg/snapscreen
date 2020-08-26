import React from 'react'
import { FormattedMessage, injectIntl, Link } from 'gatsby-plugin-intl'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'
import Layout from '@components/layout'
import SEO from '@components/helper/seo'
import VideoStream from '@components/element/videoStream'
import Blockquote from '@components/element/blockquote'
import Team from '@components/block/team'
import SupportedBy from '@components/block/supportedBy'

const visionPage = ({ intl }) => {
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "page.vision.title" })}
        description={intl.formatMessage({ id: "page.vision.description" })}
      />
      <Jumbotron>
        <Container>
          <Row>
            <Col xs="12" md="10" lg="9" className="ml-auto mr-auto">
              <div className="lead-title"><FormattedMessage id={"page.vision.title"} /></div>
              <h1 className="display-2 mb-4 py-4">
                <strong><FormattedMessage id="page.vision.headline" /></strong>
              </h1>
              <p className="lead">
                <strong><FormattedMessage id="page.vision.emphasize" /></strong>
                {" "}
                <FormattedMessage id="page.vision.text" />
              </p>
              <div className="pt-4 text-center text-sm-left">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  <FormattedMessage id="action.contact" />
                </Link>
                <Link to="/solution" className="btn btn-link btn-lg mx-sm-2 mt-2 mt-sm-0">
                  <FormattedMessage id="action.solution" />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Team />
      <section>
        <Container>
          <Row>
            <Col xs="12" md="10" lg="8" className="mx-auto">
              <VideoStream id="KeF4s-Dn5TI" autoplay="0" mute="0" />
              <Blockquote
                role="CEO and Founder"
                medium="Snapscreen"
                name="Thomas Willomitzer"
              >
                <FormattedMessage id="blockquote.page.vision" />
              </Blockquote>
            </Col>
          </Row>
        </Container>
      </section>
      <SupportedBy />
    </Layout>
  )
}

export default injectIntl(visionPage)
