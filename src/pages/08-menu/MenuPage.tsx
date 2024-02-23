import { useState } from 'react'
import { MENU_CATEGORY_ALL } from 'common/constants'
import FilterBtnContainer from './components/FilterBtnContainer'
import MenuItemContainer from './components/MenuItemContainer'
import { apiAxios } from 'service/api-axios'
import { IMenuItem } from 'Types/types'

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

// data loader
export const menuLoader = () => {
  return apiAxios
      .get(`menu`)
      .then((response) => response.data as IMenuItem[])
      .catch(() => {
          return [] as IMenuItem[]
      })
}
