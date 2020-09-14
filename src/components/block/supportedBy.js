import React from 'react'
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl'
import { Container, Row, Col, Image } from 'react-bootstrap'

import TechstarsLogo from '../../assets/partners/Techstars_logo.png'
import AWSLogo from '../../assets/partners/AWS_logo.jpg'

const SupportedBy = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col xs="12" lg="12" className="mx-auto text-center">
            <h3 className="lead divided">
              <strong><FormattedMessage id="block.supportedBy.title" /></strong>
            </h3>
            <Image className="m-2 p-3 grayscale" src={TechstarsLogo} alt="Techstars" fluid width={200} />
            <Image className="m-2 p-3 grayscale" src={AWSLogo} alt="Austria Wirtschaftsservice" fluid width={240} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default injectIntl(SupportedBy)
