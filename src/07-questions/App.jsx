import React from 'react'
import './App.css'
import data from "./data"
import Question from "./components/question"

export default function App () {

  const [questions, setQuestions] = React.useState(data)

  function clickBtn(id) {
    setQuestions(oldValue => oldValue.map(question => {
        return {...question, show: question.id === id}
    }))
}

  const questionElements = questions.map(question => {
    return (
        <Question
            key={question.id}
            questionTitle={question.questionTitle}
            questionText={question.questionText}
            show={question.show}
            clickBtn={() => clickBtn(question.id)}
        />
    )
}) 

  return (
    <div className='App'>
      <main>
        <section className='questions'>
          <div className='title'>
            <h2>general questions</h2>
          </div>
          <div className='section-center'>
            {questionElements}
          </div>
        </section>
      </main>
    </div>
  )
}
