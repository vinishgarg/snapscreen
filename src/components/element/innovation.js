import React from 'react'
import { Card } from 'react-bootstrap'

const Innovation = ({ as, imgSrc, imgAlt, emphasize, text, small }) => (
  <Card as={as}>
    <Card.Img variant="top" src={imgSrc} alt={imgAlt} />
    <Card.Body>
      <h3 className="lead">
        <strong>{emphasize}</strong>
        {" "}
        {text}</h3>
      <small>{small}</small>
    </Card.Body>
  </Card>
)

export default Innovation
