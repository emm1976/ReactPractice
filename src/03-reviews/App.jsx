import React from 'react'
import './App.css'
import { reviews } from './data'

export default function App () {
  const [currentItem, setCurrentItem] = React.useState(0)

  return (
    <div className='App'>
      <main>
        <section className='container'>
          <div className='title'>
            <h2>our reviews</h2>
            <div className='underline' />
          </div>

          <article className='review'>
            <div className='img-container'>
              <img
                src={reviews[currentItem].img}
                className='person-img'
                alt=''
              />
            </div>

            <h4>{reviews[currentItem].name}</h4>
            <p>{reviews[currentItem].job}</p>
            <p>{reviews[currentItem].text}</p>

            <div className='button-container'>
              <button
                className='prev-btn'
                onClick={() =>
                  setCurrentItem(predValue =>
                    predValue === 0 ? reviews.length - 1 : predValue - 1
                  )
                }
              >
                <i className='fas fa-chevron-left'></i>
              </button>
              <button
                className='next-btn'
                onClick={() =>
                  setCurrentItem(predValue =>
                    predValue === reviews.length - 1 ? 0 : predValue + 1
                  )
                }
              >
                <i className='fas fa-chevron-right'></i>
              </button>
            </div>
            <button
              className='random-btn'
              onClick={() =>
                setCurrentItem(Math.floor(Math.random() * reviews.length))
              }
            >
              surprise me
            </button>
          </article>
        </section>
      </main>
    </div>
  )
}
