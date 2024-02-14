import React, { useState } from 'react'

export default function Project06() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <section className='modal--container'>
      <header className='hero'>
        <div className='banner'>
          <h1>modal project</h1>
          <button className='btn modal-btn' onClick={() => setOpenModal(true)}>
            open modal
          </button>
        </div>
      </header>
      <div className={'modal-overlay' + (openModal ? ' open-modal' : '')}>
        <div className='modal-container'>
          <h3>modal content</h3>
          <button className='close-btn' onClick={() => setOpenModal(false)}>
            <i className='fas fa-times' />
          </button>
        </div>
      </div>
    </section>
  )
}
