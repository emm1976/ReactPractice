import { useLoaderData } from 'react-router-dom'
import { weekdays, months, oneSecond } from 'common/constants'
import gift from '../../assets/images/gift.jpeg'
import DeadLineContainer from './components/DeadLineContainer'

export default function TimerPage() {
  const futureDate: Date = useLoaderData() as Date
  const futureTime: number = futureDate.getTime()

  return (
    <div className='root-layout--main__div'>
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
            {futureDate.getMinutes()} am
          </h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit molestiae cum libero atque ut voluptate qui
            consectetur aliquid incidunt voluptatem quos, dolore, non commodi
            quaerat aliquam eligendi, quisquam totam blanditiis.
          </p>

          <DeadLineContainer futureTime={futureTime} />

        </article>
      </section>
    </div>
  )
}

// data loader
export const countdownTimerLoader = () => {
  return new Date(new Date().getTime() + 10 * oneSecond)
}
