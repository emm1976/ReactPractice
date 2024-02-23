import { useState } from 'react'
import { IQuestionItem } from 'Types/types'
import QuestionItem from './components/QuestionItem'
import List from 'common/components/List'
import { apiAxios } from 'service/api-axios'
import { useLoaderData } from 'react-router-dom'

export default function QuestionPage() {
  
  const questions  = useLoaderData() as IQuestionItem[]

  const [questionItems, setQuestionItems] = useState<IQuestionItem[]>(questions)

  const handleClick = (id: number) => {
    setQuestionItems(old =>
      old.map((item: IQuestionItem) => {
        return { ...item, show: item.id === id && !item.show }
      })
    )
  }

  return (
    <div className='root-layout--main__div'>
      <section className='section-grid-center'>
        <div className='questions--container'>
          <div className='title'>
            <h2>general questions</h2>
          </div>
          <div className='question-container'>
            <List
              items={questionItems}
              renderItem={(item: IQuestionItem) =>
                <QuestionItem key={item.id} {...item} clickHandler={() => handleClick(item.id)} />} />
          </div>
        </div>
      </section>
    </div>
  )
}

// data loader
export const questionsLoader = () => {
  return apiAxios
      .get(`questions`)
      .then((response) => response.data as IQuestionItem[])
      .catch(() => {
          return [] as IQuestionItem[]
      })
}
