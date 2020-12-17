import React from 'react'
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl'
import { Container, Row, Col } from 'react-bootstrap'

import TechstarsLogo from '../../assets/partners/techstars_logo.svg'
import AWSLogo from '../../assets/partners/aws_logo.svg'

const SupportedBy = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col xs="12" lg="12" className="mx-auto text-center">
            <h3 className="lead divided">
              <strong><FormattedMessage id="block.supportedBy.title" /></strong>
            </h3>
            <TechstarsLogo style={{ height: 70}} className="m-2 p-3 svg" />
            <AWSLogo style={{ height: 70}} className="m-2 p-3 svg" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default injectIntl(SupportedBy)
