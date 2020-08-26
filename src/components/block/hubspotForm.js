import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import HubspotForm from 'react-hubspot-form'
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl'
import { Offline, Online } from 'react-detect-offline'

const HubspotRequestForm = ({ title, actionText, formId, person }) => {

  const intl = useIntl();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Button variant="primary" onClick={handleShow} className="btn btn-primary btn-lg mt-2 mt-sm-0">
        {actionText}
    </Button>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <Offline><FormattedMessage id={"offline.text"} /></Offline>
            <Online>{title}</Online>
          </Modal.Title>
          <button className="btn btn--close" onClick={handleClose}>
            <span className="sr-only"><FormattedMessage id="action.close" /></span>
          </button>
        </Modal.Header>
        <Modal.Body className="">
          <Online>
            <HubspotForm
               portalId='7433878'
               formId={formId}
               onSubmit={() => console.log('Submit!')}
               onReady={(form) => console.log('Form ready!')}
               loading={<div>Loading...</div>}
            />
          </Online>
          <Offline>
            <div className="text-center p-5">
              <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 512 512'>
                <title><FormattedMessage id={"offline.status"} /></title>
                <path d='M93.72,183.25C49.49,198.05,16,233.1,16,288c0,66,54,112,120,112H320.37' style={{fill: 'none', stroke: '#000', strokeLinecap: 'round', strokeLinejoin:'round', strokeWidth:'32px'}} />
                <path d='M467.82,377.74C485.24,363.3,496,341.61,496,312c0-59.82-53-85.76-96-88-8.89-89.54-71-144-144-144-26.16,0-48.79,6.93-67.6,18.14' style={{fill: 'none', stroke: '#000', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth:'32px'}} />
                <line x1='448' y1='448' x2='64' y2='64' style={{fill:'none', stroke: '#000', strokeLinecap: 'round', strokeMiterlimit:10, strokeWidth: '32px'}}/>
              </svg>
            </div>
            <p className="lead text-center">
              <strong><FormattedMessage id={"offline.cta"} /></strong>
            </p>
          </Offline>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <p><FormattedMessage id="question.emailInstead" /></p>
          <a href={intl.formatMessage({ id: ( "team." + person + ".email" ) })} rel="nofollow">
            <FormattedMessage id={"team." + person + ".email"} />
          </a>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default HubspotRequestForm
