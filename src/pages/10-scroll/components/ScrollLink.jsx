import React from 'react'

export default function ScrollLink (props) {
  return (
    <a href={`#${props.text}`} className='scroll-link' onClick={props.onClick}>
      {props.text}
    </a>
  )
}
