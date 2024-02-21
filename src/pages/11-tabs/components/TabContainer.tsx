import { ITabItem } from "Types/types"
import List from "common/components/List"
import { dataTabItems } from "data/data"
import { useState } from "react"
import TabButtonItem from "./TabButtonItem"
import TabItem from "./TabItem"

const TabContainer = () => {

    const [tabs, setTabs] = useState(dataTabItems)

    const handleClick = (id: number) => {
        setTabs(old =>
            old.map(item => {
                return { ...item, active: item.id === id }
            })
        )
    }

    return (
        <article className='tabs--about'>
            <div className='tabs--btn-container'>

                <List
                    items={tabs}
                    renderItem={(item: ITabItem) => <TabButtonItem key={item.id} {...item} handleClick={handleClick} />}
                />

            </div>
            <div className='tabs--about-content'>

                <List
                    items={tabs}
                    renderItem={(item: ITabItem) => <TabItem key={item.id} {...item} />}
                />

            </div>
        </article>
    )
}

export default TabContainer