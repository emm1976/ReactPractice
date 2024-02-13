import { useState } from 'react'
import ButtonCounter from './components/ButtonCounter'

export default function Project02 () {
  const [counter, setCounter] = useState(0)

  return (
    <div className='root-layout--main__div'>
      <section className='counter--container section-grid-center'>
        {/* <div> */}
        <h1>counter</h1>
        <span
          style={{
            color: counter > 0 ? 'blue' : counter < 0 ? 'red' : 'black'
          }}
        >
          {counter}
        </span>
        <div>
          <ButtonCounter
            caption='decrease'
            clickHandler={() => setCounter(predValue => predValue - 1)}
          />
          <ButtonCounter caption='reset' clickHandler={() => setCounter(0)} />
          <ButtonCounter
            caption='increase'
            clickHandler={() => setCounter(predValue => predValue + 1)}
          />
        </div>
        {/* </div> */}
      </section>
    </div>
  )
}
