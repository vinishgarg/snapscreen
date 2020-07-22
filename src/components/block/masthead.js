import React from 'react'
import { FormattedMessage, injectIntl, Link } from 'gatsby-plugin-intl'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'
import VideoModal from '@components/element/successVideo'
import MastheadFrontImg from '@assets/masthead-front.png'
import bgVideo from "@assets/depositphotos_197425898-stock-video-male-friends-gather-to-watch.mp4"

class Masthead extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      translateY: 0
    }
  }
  componentDidMount() {
    document.addEventListener('scroll', this.calculateTranslation)
  }

  compnentWillUnmount() {
    document.removeEventListener('scroll', this.calculateTranslation)
  }

  calculateTranslation = () =>
    this.setState(() => ({ translateY: window.scrollY / 4 }))

  render() {
    const { translateY } = this.state
    const transform = `translate3d(0, -${translateY}px, 0)`
    return (
      <section className={"masthead"}>
        <div className="videoLooper">
          <img className="parallax" src={MastheadFrontImg} alt="Snap, Clip, Share" />
          <video className="w-100" style={{ transform }} autoPlay>
            <source src={bgVideo}type="video/mp4" />
          </video>
          <div className="overlay"></div>
        </div>
        {/*<Img fluid={backgroundImage} />*/}
      </section>
    )
  }
}

export default injectIntl(Masthead)
