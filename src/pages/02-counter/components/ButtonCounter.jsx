import React from 'react'

const ButtonCounter = ({ caption, clickHandler }) => {
  return (
    <button type='button' className='btnCounter' onClick={clickHandler}>
      {caption}
    </button>
  )
}

export default ButtonCounter
