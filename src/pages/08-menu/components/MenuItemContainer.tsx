import { IMenuItem } from "Types/types"
import List from "common/components/List"
import { MENU_CATEGORY_ALL } from "common/constants"
import MenuItem from "./MenuItem"
import { useLoaderData } from "react-router-dom"

export default function MenuItemContainer({ category }: {category: string}) {

  const dataMenuItems  = useLoaderData() as IMenuItem[]

  return (
    <div className='section-center'>

      <List
        items={category === MENU_CATEGORY_ALL ? dataMenuItems : dataMenuItems.filter(_ => _.category === category)}
        renderItem={(item: IMenuItem) => <MenuItem key={item.id} {...item} />}
      />

    </div>
  )
}
