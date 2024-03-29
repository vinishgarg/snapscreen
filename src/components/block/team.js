import React from 'react'
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl'
import { Container, Row, Col, Image } from "react-bootstrap"
import PopoverPerson from '../element/popoverPerson'

const Team = ({ intl }) => {

  var team = [
    'willo',
    'matthias',
    'eugene',
  ]

  return (
    <section>
      <Container>
        <Row>
          <Col xs="12" sm="10" md="8" lg="8" className="mr-auto mb-4">
            <h2 className="h3">
              <strong><FormattedMessage id="block.team.emphasize" /></strong>
              {" "}
              <FormattedMessage id="block.team.text" />
            </h2>
          </Col>
        </Row>
        <Row className="list-unstyled">
          {team.map(function(person, index) {
            return (
              <Col key={index} xs="12" md="6" lg="4" className="my-4 media">
                <Image
                  fluid
                  roundedCircle
                  src={"https://f.hubspotusercontent20.net/hubfs/7433878/team/" + person + ".png"}
                  alt={intl.formatMessage({ id: "team." + person + ".nick" })}
                  className="mr-4"
                  style={{width: 100, height: 100}}
                />
                <div className="media-body">
                  <div className="h5 mt-2 mb-0">
                    <FormattedMessage id={"team." + person + ".name"} />
                  </div>
                  <div><FormattedMessage id={"team." + person + ".role"} /></div>
                  <PopoverPerson name={person} />
                </div>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default injectIntl(Team)
