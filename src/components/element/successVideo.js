import React from 'react'
import { FormattedMessage } from 'gatsby-plugin-intl'
import { Modal, Button } from "react-bootstrap"

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
        </Button>
				<Modal centered size="lg" show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton closeLabel="Close dialog">
						<Modal.Title as="h5" className="font-weight-normal">
							<FormattedMessage id="successVideo.title" />
            </Modal.Title>
					</Modal.Header>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe title="intro video" className="embed-responsive-item" width="600" height="338"
							src="https://www.youtube.com/embed/9bREhNfkCHw" frameBorder="0" allowFullScreen
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </div>
				</Modal>
			</React.Fragment>
		)
	}
}

export default VideoModal
