import React from 'react'
import { Row, Col } from 'react-bootstrap'

const PostLink = ({ post }) => (
  <details className="card">
    <summary className="card-body">
      <Row className="align-items-center">
        <Col xs="5" sm="3" md="2" className="mb-3 mb-md-0">
          <img style={{maxWidth: "100%", padding: "1em", background: "var(--color-white)"}} src={post.frontmatter.teaser} alt={post.frontmatter.reference} />
        </Col>
        <Col xs="11" sm="9">
          <h4 className="summary__text m-0">{post.frontmatter.title}</h4>
          <small>
            {post.frontmatter.date} &bull; 
            <a href={post.frontmatter.url} target="_blank" rel="noopener noreferrer">
              {post.frontmatter.reference}
            </a>
          </small>
        </Col>
      </Row>
    </summary>
    <div className="card-body">
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  </details>
)

export default PostLink
