import React from 'react'
import hero_bcg from '../../images/hero-bcg.jpeg'
import data from './data'
import TabItem from './components/TabItem'
import TabButtonItem from './components/TabButtonItem'

export default function Project11 () {
  const [tabs, setTabs] = React.useState(data)

  function handleClick (id) {
    setTabs(oldValue =>
      oldValue.map(item => {
        return { ...item, active: item.id === id }
      })
    )
  }

  const tabElements = tabs.map(item => {
    return (
      <TabItem
        key={item.id}
        title={item.title}
        text={item.text}
        active={item.active}
      />
    )
  })

  const tabButtonElements = tabs.map(item => {
    return (
      <TabButtonItem
        key={item.id}
        title={item.title}
        active={item.active}
        handleClick={() => handleClick(item.id)}
      />
    )
  })

  return (
    <section>
      <div className='tabs--title'>
        <h2>about</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          aperiam!
        </p>
      </div>
      <div className='tabs--about-center section-center'>
        <article className='tabs--about-img'>
          <img src={hero_bcg} alt='' />
        </article>
        <article className='tabs--about'>
          <div className='tabs--btn-container'>{tabButtonElements}</div>
          <div className='tabs--about-content'>{tabElements}</div>
        </article>
      </div>
    </section>
  )
}
