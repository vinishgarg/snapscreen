import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import HubspotMeeting from './hubspotMeeting'

import FOXLogo from '../../assets/clients/FOX_logo.png'

const OurStars = () => {
  return (
    <section className="call-to-action text-center">
      <Container>
        <Row>
          <Col xs="12" md="10" lg="8" xl="8" className="mx-auto">
              <h2 className={"mb-2"}><strong>Thanks, FOX Sports! You’re our first Star!</strong></h2>
              <Image width="120" className="my-3" src={FOXLogo} alt="FOX Sports" />
              <ul className="list-inline text-center mx-auto my-3">
                <li className="list-inline-item mr-1">
                  <ion-icon name="star" size="large" style={{ color: "gold" }} />
                </li>
                <li className="list-inline-item mr-1">
                  <ion-icon name="star" size="large" style={{ color: "#cccccc" }} />
                </li>
                <li className="list-inline-item mr-1">
                  <ion-icon name="star" size="large" style={{ color: "#cccccc" }} />
                </li>
              </ul>
              <p className={"lead mb-4"}>
                How about You are our next Star? <strong>Go for it! Your bright future starts
                with a simple conversation.</strong> Reach out for us!
              </p>
              <HubspotMeeting actionText="Schedule a meeting" person="matthias" hubspotUser="matthias-grieder" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default OurStars
