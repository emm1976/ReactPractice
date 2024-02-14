import React from 'react'

interface IGroceryItemProps {
  id: string,
  value: string,
  onClickEditBtn: (event: React.MouseEvent<HTMLButtonElement>) => void,
  onClickDeleteBtn: () => void
}

export default function GroceryItem({ id, value, onClickEditBtn, onClickDeleteBtn }: IGroceryItemProps) {
  return (
    <article className='grocery-item' data-id={id}>
      <p className='title'>{value}</p>
      <div className='btn-container'>
        <button
          type='button'
          className='edit-btn'
          onClick={onClickEditBtn}
        >
          <i className='fas fa-edit'></i>
        </button>
        <button
          type='button'
          className='delete-btn'
          onClick={onClickDeleteBtn}
        >
          <i className='fas fa-trash'></i>
        </button>
      </div>
    </article>
  )
}
