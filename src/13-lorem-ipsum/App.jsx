import React from 'react'
import './App.css'
import { text } from './data'

export default function App () {
  const [amount, setAmount] = React.useState()
  const [loremText, setLoremText] = React.useState()

  const handleSubmit = event => {
    event.preventDefault()

    let items

    if (isNaN(amount) || amount < 0 || amount > 9) {
      items = [text[Math.floor(Math.random() * text.length)]]
    } else {
      items = text.slice(0, amount)
    }

    const tempText = items.map(item => {
      return <p className='result'>{item}</p>
    })
    setLoremText(tempText)
  }

  return (
    <div className='App'>
      <section className='section-center'>
        <h3>tired of boring lorem ipsum?</h3>
        <form className='lorem-form' onSubmit={handleSubmit}>
          <label htmlFor='amount'>paragraphs:</label>
          <input
            type='number'
            name='amount'
            id='amount'
            placeholder='5'
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
          <button type='submit' className='btn'>
            generate
          </button>
        </form>
        <article className='lorem-text'>{loremText}</article>
      </section>
    </div>
  )
}
