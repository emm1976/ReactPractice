import React from 'react'

export default function TabItem ({ title, text, active }) {
  return (
    <div className={'tabs--content' + (active ? ' active' : '')}>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  )
}
