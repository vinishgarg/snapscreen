import React from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import { ToggleLayer, Transition, Arrow, useBreakpoint } from 'react-laag'
import { Container, Row, Col, Image } from "react-bootstrap"
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl'

const PopoverPerson = ({ name, trigger }) => {

  const intl = useIntl();
  const isMobile = useBreakpoint(575);

  return (
    <ToggleLayer
      ResizeObserver={ResizeObserver}
      renderLayer={({ isOpen, layerProps, arrowStyle, layerSide, close }) => (
        <Transition isOpen={isOpen}>
          {(isOpen, onTransitionEnd) => {
            return (
              <Container
                ref={layerProps.ref}
                {...layerProps}
                onTransitionEnd={onTransitionEnd}
                className="dialog"
                style={
                  isMobile
                    ? {
                        transform: `translateY(${isOpen ? 0 : 100}%)`,
                        transition: 'transform 0.2s',
                      }
                    : {
                        ...layerProps.style,
                        opacity: isOpen ? 1 : 0,
                        transition: 'opacity 0.2s',
                      }
                }
              >
                <button className="btn btn--close" onClick={close}>
                  <span className="sr-only">Close</span>
                </button>
                <Row>
                  <Col xs="12" className="media mb-3">
                    <Image fluid src={"https://cdn2.hubspot.net/hubfs/7433878/team/" + name + ".png"} alt={name} className="mr-4" width={46} height={46} />
                    <div className="media-body">
                      <h4 className="lead mb-0"><strong><FormattedMessage id={"team." + name + ".nick"} /></strong></h4>
                      <small><FormattedMessage id={"team." + name + ".role"} /></small>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">
                    <p><FormattedMessage id={"team." + name + ".about"} /></p>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col xs="9">
                    <a href={intl.formatMessage({ id: ( "team." + name + ".email" ) })} rel="nofollow" className="py-2 d-flex">
                      <FormattedMessage id={"team." + name + ".email"} />
                    </a>
                  </Col>
                  <Col xs="3">
                    <ul className="list-inline mb-0 text-md-right text-right ml-auto">
                      <li className="list-inline-item">
                        <a href={intl.formatMessage({ id: ( "team." + name + ".linkedIn" ) })} target="_blank" rel="noopener noreferrer">
                          <ion-icon name="logo-linkedin" size="large" />
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Row>

                {!isMobile && (
                  <Arrow
                    style={arrowStyle}
                    layerSide={layerSide}
                    backgroundColor="#ffffff"
                    borderWidth={1}
                    borderColor="#ffffff"
                    roundness={0.5}
                  />
                )}
              </Container>
            )
          }}
        </Transition>
      )}
      placement={{
        anchor: "TOP_LEFT",
        autoAdjust: true,
        snapToAnchor: true,
        triggerOffset: 16,
        scrollOffset: 80
      }}
      fixed={isMobile}
      closeOnOutsideClick
    >
      {({ triggerRef, toggle }) => (
        <button type="button" ref={triggerRef} className="btn btn-link btn--reset" onClick={toggle}>
        { trigger
          ?
            <FormattedMessage id={"team." + name + ".name"} />
          :
            <FormattedMessage id={"action.learnMore"} />
        }
        </button>
      )}
    </ToggleLayer>
  )
}

export default PopoverPerson
