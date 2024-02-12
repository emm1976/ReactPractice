import React from 'react'

export default function GroceryItem (props) {
  return (
    <article className='grocery-item' data-id={props.id}>
      <p className='title'>{props.value}</p>
      <div className='btn-container'>
        <button
          type='button'
          className='edit-btn'
          onClick={props.onClickEditBtn}
        >
          <i className='fas fa-edit'></i>
        </button>
        <button
          type='button'
          className='delete-btn'
          onClick={props.onClickDeleteBtn}
        >
          <i className='fas fa-trash'></i>
        </button>
      </div>
    </article>
  )
}
