import React from 'react'
import data from './data'
import QuestionItem from './components/QuestionItem'

export default function Project07 () {
  const [questions, setQuestions] = React.useState(data)

  function clickBtn (id) {
    setQuestions(oldValue =>
      oldValue.map(question => {
        return { ...question, show: question.id === id && !question.show }
      })
    )
  }

  const questionElements = questions.map(question => {
    return (
      <QuestionItem
        key={question.id}
        questionTitle={question.questionTitle}
        questionText={question.questionText}
        show={question.show}
        clickBtn={() => clickBtn(question.id)}
      />
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
