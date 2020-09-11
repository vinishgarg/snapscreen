import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import { Container, Row, Col, Image } from 'react-bootstrap'
import MultiPlayer from '@components/element/audioPlayer'

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
      role: "Strategist and Venture Partner at Giant Leap Fund",
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
    <section>
      <Container>
        <Row className="list-unstyled">
          {testimonials.map(function(item, i) {
            return (
              <Col key={i} xs="12" md="6" lg="4" className="my-4 media">
                <div style={{position: 'relative'}}>
                  <Image
                    fluid
                    roundedCircle
                    src={item.imgSrc}
                    alt={item.imgAlt}
                    className="mr-4 bg-light"
                    style={{width: 100, height: 100}}
                  />
                  <div style={{position: 'absolute', right: 8, top: 0}}>
                    <MultiPlayer imgSrc={item.imgSrc} urls={[ item.audioSrc ]} />
                  </div>
                </div>
                <div className="media-body">
                  <div className="h5 mt-2 mb-0 text-dark">
                    {item.name}
                  </div>
                  <div>{item.role}</div>
                </div>
              </Col>
            )
          })}

        </Row>
      </Container>
    </section>
  )
}

export default injectIntl(Testimonials)
