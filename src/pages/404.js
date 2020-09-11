import React from 'react'
import { FormattedMessage, injectIntl, Link } from 'gatsby-plugin-intl'
import { Container, Row, Col, Jumbotron, Image } from 'react-bootstrap'
import Layout from '@components/layout'
import SEO from '@components/helper/seo'
import ErrorImg from '@assets/404.gif'

const ErrorPage = ({ intl }) => {
    return (
      <Layout>
        <SEO
          lang={intl.locale}
          title={`404: ${intl.formatMessage({ id: "page.notfound.title" })}`}
          description={intl.formatMessage({ id: "page.notfound.description" })}
        />
        <Jumbotron>
          <Container>
            <Row>
              <Col xs="12" lg={{ span: 6, order: 2 }} className="ml-auto">
                <h1 className="display-2 mb-4 py-4">
                  <strong><FormattedMessage id="page.notfound.title" /></strong>
                </h1>
                <p className="lead">
                  <FormattedMessage id="page.notfound.description" />
                  {" "}
                  <span role="img" aria-label="Winking Smiley">😞</span>
                </p>
                <div className="pt-4">
                  <Link to="/" className="btn btn-primary btn-lg">
                    <FormattedMessage id="action.goBack" />
                  </Link>
                </div>
              </Col>
              <Col xs="12" lg={{ span: 5, order: 1 }} className="mt-3">
                <Image src={ErrorImg} width={600} fluid alt="Error 404" />
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </Layout>
    )
  }
export default injectIntl(ErrorPage)
