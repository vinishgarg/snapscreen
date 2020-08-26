import React from 'react'
import { Image } from 'react-bootstrap'

const Blockquote = ({ role, medium, name, img, children }) => (
  <div className="blockquote">
    {img
      ?
      <figure className="blockquote__image mb-5 mb-md-auto">
        <Image fluid roundedCircle src={img} alt={name} />
      </figure>
      : null
    }
    <div>
      <blockquote>
        <p>
          <span>“</span>
          {children}
          <span>”</span>
        </p>
      </blockquote>
      <p className="blockquote__info">
        <strong>{name}</strong>{', '}
        <span className="role">{role}</span>{' @ '}
        <span className="medium">{medium}</span>
      </p>
    </div>
  </div>
)

export default Blockquote
