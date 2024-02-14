import React from 'react'

interface ButtonCounterProps {
  caption: string,
  clickHandler: () => void
}

const ButtonCounter = ({ caption, clickHandler }: ButtonCounterProps) => {
  return (
    <button type='button' className='btnCounter' onClick={clickHandler}>
      {caption}
    </button>
  )
}

export default ButtonCounter
