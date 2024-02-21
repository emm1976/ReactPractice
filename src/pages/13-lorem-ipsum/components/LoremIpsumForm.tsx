import { RootState } from "app/rootReducer"
import { loremIpsumActions } from "app/slices/loremIpsumSlice"
import { appDispatch } from "app/store"
import { FormEvent, ChangeEvent } from "react"
import { useSelector } from "react-redux"

const LoremIpsumForm = () => {
    const amount = useSelector((state: RootState) => state.loremIpsum.amount)

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        appDispatch(loremIpsumActions.filterItems())
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => appDispatch(loremIpsumActions.setAmount(event.target.value))

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='amount'>paragraphs:</label>
            <input type='number'
                name='amount'
                value={amount}
                onChange={handleChange}
            />
            <button type='submit'>generate</button>
        </form>
    )
}

export default LoremIpsumForm