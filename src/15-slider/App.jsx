import React from 'react'
import './App.css'
import imgSlide1 from './img-1.jpeg'
import imgSlide4 from './person-1.jpeg'

export default function App () {
  const [counter, setCounter] = React.useState(0)

  console.log(counter)

  return (
    <div className='App'>
      <div className='slider-container'>
        <div
          className='slide'
          style={{
            left: `${0 * 100}%`,
            transform: `translateX(-${counter * 100}%`
          }}
        >
          <img src={imgSlide1} className='slide-img' alt='' />
          <h1>1</h1>
        </div>
        <div
          className='slide'
          style={{
            left: `${1 * 100}%`,
            transform: `translateX(-${counter * 100}%`
          }}
        >
          <h1>2</h1>
        </div>
        <div
          className='slide'
          style={{
            left: `${2 * 100}%`,
            transform: `translateX(-${counter * 100}%`
          }}
        >
          <h1>3</h1>
        </div>
        <div
          className='slide'
          style={{
            left: `${3 * 100}%`,
            transform: `translateX(-${counter * 100}%`
          }}
        >
          <div>
            <img src={imgSlide4} className='person-img' alt='' />
            <h4>susan doe</h4>
            <h1>4</h1>
          </div>
        </div>
      </div>
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
    </div>
  )
}
