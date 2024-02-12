import React from 'react'
import menu from './data'
import MenuItem from './components/MenuItem'
import FilterBtn from './components/FilterBtn'

export default function Project08 () {
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
    <section className='menu--container'>
      <div className='title'>
        <h2>our menu</h2>
        <div className='underline'></div>
      </div>

      <div className='menu--btn-container'>{displayMenuButtons()}</div>

      <div className='menu--section-center'>{diplayMenuItems(menuItems)}</div>
    </section>
  )
}