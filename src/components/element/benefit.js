import React from 'react'
import { Card } from 'react-bootstrap'

const Benefit = ({ as, iconName, emphasize, text, small }) => (
  <Card as={as}>
    <Card.Header>
      <ion-icon name={iconName} size="large" />
    </Card.Header>
    <Card.Body>
      <h3 className="lead">
        <strong>{emphasize}</strong>
        {" "}
        {text}</h3>
      <small>{small}</small>
    </Card.Body>
  </Card>
)

export default Benefit
