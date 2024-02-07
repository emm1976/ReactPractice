import React from 'react'

export default function Question (props) {

  return (
    <article className={props.show ? 'question show-text' : 'question'}>
      <div className='question-title'>
        <p>{props.questionTitle}</p>
        <button type='button' className='question-btn' onClick={props.clickBtn}>
          <span className='plus-icon'>
            <i className='far fa-plus-square' />
          </span>
          <span className='minus-icon'>
            <i className='far fa-minus-square' />
          </span>
        </button>
      </div>
      <div className='question-text'>
        <p>{props.questionText}</p>
      </div>
    </article>
  )
}
