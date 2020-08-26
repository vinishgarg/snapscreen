import React from 'react'
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl'
import { Container, Row, Col, Image } from 'react-bootstrap'
import UserJourneyImg from '@assets/use-case.png'

const UserJourney = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col xs="12" sm="9" md="8" className="mr-auto mb-4">
            <h2 className="h3">
              <strong><FormattedMessage id="block.userJourney.emphasize" /></strong>
              {" "}
              <FormattedMessage id="block.userJourney.text" />
            </h2>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="10" lg="9" className="mx-auto mb-4">
            <Image className="" fluid src={UserJourneyImg} alt="User Journey" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default injectIntl(UserJourney)
