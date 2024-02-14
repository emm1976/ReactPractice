import React from 'react'
import { dataQuestionItems as questions } from '../../data/data'
import { IQuestionItem } from 'src/types/types'
import QuestionItem from './components/QuestionItem'

export default function Project07() {
  const [questionItems, setQuestionItems] = React.useState<IQuestionItem[]>(questions)

  function clickBtn(id: number) {
    setQuestionItems(oldValue =>
      oldValue.map(question => {
        return { ...question, show: question.id === id && !question.show }
      })
    )
  }

  const questionElements = questionItems.map(item => {
    return (
      <QuestionItem
        key={item.id}
        {...item}
        clickHandler={() => clickBtn(item.id)} />
    )
  })

  return (
    <div className='root-layout--main__div'>
      <section className='section-grid-center'>
        <div className='questions--container'>
          <div className='title'>
            <h2>general questions</h2>
          </div>
          <div className='question-container'>{questionElements}</div>
        </div>
      </section>
    </div>
  )
}
