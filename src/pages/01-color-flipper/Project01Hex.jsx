import React from 'react'

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

function generateRandomHexColor () {
  let hexColor = '#'
  for (let i = 0; i < 6; i++) {
    hexColor += hex[Math.floor(Math.random() * hex.length)]
  }
  return hexColor
}

export default function Project01Hex () {
  const [color, setColor] = React.useState(generateRandomHexColor())

  return (
    <div className='color-flipper--container' style={{ background: color }}>
      <h2>
        background color : <span className='color'>{color}</span>
      </h2>
      <button type='button' onClick={() => setColor(generateRandomHexColor())}>
        click me
      </button>
    </div>
  )
}
