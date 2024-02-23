import ButtonCounter from './components/ButtonCounter'
import { useSelector } from 'react-redux'
import { RootState, appDispatch, counterActions } from 'app/index'

export default function CounterPage() {

  const counter = useSelector((state: RootState) => state.counter.value)

  return (
    <div className='root-layout--main__div'>
      <section className='counter--container section-grid-center'>
        <h1>counter</h1>
        <span className={counter > 0 ? 'positive' : counter < 0 ? 'negative' : 'zero'}>
          {counter}
        </span>
        <div>
          <ButtonCounter
            caption='decrease'
            clickHandler={() => appDispatch(counterActions.decrease())}
          />
          <ButtonCounter caption='reset' clickHandler={() => appDispatch(counterActions.reset())} />
          <ButtonCounter
            caption='increase'
            clickHandler={() => appDispatch(counterActions.increase())}
          />
        </div>
      </section>
    </div>
  )
}
