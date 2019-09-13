import React from 'react'
import { Link, FormattedMessage, injectIntl } from 'gatsby-plugin-intl'
import { Container, Row, Col, Jumbotron } from "react-bootstrap"
import Layout from '@components/layout'
import SEO from "@components/helper/seo"

const About = ({ intl }) => {
  return (
    <Layout>
      <SEO lang={intl.locale} title={intl.formatMessage({ id: "page.about" })} />
      <Jumbotron className="mb-0">
        <Container>
          <Row>
            <Col xs="12" lg="9" className="mx-auto">
              <h1 className="display-4 my-4 py4">We’ll change peoples’ habits while watching TV or video streams.</h1>
              <p className="lead mb-5">
                Our technology recognizes TV in an instant. Snapscreen works with live TV, recorded TV and provides solutions for Broadcasters, Sports and Advertisers.
                Snapscreen turns the camera on a mobile device into a versatile tool to entertain, retain and engage viewers in a modern and intuitive way.
              </p>
              <Link to="/" className="btn btn-primary btn-lg">
                <FormattedMessage id="action.learn"></FormattedMessage>&nbsp;
                <strong><FormattedMessage id="title" /></strong></Link>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </Layout>
  )
}

export default injectIntl(About)
