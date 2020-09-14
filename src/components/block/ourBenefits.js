import React from 'react'
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl'
import { Container, Row, Col } from 'react-bootstrap'
import Benefit from '../element/benefit'

const OurBenefits = ({ intl }) => {

  const benefits = [
    {
      iconName: "finger-print-outline",
      label: "share"
    },
    {
      iconName: "rocket-outline",
      label: "video"
    },
    {
      iconName: "shuffle-outline",
      label: "habit"
    },
    {
      iconName: "shield-outline",
      label: "deepfakes"
    },
    {
      iconName: "megaphone-outline",
      label: "backchannel"
    },
    {
      iconName: "trending-up-outline",
      label: "distribution"
    }
  ]

  return (
    <section>
      <Container>
        <Row>
          <Col xs="12" sm="10" md="8" lg="8" className="mr-auto mb-4">
            <h2 className="h3">
              <strong><FormattedMessage id="block.benefits.emphasize" /></strong>
              {" "}
              <FormattedMessage id="block.benefits.text" />
            </h2>
          </Col>
        </Row>
        <Row>
          <Col as="ul" className="card-grid">
            {benefits.map(function(item, i) {
              return (
                <Benefit
                  as="li"
                  key={i}
                  iconName={item.iconName}
                  emphasize={intl.formatMessage({ id: "benefit." + item.label + ".emphasize" })}
                  text={intl.formatMessage({ id: "benefit." + item.label + ".text" })}
                  small={intl.formatMessage({ id: "benefit." + item.label + ".small" })}
                />
              )
            })}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default injectIntl(OurBenefits)
