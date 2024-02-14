import React from 'react'
import { dataLoremIpsum } from '../../data/data'

export default function Project13() {
  const [amount, setAmount] = React.useState<number>(0)
  const [loremText, setLoremText] = React.useState<React.JSX.Element[]>()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    let items: string[]

    if (isNaN(amount) || amount < 1 || amount > 9) {
      items = [dataLoremIpsum[Math.floor(Math.random() * dataLoremIpsum.length)]]
    } else {
      items = dataLoremIpsum.slice(0, amount)
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
    <div className='root-layout--main__div'>
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(Number.parseInt(e.target.value))}
          />
          <button type='submit'>generate</button>
        </form>
        {loremText && <article>{loremText}</article>}
      </section>
    </div>
  )
}
