import React from 'react'

export default function QuestionItem ({
  show,
  questionTitle,
  clickBtn,
  questionText
}) {
  return (
    <article className={'question' + (show ? ' question--show-text' : '')}>
      <div className='question-title'>
        <p>{questionTitle}</p>
        <button type='button' className='question-btn' onClick={clickBtn}>
          <span className='plus-icon'>
            <i className='far fa-plus-square' />
          </span>
          <span className='minus-icon'>
            <i className='far fa-minus-square' />
          </span>
        </button>
      </div>
      <div className='question-text'>
        <p>{questionText}</p>
      </div>
    </article>
  )
}
