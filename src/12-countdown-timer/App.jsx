import React from 'react'
import './App.css'
import gift from './gift.jpeg'
import { months, weekdays } from './constants'
import DeadlineItems from './components/deadlineItems'

const futureDate = new Date(new Date().getTime() + 10 * 1000)
const futureTime = futureDate.getTime()

export default function App () {
  const [remainedTime, setRemainedTime] = React.useState(
    futureTime - new Date().getTime()
  )

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainedTime(prev => prev - 1000)
    }, 1000)

    if (remainedTime < 1000) {
      clearInterval(intervalId)
    }

    return () => clearInterval(intervalId)
  }, [remainedTime])

  return (
    <div className='App'>
      <section className='section-center'>
        <article className='gift-img'>
          <img src={gift} alt='gift' />
        </article>

        <article className='gift-info'>
          <h3>old iphone giveaway</h3>

          <h4 className='giveaway'>
            giveaway ends on {weekdays[futureDate.getDay()]},{' '}
            {futureDate.getDate()} {months[futureDate.getMonth()]}{' '}
            {futureDate.getFullYear()} {futureDate.getHours()}:
            {futureDate.getMinutes()}am
          </h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit molestiae cum libero atque ut voluptate qui
            consectetur aliquid incidunt voluptatem quos, dolore, non commodi
            quaerat aliquam eligendi, quisquam totam blanditiis.
          </p>
          <div className='deadline'>
            {remainedTime < 1000 && (
              <h4 className='expired'>sorry, this giveaway has expired!</h4>
            )}
            {remainedTime >= 1000 && (
              <DeadlineItems remainedTime={remainedTime} />
            )}
          </div>
        </article>
      </section>
    </div>
  )
}
