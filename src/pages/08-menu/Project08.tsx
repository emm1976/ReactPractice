import React from 'react'
import MenuItem from './components/MenuItem'
import { dataMenuItems } from '../../data/data'
import { IMenuItem } from 'src/types/types'
import FilterBtn from './components/FilterBtn'

export default function Project08() {
  const [menuItems, setMenuItems] = React.useState<IMenuItem[]>(dataMenuItems)

  function diplayMenuItems(items: IMenuItem[]) {
    return items.map((item: IMenuItem) => {
      return <MenuItem key={item.id} {...item} />
    })
  }

  function onClickFIlterBtn(category: string) {
    if (category === 'all') {
      setMenuItems(dataMenuItems)
    } else {
      setMenuItems(dataMenuItems.filter(item => item.category === category))
    }
  }

  function displayMenuButtons() {
    const categories = dataMenuItems.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category)
        }
        return values
      },
      ['all']
    )

    return categories.map((category: string, index: number) => {
      return (
        <FilterBtn
          key={index}
          category={category}
          clickHandler={() => onClickFIlterBtn(category)}
        />
      )
    })
  }

  return (
    <div className='root-layout--main__div'>
      <section className='menu--container'>
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
