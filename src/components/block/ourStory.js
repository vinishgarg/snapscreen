import React from 'react'
import { Link } from 'gatsby-plugin-intl'
import { Container, Row, Col, ResponsiveEmbed } from 'react-bootstrap'

const OurStars = () => {
  return (
    <section className="bg-white">
      <Container>
        <Row>
          <Col xs="12" xs="12" md="6" lg="5" className="">
            <h2 className="mb-4"><strong>Our story</strong></h2>
            <p>
              In 2014, Snapscreen Founder and CEO <PopoverPerson name="willo" trigger="name" /> was watching live TV and wanted to
              share a hilarious moment with friends. But short of predicting the future, he could not have recorded
              a video on his phone.
            </p>
            <p>
              Thomas wished there was an app that could identify what he was watching,
              then let him rewind to just before the punchline and share the moment on social media.
            </p>
            <Link to="/contact/" className="btn btn-primary btn-lg mt-2 mt-sm-0">Get in touch</Link>
            <Link to="/vision/" className="btn btn-link btn-lg">Our vision</Link>
          </Col>
          <Col xs="12" xs="12" md="6" lg="6" className="ml-auto my-4">
            <ResponsiveEmbed aspectRatio="16by9" className="shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/Q_fyBEvm1nE"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen />
            </ResponsiveEmbed>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default OurStars
