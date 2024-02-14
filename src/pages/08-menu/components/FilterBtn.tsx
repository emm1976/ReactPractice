import React from 'react'

interface IFilterBtnProps {
  category: string,
  clickHandler: () => void
}

export default function FilterBtn({ category, clickHandler }: IFilterBtnProps) {
  return (
    <button
      type='button'
      className='filter-btn'
      data-id={category}
      onClick={clickHandler}
    >
      {category}
    </button>
  )
}
