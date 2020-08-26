import React from 'react'
import { Badge } from 'react-bootstrap'

const QuestionLink = ({ post }) => (
  <details className="card bg-white">
    <summary className="card-body">
      <h4 className="summary__text m-0">{post.frontmatter.question}</h4>
      <Badge variant="light" className="d-inline-flex">{post.frontmatter.category}</Badge>
    </summary>
    <div className="card-body">
      <p dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  </details>
)

export default QuestionLink
