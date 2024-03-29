import React from 'react'
import './App.css'

export default function App () {
  const [openModal, setOpenModal] = React.useState(false)

  return (
    <div className='App'>
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
    </div>
  )
}
