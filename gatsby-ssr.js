import React from 'react'

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script src="https://unpkg.com/ionicons@5.1.2/dist/ionicons.js"></script>,
  ])
}
