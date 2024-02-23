import { useState } from 'react'
import SlideItem from './components/SlideItem'
import List from 'common/components/List'
import { ISlideItem } from 'Types/types'
import { apiAxios } from 'service/api-axios'
import { useLoaderData } from 'react-router-dom'

export default function SliderPage() {

  const slides = useLoaderData() as ISlideItem[]

  const [counter, setCounter] = useState(0)

  const onClickPrevBtn = () => setCounter(old => old - 1)
  const onClickNextBtn = () => setCounter(old => old + 1)

  return (
    <section className='slider--container'>

      <main>
        <List
          items={slides}
          renderItem={(item: ISlideItem) =>
            <SlideItem key={item.id} {...item} counter={counter} />}
        />
      </main>

      <div className='btn-container'>
        {
          (counter > 0) && 
          <button type='button' className='prevBtn' onClick={onClickPrevBtn} >prev</button>
        }
        {
          (counter < slides.length - 1) && 
          <button type='button' className='nextBtn' onClick={onClickNextBtn} >next</button>
        }
      </div>
    </section>
  )
}

// data loader
export const slidesLoader = () => {
  return apiAxios
      .get(`slides`)
      .then((response) => response.data as ISlideItem[])
      .catch(() => {
          return [] as ISlideItem[]
      })
}
