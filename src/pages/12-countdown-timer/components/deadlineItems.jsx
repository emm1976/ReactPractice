import React from 'react'
import { oneDay, oneHour, oneMinute } from '../constants'

function format (value) {
  if (value < 10) {
    return (value = `0${value}`)
  }
  return value
}

export default function DeadlineItems (props) {
  return (
    <>
      <div className='deadline-format'>
        <div>
          <h4 className='days'>{format(Math.floor(props.remainedTime / oneDay))}</h4>
          <span>days</span>
        </div>
      </div>

      <div className='deadline-format'>
        <div>
          <h4 className='hours'>
            {format(Math.floor((props.remainedTime % oneDay) / oneHour))}
          </h4>
          <span>hours</span>
        </div>
      </div>

      <div className='deadline-format'>
        <div>
          <h4 className='minutes'>
            {format(Math.floor((props.remainedTime % oneHour) / oneMinute))}
          </h4>
          <span>mins</span>
        </div>
      </div>

      <div className='deadline-format'>
        <div>
          <h4 className='seconds'>
            {format(Math.floor((props.remainedTime % oneMinute) / 1000))}
          </h4>
          <span>secs</span>
        </div>
      </div>
    </>
  )
}
