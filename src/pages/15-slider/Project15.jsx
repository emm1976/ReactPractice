import React from 'react'
import data from './data'
import SlideItem from './components/SlideItem'

export default function Project15 () {
  const [counter, setCounter] = React.useState(0)

  // const [slides, setSlides] = React.useState(data)
  const [slides] = React.useState(data)

  const slideElements = slides.map(item => {
    return (
      <SlideItem key={item.id} id={item.id} img={item.img} counter={counter} />
    )
  })

  return (
    <section className='slider--container'>
      <div className='slider-container'>{slideElements}</div>
      <div className='btn-container'>
        <button
          type='button'
          className='prevBtn'
          style={{
            display: counter > 0 ? 'block' : 'none'
          }}
          onClick={() => setCounter(oldValue => oldValue - 1)}
        >
          prev
        </button>
        <button
          type='button'
          className='nextBtn'
          style={{
            display: counter < 4 - 1 ? 'block' : 'none'
          }}
          onClick={() => setCounter(oldValue => oldValue + 1)}
        >
          next
        </button>
      </div>
    </section>
  )
}
