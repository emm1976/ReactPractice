import React from 'react'
import './App.css'

export default function App () {
  const [counter, setCounter] = React.useState(0)

  return (
    <div className='App'>
      <main>
        <div className='container'>
          <h1>counter</h1>
          <span
            style={
              {
                color: counter > 0 ? 'blue' : counter < 0 ? 'red' : 'black',
                fontSize: '6rem',
                fontWeight: 'bold'
              }
            }
          >
            {counter}
          </span>
          <div className='button-container'>
            <button type='button' className='btn' onClick={() => setCounter(predValue => predValue - 1)}>
              decrease
            </button>
            <button type='button' className='btn' onClick={() => setCounter(0)}>
              reset
            </button>
            <button type='button' className='btn' onClick={() => setCounter(predValue => predValue + 1)}>
              increase
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
