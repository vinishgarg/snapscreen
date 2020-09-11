import React from 'react'
import { FormattedMessage, injectIntl, Link } from 'gatsby-plugin-intl'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'
import Layout from '@components/layout'
import SEO from '@components/helper/seo'
import VideoStream from '@components/element/videoStream'
import Blockquote from '@components/element/blockquote'
import OurBenefits from '@components/block/ourBenefits'
import OurStars from '@components/block/ourStars'
import HubspotRequestForm from '@components/block/hubspotForm'
import SupportedBy from '@components/block/supportedBy'

import ogImg from '@assets/image/og_business.jpg'

const businessPage = ({ intl }) => {
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "page.business.title" })}
        description={intl.formatMessage({ id: "page.business.description" })}
        keywords={[`engagement`, `viewers`, `reach`, `audience`, `community`, `deeplink`]}
        ogImage={ogImg}
      />
      <Jumbotron>
        <Container>
          <Row>
            <Col xs="12" md="10" lg="9" className="mx-auto">
              <div className="lead-title"><FormattedMessage id={"page.business.title"} /></div>
              <h1 className="display-2 mb-4 py-4">
                <strong><FormattedMessage id={"page.business.headline"} /></strong>
              </h1>
              <p className="lead">
                <strong><FormattedMessage id="page.business.emphasize" /></strong>
                {" "}
                <FormattedMessage id="page.business.text" />
              </p>
              <div className="pt-4 text-center text-sm-left">
                <HubspotRequestForm
                  title={intl.formatMessage({ id: "action.askQuestion" })}
                  actionText={intl.formatMessage({ id: "action.askQuestion" })}
                  formId="713d7366-3f1a-4160-a2d0-d1ad9b015941"
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
      <OurBenefits />
      <section>
        <Container>
          <Row>
            <Col xs="12" md="10" lg="8" className="mx-auto">
              <VideoStream id="9bREhNfkCHw" autoplay="0" mute="0" />
              <Blockquote
                role="Australian Rugby Hero"
                medium="FOX sports"
                name="Drew Mitchell"
              >
                <FormattedMessage id="blockquote.page.business" />
              </Blockquote>
            </Col>
          </Row>
        </Container>
      </section>
      <OurStars />
      <SupportedBy />
    </Layout>
  )
}

export default injectIntl(businessPage)
