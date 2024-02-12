import React from 'react'
// import './App.css'

export default function Project02 () {
  const [counter, setCounter] = React.useState(0)

  return (
    <section className='counter--container'>
      <div className='container'>
        <h1>counter</h1>
        <span
          style={{
            color: counter > 0 ? 'blue' : counter < 0 ? 'red' : 'black',
            fontSize: '6rem',
            fontWeight: 'bold'
          }}
        >
          {counter}
        </span>
        <div className='button-container'>
          <button
            type='button'
            className='btnCounter'
            onClick={() => setCounter(predValue => predValue - 1)}
          >
            decrease
          </button>
          <button type='button' className='btnCounter' onClick={() => setCounter(0)}>
            reset
          </button>
          <button
            type='button'
            className='btnCounter'
            onClick={() => setCounter(predValue => predValue + 1)}
          >
            increase
          </button>
        </div>
      </div>
    </section>
  )
}
