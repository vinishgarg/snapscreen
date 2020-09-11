import React from 'react'
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl'
import { Container, Row, Col, Jumbotron, Image } from "react-bootstrap"
import Layout from '@components/layout'
import SEO from "@components/helper/seo"
import PopoverPerson from '@components/element/popoverPerson'
import HubspotMeeting from '@components/block/hubspotMeeting'

const Contact = ({ intl }) => {
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "page.contact.title" })}
        description={intl.formatMessage({ id: "page.contact.description" })}
      />
      <Jumbotron>
        <Container>
          <Row>
            <Col xs="12" md="10" lg="9" className="ml-auto mr-auto">
              <div className="lead-title"><FormattedMessage id={"page.contact.title"} /></div>
              <h1 className="display-2 mb-4 py-4">
                <strong><FormattedMessage id={"page.contact.headline"} /></strong>
              </h1>
              <p className="lead">
                <strong><FormattedMessage id={"page.contact.emphasize"} /></strong>
                {" "}
                <FormattedMessage id={"page.contact.text"} />
              </p>
              <div className="pt-4">
                <Row>
                  <Col xs="12" md="7" lg="6" className="media">
                    <Image fluid src="https://cdn2.hubspot.net/hubfs/7433878/team/willo.png" alt="Thomas Willomitzer" className="mr-4" />
                    <div className="media-body">
                      <h5 className="mt-3 mb-0"><PopoverPerson name="willo" trigger="name" /></h5>
                      <p><FormattedMessage id={"page.contact.cta"} /></p>
                    </div>
                  </Col>
                  <Col xs="12" md="5" lg="6" className="mb-4">
                    <HubspotMeeting
                      actionText={intl.formatMessage({ id: "action.bookMeeting" })}
                      person="willo"
                      hubspotUser="willo1"
                    />
                  </Col>
                </Row>
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
                <strong><FormattedMessage id={"page.contact.sayThanksEmphasize"} /></strong>{' '}
                <FormattedMessage id={"page.contact.sayThanks"} />
              </h2>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}

export default injectIntl(Contact)
