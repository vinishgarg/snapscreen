import React from 'react'
import { ResponsiveEmbed, Image } from 'react-bootstrap'
import { Offline, Online } from 'react-detect-offline'

import TelevisionImg from '../../assets/television.png'

const VideoStream = ({ id, autoplay, start, mute }) => {

  return (
    <>
      <Online>
        <div style={{position: 'relative'}} className="mb-5">
          <ResponsiveEmbed style={{position: 'relative', zIndex: 1, border: '8px solid #000000', background: '#000000'}} aspectRatio="16by9">
            <iframe title="intro video" className="embed-responsive-item" width="600" height="338"
              src={"https://www.youtube.com/embed/" + id + "?autoplay=" + autoplay + "&start=" + start + "&mute=" + mute} frameBorder="0" allowFullScreen
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" autoPlay />
          </ResponsiveEmbed>
          <Image style={{position: 'absolute', top: 0, left: 0, zIndex: 0}} fluid className="bg-black" src={TelevisionImg} alt="TV set" />
        </div>
      </Online>
      <Offline>
        <div className="text-center p-3" style={{position: 'relative', zIndex: 1, border: '2px solid #000000', background: '#000000'}}>
          <svg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 512 512'>
            <title>Offline</title>
            <path d='M93.72,183.25C49.49,198.05,16,233.1,16,288c0,66,54,112,120,112H320.37' style={{fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin:'round', strokeWidth:'32px'}} />
            <path d='M467.82,377.74C485.24,363.3,496,341.61,496,312c0-59.82-53-85.76-96-88-8.89-89.54-71-144-144-144-26.16,0-48.79,6.93-67.6,18.14' style={{fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth:'32px'}} />
            <line x1='448' y1='448' x2='64' y2='64' style={{fill:'none', stroke: '#fff', strokeLinecap: 'round', strokeMiterlimit:10, strokeWidth: '32px'}}/>
          </svg>
          <p className="lead text-center">
            <strong>You’re offline!</strong> Please connect to a network to see this video.
          </p>
        </div>
      </Offline>
    </>
  )
}

export default VideoStream
