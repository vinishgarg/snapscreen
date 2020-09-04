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
      <section id="sales">
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
      {/*
      <section className="bg-light" id="sales">
        <Container>
          <Row>
            <Col xs="12" lg="6" className="mr-auto mb-4">
              <h2 className="h3"><strong>Our Sales Professionals</strong> are happy to answer all your questions.</h2>
            </Col>
          </Row>
          <Row className="list-unstyled">
            <Col xs="12" lg="12" className="mx-auto my-4">
              <h3 className="lead mb-4"><strong>Australia</strong></h3>
              <Row>
                <Col xs="12" md="6" lg="4" className="mb-4 media">
                  <Image fluid src="https://cdn2.hubspot.net/hubfs/7433878/team/richard.png" alt="Richard Armstrong" className="mr-4" />
                  <div className="media-body">
                    <h5 className="mt-2 mb-0 text-dark">Richard Armstrong</h5>
                    <div><small>Managing Partner, Australia <span role="img" aria-label="Australia">🇦🇺</span></small></div>
                    <small><a href="mailto:richard.armstrong@snapscreen.com" rel="nofollow" className="">richard.armstrong@snapscreen.com</a></small>
                  </div>
                </Col>
                <Col xs="12" md="6" lg="4" className="mb-4 media">
                  <Image fluid src="https://cdn2.hubspot.net/hubfs/7433878/team/robert.png" alt="Robert Mittag" className="mr-4" />
                  <div className="media-body">
                    <h5 className="mt-2 mb-0 text-dark">Robert Mittag</h5>
                    <div><small>Managing Partner, Australia <span role="img" aria-label="Australia">🇦🇺</span></small></div>
                    <small><a href="mailto:robert.mittag@snapscreen.com" rel="nofollow" className="">robert.mittag@snapscreen.com</a></small>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="list-unstyled">
            <Col xs="12" lg="12" className="mx-auto my-4">
              <h3 className="lead mb-4"><strong>North America</strong></h3>
              <Row>
                <Col xs="12" md="6" lg="4" className="mb-4 media">
                  <Image fluid src="https://cdn2.hubspot.net/hubfs/7433878/team/ken.png" alt="Ken Adelson" className="mr-4" />
                  <div className="media-body">
                    <h5 className="mt-2 mb-0 text-dark">Ken Adelson</h5>
                    <div><small>Managing Partner, North America <span role="img" aria-label="USA">🇺🇸</span></small></div>
                    <small><a href="mailto:stefano.dipersio@snapscreen.com" rel="nofollow" className="">stefano.dipersio@snapscreen.com</a></small>
                  </div>
                </Col>
                <Col xs="12" md="6" lg="4" className="mb-4 media">
                  <Image fluid src="https://cdn2.hubspot.net/hubfs/7433878/team/terry.png" alt="Terry Lyons" className="mr-4" />
                  <div className="media-body">
                    <h5 className="mt-2 mb-0 text-dark">Terry Lyons</h5>
                    <div><small>Managing Partner, North America <span role="img" aria-label="USA">🇺🇸</span></small></div>
                    <small><a href="mailto:terry.lyons@snapscreen.com" rel="nofollow" className="">terry.lyons@snapscreen.com</a></small>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="list-unstyled">
            <Col xs="12" lg="12" className="mx-auto my-4">
              <h3 className="lead mb-4"><strong>Europe</strong></h3>
              <Row>
                <Col xs="12" md="6" lg="4" className="mb-4 media">
                  <Image fluid src="https://cdn2.hubspot.net/hubfs/7433878/team/stefano.png" alt="Stefano Di Persio" className="mr-4" />
                  <div className="media-body">
                    <h5 className="mt-2 mb-0 text-dark">Stefano Di Persio</h5>
                    <div><small>Managing Partner, Italy <span role="img" aria-label="Italy">🇮🇹</span></small></div>
                    <small><a href="mailto:stefano.dipersio@snapscreen.com" rel="nofollow" className="">stefano.dipersio@snapscreen.com</a></small>
                  </div>
                </Col>
                <Col xs="12" md="6" lg="4" className="mb-4 media">
                  <Image fluid src="https://cdn2.hubspot.net/hubfs/7433878/team/miguel.png" alt="Miguel Gomez" className="mr-4" />
                  <div className="media-body">
                    <h5 className="mt-2 mb-0 text-dark">Miguel Gomez</h5>
                    <div><small>Managing Partner, Spain <span role="img" aria-label="Spain">🇪🇸</span></small></div>
                    <small><a href="mailto:miguel.gomez@snapscreen.com" rel="nofollow" className="">miguel.gomez@snapscreen.com</a></small>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      */}
    </Layout>
  )
}

export default injectIntl(Contact)
