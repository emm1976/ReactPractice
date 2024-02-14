import React from 'react'

function format(value: number) {
  if (value < 10) {
    return `0${value}`
  }
  return value
}

interface IDeadlineItemProps {
  value: number,
  text: string
}

export default function DeadlineItem({ value, text }: IDeadlineItemProps) {
  return (
    <div className='deadline-format'>
      <div>
        <h4>{format(value)}</h4>
        <span>{text}</span>
      </div>
    </div>
  )
}
