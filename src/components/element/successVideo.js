import React from 'react'
import { FormattedMessage } from 'gatsby-plugin-intl'
import { Modal, Button, ResponsiveEmbed } from 'react-bootstrap'

class VideoModal extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.handleShow = this.handleShow.bind(this)
		this.handleClose = this.handleClose.bind(this)
		this.state = {
			show: false,
		}
	}
	handleClose() {
		this.setState({ show: false })
	}
	handleShow() {
		this.setState({ show: true })
	}

	render() {
		return (
			<React.Fragment>
				<Button variant="primary" size="lg" onClick={this.handleShow}>
					<FormattedMessage id="successVideo.action" />
					<i className="fa fa-fw fa-play-circle"></i>
        </Button>
				<Modal centered size="lg" show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton closeLabel="Close dialog">
						<Modal.Title>
							<strong><FormattedMessage id="successVideo.title" /></strong>
							<div className="lead">Snapscreen is integrated into Fox Sports mobile app.</div>
            </Modal.Title>
					</Modal.Header>
          <ResponsiveEmbed aspectRatio="16by9">
            <iframe title="intro video" className="embed-responsive-item" width="600" height="338"
							src="https://www.youtube.com/embed/9bREhNfkCHw" frameBorder="0" allowFullScreen
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </ResponsiveEmbed>
				</Modal>
			</React.Fragment>
		)
	}
}

export default VideoModal
