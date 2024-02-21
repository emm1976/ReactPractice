import List from "common/components/List"
import { MENU_CATEGORY_ALL } from "common/constants"
import { dataMenuItems } from "data/data"
import FilterBtn from "./FilterBtn"

const categories = dataMenuItems.reduce(
  function (values, item) {
    if (!values.includes(item.category)) {
      values.push(item.category)
    }
    return values
  }, [MENU_CATEGORY_ALL]
)

export default function FilterBtnContainer({ clickHandlerContainer }: { clickHandlerContainer: (_: string) => void }) {
  
  console.log('FilterBtnContainer: ', {})

  return (
    <div className='btn-container'>

      <List
        items={categories}
        renderItem={_ => <FilterBtn key={_} category={_} clickHandler={() => clickHandlerContainer(_)} />}
      />

    </div>
  )
}
