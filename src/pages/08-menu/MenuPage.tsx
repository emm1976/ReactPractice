import { useState } from 'react'
import { MENU_CATEGORY_ALL } from 'common/constants'
import FilterBtnContainer from './components/FilterBtnContainer'
import MenuItemContainer from './components/MenuItemContainer'

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState(MENU_CATEGORY_ALL)

  const clickFilterButtonHandler = (category: string) => setSelectedCategory(category)

  return (
    <div className='root-layout--main__div'>
      <section className='menu--container'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>

        <FilterBtnContainer clickHandlerContainer={clickFilterButtonHandler} />

        <MenuItemContainer category={selectedCategory} />

      </section>
    </div>
  )
}
