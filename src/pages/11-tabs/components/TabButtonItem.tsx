import React from 'react'

interface ITabButtonItemProps {
  title: string,
  active: boolean,
  handleClick: () => void
}

export default function TabButtonItem({ title, active, handleClick }: ITabButtonItemProps) {
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
