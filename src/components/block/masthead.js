import React from 'react'
import Img from 'gatsby-image'
import { Container } from 'react-bootstrap'
import VideoModal from '@components/element/successVideo'
import MastheadFrontImg from '@assets/masthead-front.png'

class Masthead extends React.Component {
  render() {
    const { backgroundImage } = this.props
    return (
      <div className={"masthead"}>
        <Img fluid={backgroundImage} />
        <Container>
          <section className={"masthead-content text-white"}>
            <h1 className={"font-weight-lighter"}>The <strong>content sharing revolution</strong> for TV/OTT!</h1>
            <p className={"lead"}>Your fans and viewers snap, clip, share.</p>
            <VideoModal />
          </section>
          <div className={"overlay"}></div>
          <img className={"parallax"} src={MastheadFrontImg} alt="Snap, Clip, Share" />
        </Container>
      </div>
    )
  }
}

export default Masthead
