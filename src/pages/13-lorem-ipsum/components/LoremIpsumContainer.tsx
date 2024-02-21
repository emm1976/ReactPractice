import { useSelector } from "react-redux"
import { RootState } from "app/rootReducer"
import List from "common/components/List"

const LoremIpsumContainer = () => {

    const loremIpsumItems = useSelector((state: RootState) => state.loremIpsum.filteredItems)

    return (
        <article>
            <List
                items={loremIpsumItems}
                renderItem={(item: string) => <p className='result'>{item}</p>} 
            />

        </article>
    )
}

export default LoremIpsumContainer
