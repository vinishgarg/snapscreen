import React, { useState } from 'react'
import { Toast } from 'react-bootstrap'

const Notification = () => {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  return (
    <div className="toasts" aria-live="polite" aria-atomic="true">
      <Toast show={showA} onClose={toggleShowA} delay={3000}>
        <Toast.Header closeLabel={"Close notification"}>
          <strong className="mr-auto"><span role="img" aria-label="Alert">🔔</span> Company Update</strong>
          <small>20 Dez 2020</small>
        </Toast.Header>
        <Toast.Body>
          <p>Get our Snapscreen{" "}
          <a href="https://apps.apple.com/us/app/snapscreen/id1529063457">App for iOS</a>
          {" "}or test our{" "}
          <a href="https://snapscreen.com/">mobile Web App</a>.</p>
          <a href="https://apps.apple.com/us/app/snapscreen/id1529063457" className="btn btn-primary">
            Download App
          </a>
        </Toast.Body>
      </Toast>
    </div>
  )
}

export default Notification
