import { useState } from 'react'
import { dataReviewItems } from '../../data/data'
import React from 'react'

export default function Project03 () {
  const [currentItem, setCurrentItem] = useState(0)

  return (
    <div className='root-layout--main__div'>
      <section className='reviews--container section-grid-center'>
        <div className='reviews--title'>
          <h2>our reviews</h2>
          <div className='underline' />
        </div>

        <article className='review'>
          <div className='img-container'>
            <img src={dataReviewItems[currentItem].img} className='person-img' alt='' />
          </div>

          <h4 style={{ marginBottom: '0.25rem' }}>
            {dataReviewItems[currentItem].name}
          </h4>
          <p className='reviewJob'>{dataReviewItems[currentItem].job}</p>
          <p style={{ marginBottom: '0.75rem' }}>{dataReviewItems[currentItem].text}</p>

          <div className='button-container'>
            <button
              className='prev-btnReview'
              onClick={() =>
                setCurrentItem(predValue =>
                  predValue === 0 ? dataReviewItems.length - 1 : predValue - 1
                )
              }
            >
              <i className='fas fa-chevron-left'></i>
            </button>
            <button
              className='next-btnReview'
              onClick={() =>
                setCurrentItem(predValue =>
                  predValue === dataReviewItems.length - 1 ? 0 : predValue + 1
                )
              }
            >
              <i className='fas fa-chevron-right'></i>
            </button>
          </div>
          <button
            className='random-btnReview'
            onClick={() =>
              setCurrentItem(Math.floor(Math.random() * dataReviewItems.length))
            }
          >
            surprise me
          </button>
        </article>
      </section>
    </div>
  )
}
