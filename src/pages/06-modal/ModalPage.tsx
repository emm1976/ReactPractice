import { useState } from 'react'

export default function ModalPage() {
  const [openModal, setOpenModal] = useState(false)

  const showModalClickHandler = () => setOpenModal(true)
  const closeModalClickHandler = () => setOpenModal(false)

  return (
    <section className='modal--container'>
      <header className='hero'>
        <div className='banner'>
          <h1>modal project</h1>
          <button className='btn modal-btn' onClick={showModalClickHandler}>
            open modal
          </button>
        </div>
      </header>
      <div className={`modal-overlay ${openModal ? 'open-modal' : ''}`}>
        <div className='modal-container'>
          <h3>modal content</h3>
          <button className='close-btn' onClick={closeModalClickHandler}>
            <i className='fas fa-times' />
          </button>
        </div>
      </div>
    </section>
  )
}
