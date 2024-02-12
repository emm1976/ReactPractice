import React from 'react'

export default function SlideItem ({ id, img, counter }) {
  return (
    <div
      className='slide'
      style={{
        left: `${(id - 1) * 100}%`,
        transform: `translateX(-${counter * 100}%`
      }}
    >
      <img src={img} className='slider--slide-img' alt='' />
      <h1>{id}</h1>
    </div>
  )
}
