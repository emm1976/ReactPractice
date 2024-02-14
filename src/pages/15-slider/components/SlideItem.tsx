import React from 'react'

interface ISlideItemProps {
  id: number,
  img: string,
  counter: number
}

export default function SlideItem({ id, img, counter }: ISlideItemProps) {
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
