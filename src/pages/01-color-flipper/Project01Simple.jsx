import { useState } from 'react'

const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025']

export default function Project01Simple () {
  const [color, setColor] = useState('#f1f5f8')

  return (
    <div className='collor-flipper--container' style={{ background: color }}>
      <h2>
        background color :{' '}
        <span style={{ color: 'var(--clr-primary-5)' }}>{color}</span>
      </h2>
      <button
        type='button'
        onClick={() =>
          setColor(colors[Math.floor(Math.random() * colors.length)])
        }
      >
        click me
      </button>
    </div>
  )
}
