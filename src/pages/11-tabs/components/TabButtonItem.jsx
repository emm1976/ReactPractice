import React from 'react'

export default function TabButtonItem ({ title, active, handleClick }) {
  return (
    <button
      type='button'
      className={'tab-btn' + (active ? ' active' : '')}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}
