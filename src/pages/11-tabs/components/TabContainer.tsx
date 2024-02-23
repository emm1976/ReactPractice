import { ITabItem } from "Types/types"
import List from "common/components/List"
import { useState } from "react"
import TabButtonItem from "./TabButtonItem"
import TabItem from "./TabItem"
import { useLoaderData } from "react-router-dom"
import { apiAxios } from "service/api-axios"

const TabContainer = () => {

    const dataTabItems = useLoaderData() as ITabItem[]

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

// data loader
export const tabsLoader = () => {
    return apiAxios
        .get(`tabs`)
        .then((response) => response.data as ITabItem[])
        .catch(() => {
            return [] as ITabItem[]
        })
}
