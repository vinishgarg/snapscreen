import React from 'react'
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl'
import { Container, Row, Col } from 'react-bootstrap'
import Innovation from '@components/element/innovation'

const OurInnovation = ({ intl }) => {

  const innovations = [
    {
      imgSrc: "https://media.gettyimages.com/videos/young-woman-having-fun-while-watching-tv-at-night-video-id511903846?s=640x640",
      imgAlt: "Tune in with mobile",
      label: "snap"
    },
    {
      imgSrc: "https://burst.shopifycdn.com/photos/woman-holding-mobile-phone.jpg",
      imgAlt: "Tune in with mobile",
      label: "clip"
    },
    {
      imgSrc: "https://images.pond5.com/group-friends-checking-social-media-footage-075325073_iconl.jpeg",
      imgAlternative: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_683980724_2000133320009280290_347049.jpg",
      imgAlternative: "https://i.ytimg.com/vi/Z_W3NHaAoC0/maxresdefault.jpg",
      imgAlt: "Discover great moments of TV shared by viewers",
      label: "share"
    }
  ]

  return (
    <section>
      <Container>
        <Row>
          <Col xs="12" sm="10" md="8" lg="8" className="mr-auto mb-4">
            <h2 className="h3">
              <strong><FormattedMessage id="block.innovation.emphasize" /></strong>
              {" "}
              <FormattedMessage id="block.innovation.text" />
            </h2>
          </Col>
        </Row>
        <Row>
          <Col as="ul" className="card-grid">
            {innovations.map(function(item, i) {
              return (
                <Innovation
                  as="li"
                  key={i}
                  imgSrc={item.imgSrc}
                  imgAlt={item.imgAlt}
                  emphasize={intl.formatMessage({ id: "innovation." + item.label + ".emphasize" })}
                  text={intl.formatMessage({ id: "innovation." + item.label + ".text" })}
                  small={intl.formatMessage({ id: "innovation." + item.label + ".small" })}
                />
              )
            })}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default injectIntl(OurInnovation)
