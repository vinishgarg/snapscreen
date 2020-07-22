import React from 'react'
import { FormattedMessage, injectIntl, Link } from 'gatsby-plugin-intl'
import { Container, Row, Col, Jumbotron, Image, Media, Card, ResponsiveEmbed } from "react-bootstrap"
import ReactTypingEffect from 'react-typing-effect'

import Layout from '@components/layout'
import SEO from '@components/helper/seo'
import Masthead from '@components/block/masthead'
import OurStars from '@components/block/ourStars'
import VideoModal from '@components/element/successVideo'
import VideoStream from '@components/element/videoStream'
import PopoverPerson from '@components/element/popoverPerson'
import Testimonial from '@components/element/testimonial'
import SupportedBy from '@components/block/supportedBy'

const IndexPage = ({ intl }) => {
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "title" })}
        keywords={[`clipshare`, `snapscreen`, `innovative`]}
      />
      {/*<Masthead />*/}
      <Jumbotron>
        <Container>
          <Row>
            <Col xs="12" lg={{span: '8', order: '2'}} className="ml-auto mr-auto">
              <h1 className="display-2 mb-4 py-4">
                <strong>Did You see this</strong>
                {' '}
                <span className="text-primary">
                  <ReactTypingEffect
                    speed={30}
                    typingDelay={1000}
                    text={
                      [
                        "epic moment",
                        "incredible news",
                        "amazing Slam-Dunk",
                        "hilarious laugh",
                        "awesome Touchdown",
                        "magic action"
                      ]
                    }
                  />
                </span>
                {' '}
                <strong>on TV?</strong>
              </h1>
              <p className="lead">
                <strong>You have 2 options to share what’s on TV:</strong> Either know a good fortune teller
                who knows when you need to record the TV screen with your phone. – OR –
                You use Snapscreen and never miss any favorite moment on TV ever again. Let us know which solution you prefer.
              </p>
              <div className="pt-4">
                <Link to="/try/" className="btn btn-primary btn-lg">
                  Try it now
                </Link>
                <Link to="/vision/" className="btn btn-link btn-lg mx-sm-2 mt-2 mt-sm-0">
                  Why we do this?
                </Link>
              </div>
            </Col>
            {/*
            <Col xs="12" lg={{span: '5', order: '1'}} className="mt-5">
              <VideoStream id="9bREhNfkCHw" autoplay="0" mute="0" />
              <p className="mt-4">
                Snapscreen is implemented and used as FOX Clips
                in the <a href="https://australia.rugby/news/2019/05/27/fox-clips-rugby-x" target="_blank" rel="noopener noreferrer">Rugby Explorer</a> App.
              </p>
            </Col>
            */}
          </Row>
        </Container>
      </Jumbotron>
      <section className="">
        <Container>
          <Row>
            <Col xs="12" lg="6" className="mr-auto mb-4">
              <h2 className="h3">
                <strong>Real use cases</strong> by specific roles.
              </h2>
            </Col>
          </Row>
          <div className="card-grid">
              <Testimonial role="Journalist" medium="FOX news" name="Joe Concha" img="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2020/02/696/392/JOE-CONCHA.jpg?ve=1&tl=1">
                <p>Snapscreen breaks a barrier in sharing media files in journalism. By snapping a TV getting a high quality clip feels like magic! Free speech at a new level.</p>
              </Testimonial>
              <Testimonial role="Journalist" medium="Techchrunch" name="Zack Whittaker" img="https://crunchbase-production-res.cloudinary.com/image/upload/w_400,h_400,c_thumb,g_faces/arqrabrudwyofg3sb2pl">
                <p>Snapscreen breaks a barrier in sharing media files in journalism. By snapping a TV getting a high quality clip feels like magic! Free speech at a new level.</p>
              </Testimonial>
          </div>
        </Container>
      </section>
      <SupportedBy />
    </Layout>
  )
}

export default injectIntl(IndexPage)
