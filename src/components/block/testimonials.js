import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

import annabelImg from '@assets/testimonials/annabel.jpg'
import annabelAudio from '@assets/testimonials/annabel.m4a'
import adamImg from '@assets/testimonials/adam.jpg'
import adamAudio from '@assets/testimonials/adam.m4a'
import scottImg from '@assets/testimonials/scott.jpg'
import scottAudio from '@assets/testimonials/scott.m4a'

const Testimonials = () => {

  const testimonials = [
    {
      name: "Annabel Acton",
      role: "Senior Partner at Kin Group",
      audioSrc: annabelAudio,
      imgSrc: annabelImg,
      imgAlt: "Annabel Acton"
    },
    {
      name: "Adam Milgrom",
      role: "Venture Partner at Giant Leap Fund",
      audioSrc: adamAudio,
      imgSrc: adamImg,
      imgAlt: "Adam Milgrom"
    },
    {
      name: "Scott Dinsdale",
      role: "Startup Mentor at Techstars",
      audioSrc: scottAudio,
      imgSrc: scottImg,
      imgAlt: "Scott Dinsdale"
    }
  ]

  return (
      <Container>
        <Row className="list-unstyled">
          {testimonials.map(function(item, i) {
            return (
              <Col key={i} xs="12" md="6" lg="4" className="my-4">
                <Card>
                  <Card.Body>
                    <div className="media">
                      <Image
                        fluid
                        roundedCircle
                        src={item.imgSrc}
                        alt={item.imgAlt}
                        className="mr-4 bg-light"
                        style={{width: 100, height: 100}}
                      />
                      <div className="media-body">
                        <div className="h5 mt-2 mb-0 text-dark">
                          {item.name}
                        </div>
                        <div>{item.role}</div>
                      </div>
                    </div>
                  </Card.Body>
                  <AudioPlayer
                    layout="horizontal-reverse"
                    autoPlay={false}
                    showJumpControls={false}
                    showDownloadProgress={false}
                    showFilledProgress={false}
                    src={item.audioSrc}
                    customAdditionalControls={[]}
                    customVolumeControls={[]}
                    customProgressBarSection={
                      [
                        RHAP_UI.VOLUME
                      ]
                    }
                  />
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
  )
}

export default injectIntl(Testimonials)
