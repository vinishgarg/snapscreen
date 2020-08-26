import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import { Container, Row, Col, Jumbotron, Button } from "react-bootstrap"
import Layout from '@components/layout'
import SEO from "@components/helper/seo"

const Styleguide = ({ intl }) => {
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "page.styleguide.title" })}
        description={intl.formatMessage({ id: "page.styleguide.description" })}
      />
      <Jumbotron className="mb-0">
        <Container>
          <Row>
            <Col xs="12" md="10" lg="9" className="ml-auto mr-auto">
              <h1 className="display-1 my-4 py4">Display 1</h1>
              <h2 className="display-2 my-4 py4">Display 2</h2>
              <h3 className="display-3 my-4 py4">Display 3</h3>
              <h4 className="display-4 my-4 py4">Display 4</h4>
              <p className="lead mb-5">
                <strong>A lead paragraph is the opening paragraph</strong> of an article, essay, book chapter,
                or other written work that summarizes its main ideas.
              </p>
              <Button variant="primary mr-2">Recommended Action</Button>
              <Button variant="outline-primary">Outline recommended</Button>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </Layout>
  )
}

export default injectIntl(Styleguide)
