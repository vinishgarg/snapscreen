import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const GetStarted = () => {
  return (
    <section className="call-to-action bg-light text-center">
      <Container>
        <Row>
          <Col xs lg="9" xl="8" className="mx-auto">
            <Card body className="shadow-lg">
              <h2 className={"mb-2"}>Ready to get started?</h2>
              <p className={"lead mb-4"}>Book a meeting with us and request a personal demo now!</p>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default GetStarted
