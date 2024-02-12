import React from 'react'

export default function FilterBtn ({ category, onClick }) {
  return (
    <button
      type='button'
      className='filter-btn'
      data-id={category}
      onClick={onClick}
    >
      {category}
    </button>
  )
}
