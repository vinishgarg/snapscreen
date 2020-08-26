import React from 'react'
import { FormattedMessage, Link } from 'gatsby-plugin-intl'
import { Container, Row, Col } from 'react-bootstrap'
import HubspotFeedbackForm from '@components/block/hubspotForm'

const GiveFeedback = () => {
  return (
    <section className="call-to-action text-center">
      <Container>
        <Row>
          <Col xs="12" md="10" lg="8" xl="8" className="mx-auto">
              <h2 className={"mb-2"}><strong>Give us Feedback!</strong></h2>
              <p className={"lead mb-4"}>
                Let us know how our product could help You in your business. What do you expect, miss or suggest?
                Please share Your thoughts with us.
              </p>
              <HubspotFeedbackForm
                title="Help us to become better!"
                actionText="Help us to become better."
                formId="db810d49-ed31-44b3-a79f-65f1c20b5c56"
                person="matthias"
              />
              <p className="mt-2 mb-0"><strong>Thank You.</strong></p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default GiveFeedback
