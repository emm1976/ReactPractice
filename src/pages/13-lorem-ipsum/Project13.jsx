import React from 'react'
import { text } from './data'

export default function Project13 () {
  const [amount, setAmount] = React.useState()
  const [loremText, setLoremText] = React.useState()

  const handleSubmit = event => {
    event.preventDefault()

    let items

    if (isNaN(amount) || amount < 1 || amount > 9) {
      items = [text[Math.floor(Math.random() * text.length)]]
    } else {
      items = text.slice(0, amount)
    }

    const tempText = items.map((item, index) => {
      return (
        <p className='result'>
          {index + 1}). {item}
        </p>
      )
    })

    setLoremText(tempText)
  }

  return (
    <section className='lorem-ipsum--container'>
      <h3>tired of boring lorem ipsum?</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          placeholder='0'
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
        <button type='submit'>generate</button>
      </form>
      {loremText && <article>{loremText}</article>}
    </section>
  )
}
