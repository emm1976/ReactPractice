import { useEffect, useRef, FormEvent, ChangeEvent, MouseEvent } from 'react'
import { useSelector } from 'react-redux'
import { appDispatch } from 'app/store'
import { RootState } from 'app/rootReducer'
import { AlertType } from 'app/slices/alertSlice'
import { fetchGroceryBudItems, IGroceryItem, groceryBudActions } from 'app/slices/groceryBudSlice'
import GroceryItem from './components/GroceryItem'

export default function Project14() {

  const groceryBud = useSelector((state: RootState) => state.groceryBud)
  const groceryItems = useSelector((state: RootState) => state.groceryBud.groceryBudItems)
  const editFlag = useSelector((state: RootState) => state.groceryBud.editFlag)
  const inputValue = useSelector((state: RootState) => state.groceryBud.inputValue)

  console.log('groceryItems: ', groceryBud)

  useEffect(() => {
    appDispatch(fetchGroceryBudItems())
  }, [])

  const alert = useSelector((state: RootState) => state.alert)


  const refGrocery = useRef<HTMLInputElement>(null)

  function displayAlert(text: string, alertType: AlertType) {
    // dispatch(alertActions.show({ text, className: alertType }))
    // setTimeout(() => {
    //   dispatch(alertActions.hide())
    // }, 2000)
  }

  function updateGroceryItems(items: IGroceryItem[]) {
    console.log('Sending data to FireBase ...')
    // sendData(groceryItems)(dispatch)
  }

  function editItem(e: MouseEvent<HTMLButtonElement>, id: string) {

    const value = e.currentTarget.parentElement?.previousElementSibling?.innerHTML
    appDispatch(groceryBudActions.saveInputValue(value ? value : ''))
    appDispatch(groceryBudActions.startEditItem(id))
  }

  function deleteItem(id: string) {
    displayAlert('item removed', AlertType.danger)
    appDispatch(groceryBudActions.deleteItem(id))
    appDispatch(groceryBudActions.stopEditItem())
  }

  function clearItems() {
    displayAlert('empty list', AlertType.danger)
    appDispatch(groceryBudActions.deleteAllItems())
    updateGroceryItems([])
    appDispatch(groceryBudActions.stopEditItem())
  }

  function diplayItems() {
    return groceryItems.map(item => {
      return (
        <GroceryItem
          key={item.id}
          id={item.id}
          value={item.value ? item.value : ''}
          onClickEditBtn={(e: MouseEvent<HTMLButtonElement>) => editItem(e, item.id)}
          onClickDeleteBtn={() => deleteItem(item.id)}
        />
      )
    })
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (inputValue === '') {
      displayAlert('please enter value', AlertType.danger)
      return
    }

    if (!editFlag) {
      displayAlert('item added to the list', AlertType.success)
      appDispatch(groceryBudActions.addItem(inputValue))
    } else {
      displayAlert('value changed', AlertType.success)
      appDispatch(groceryBudActions.editItem())
    }
    appDispatch(groceryBudActions.stopEditItem())
  }

  return (
    <div className='root-layout--main__div'>
      <section className='grocery-bud--container'>
        <form onSubmit={handleSubmit}>
          <p className={alert.className}>{alert.text}</p>
          <h3>grocery bud</h3>

          <div className='form-control'>
            <input
              type='text'
              placeholder='e.g. eggs'
              value={inputValue ? inputValue : ''}
              onChange={(e: ChangeEvent<HTMLInputElement>) => appDispatch(groceryBudActions.saveInputValue(e.target.value))}
              ref={refGrocery}
            />
            <button type='submit' className='submit-btn'>
              {editFlag ? 'edit' : 'submit'}
            </button>
          </div>
        </form>

        <div className={`grocery-container ${groceryItems.length ? 'show-container' : ''}`} >
          <div className='grocery-list'>{diplayItems()}</div>
          <button className='clear-btn' onClick={clearItems}>
            clear items
          </button>
        </div>
      </section>
    </div>
  )
}
