import React from 'react'

export default function Section (props) {
  return (
    <section id={props.id} className='section'>
      <div className='title'>
        <h2>
          {props.text} <span>{props.spanText}</span>
        </h2>
      </div>
    </section>
  )
}
