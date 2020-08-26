import React from 'react'
import { Link } from 'gatsby-plugin-intl'
import { Container, Row, Col } from 'react-bootstrap'

const GetStarted = () => {
  return (
    <section className="call-to-action text-center">
      <Container>
        <Row>
          <Col xs lg="9" xl="8" className="mx-auto">
              <h2 className={"mb-2"}><strong>Become enthusiastic!</strong></h2>
              <p className={"lead mb-4"}>
                Try Snapscreen, share a demo clip with any of your friends. We are happy to get your feedack!
              </p>
              <Link to="/try" className="btn btn-primary btn-lg">
                Try it now
              </Link>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default GetStarted
