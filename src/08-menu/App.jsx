import React from 'react'
import './App.css'
import menu from './data'
import MenuItem from './components/MenuItem'
import FilterBtn from './components/FilterBtn'

export default function App () {
  const [menuItems, setMenuItems] = React.useState(menu)

  function diplayMenuItems (items) {
    return items.map(item => {
      return <MenuItem key={item.id} {...item} />
    })
  }

  function onClickFIlterBtn (category) {
    if (category === 'all') {
      setMenuItems(menu)
    } else {
      setMenuItems(menu.filter(menuItem => menuItem.category === category))
    }
  }

  function displayMenuButtons () {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category)
        }
        return values
      },
      ['all']
    )

    return categories.map((category, index) => {
      return (
        <FilterBtn
          key={index}
          category={category}
          onClick={() => onClickFIlterBtn(category)}
        />
      )
    })
  }

  return (
    <div className='App'>
      <section className='menu'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>

        <div className='btn-container'>{displayMenuButtons()}</div>

        <div className='section-center'>{diplayMenuItems(menuItems)}</div>
      </section>
    </div>
  )
}
