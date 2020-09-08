import React from 'react'
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl'
import { Container, Row, Col } from 'react-bootstrap'
import HubspotFeedbackForm from '@components/block/hubspotForm'

const GiveFeedback = ({ intl }) => {
  return (
    <section className="call-to-action text-center">
      <Container>
        <Row>
          <Col xs="12" md="10" lg="8" xl="8" className="mx-auto">
              <h2 className={"mb-2"}><strong><FormattedMessage id="block.giveFeedback.title" /></strong></h2>
              <p className={"lead mb-4"}>
                <FormattedMessage id="block.giveFeedback.text" />
              </p>
              <HubspotFeedbackForm
                title={intl.formatMessage({ id: "block.giveFeedback.cta" })}
                actionText={intl.formatMessage({ id: "block.giveFeedback.cta" })}
                formId="db810d49-ed31-44b3-a79f-65f1c20b5c56"
                person="matthias"
              />
              <p className="mt-2 mb-0">
                <strong><FormattedMessage id="block.giveFeedback.thx" /></strong>
              </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default injectIntl(GiveFeedback)
