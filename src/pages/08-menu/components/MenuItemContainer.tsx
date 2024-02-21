import { IMenuItem } from "Types/types"
import List from "common/components/List"
import { MENU_CATEGORY_ALL } from "common/constants"
import { dataMenuItems } from "data/data"
import MenuItem from "./MenuItem"

export default function MenuItemContainer({ category }: {category: string}) {

  console.log('MenuItemContainer: ', { category })

  return (
    <div className='section-center'>

      <List
        items={category === MENU_CATEGORY_ALL ? dataMenuItems : dataMenuItems.filter(_ => _.category === category)}
        renderItem={(item: IMenuItem) => <MenuItem key={item.id} {...item} />}
      />

    </div>
  )
}
