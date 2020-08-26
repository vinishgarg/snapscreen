import React from 'react'
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl'
import { Container, Row, Col } from 'react-bootstrap'
import Benefit from '@components/element/benefit'

const OurInnovation = ({ intl }) => {

  const innovations = [
    {
      iconName: "phone-portrait-outline",
      label: "snap"
    },
    {
      iconName: "play-outline",
      label: "clip"
    },
    {
      iconName: "heart-outline",
      label: "share"
    }
  ]

  return (
    <section>
      <Container>
        <Row>
          <Col xs="12" sm="10" md="8" lg="8" className="mr-auto mb-4">
            <h2 className="h3">
              <strong><FormattedMessage id="block.innovation.emphasize" /></strong>
              {" "}
              <FormattedMessage id="block.innovation.text" />
            </h2>
          </Col>
        </Row>
        <Row>
          <Col as="ul" className="card-grid">
            {innovations.map(function(item, i) {
              return (
                <Benefit
                  as="li"
                  key={i}
                  iconName={item.iconName}
                  emphasize={intl.formatMessage({ id: "innovation." + item.label + ".emphasize" })}
                  text={intl.formatMessage({ id: "innovation." + item.label + ".text" })}
                  small={intl.formatMessage({ id: "innovation." + item.label + ".small" })}
                />
              )
            })}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default injectIntl(OurInnovation)
