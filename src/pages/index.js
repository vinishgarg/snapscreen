import React from 'react'
import { FormattedMessage, injectIntl, Link } from 'gatsby-plugin-intl'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'
import ReactTypingEffect from '@components/vendor/react-typing-effect/src/lib/'
import Layout from '@components/layout'
import SEO from '@components/helper/seo'
import OurInnovation from '@components/block/ourInnovation'
import Blockquote from '@components/element/blockquote'
import SupportedBy from '@components/block/supportedBy'

import ogImg from '@assets/image/og_home.jpg'

const IndexPage = ({ intl }) => {
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "title" })}
        keywords={[`innovation`, `television`, `streaming`, `marketing`]}
        ogImage={ogImg}
      />
      <Jumbotron>
        <Container>
          <Row>
            <Col xs="12" md="10" lg="9" className="ml-auto mr-auto">
              <div className="lead-title"><FormattedMessage id="page.home.title" /></div>
              <h1 className="display-2 mb-4 py-4">
                <strong><FormattedMessage id="page.home.headlinePre" /></strong>
                {' '}
                <span className="text-primary">
                  <ReactTypingEffect
                    speed={30}
                    typingDelay={1000}
                    text={
                      [
                        intl.formatMessage({ id: "page.home.type1" }),
                        intl.formatMessage({ id: "page.home.type2" }),
                        intl.formatMessage({ id: "page.home.type3" }),
                        intl.formatMessage({ id: "page.home.type4" }),
                        intl.formatMessage({ id: "page.home.type5" }),
                        intl.formatMessage({ id: "page.home.type6" })
                      ]
                    }
                  />
                </span>
                {' '}
                <strong><FormattedMessage id="page.home.headlinePost" /></strong>
              </h1>
              <p className="lead">
                <strong><FormattedMessage id="page.home.emphasize" /></strong>
                {" "}
                <FormattedMessage id="page.home.text" />
              </p>
              <div className="pt-4 text-center text-sm-left">
                <Link to="/try" className="btn btn-primary btn-lg">
                  <FormattedMessage id="action.try" />
                </Link>
                <Link to="/vision" className="btn btn-link btn-lg mx-sm-2 mt-2 mt-sm-0">
                  <FormattedMessage id="action.vision" />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <OurInnovation />
      <section className="">
        <Container>
          <Row>
            <Col xs="12" md="10" lg="9" className="mx-auto">
              <Blockquote
                role="Managing Director SportsTech"
                medium="Techstars"
                name="Todd Deacon"
                img="https://pbs.twimg.com/profile_images/999959454991962112/xiZF17uw_400x400.jpg"
              >
                <FormattedMessage id="blockquote.page.home" />
              </Blockquote>
            </Col>
          </Row>
        </Container>
      </section>
      <SupportedBy />
    </Layout>
  )
}

export default injectIntl(IndexPage)
