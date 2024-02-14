import React from 'react'
import GroceryItem from './components/GroceryItem'

const LS_ITEM_NAME = 'list'

enum AlertType {
  blank = '',
  danger = 'alert-danger',
  success = 'alert-success'
}

interface IAlert {
  text: string,
  className: AlertType
}

interface IGroceryItem {
  id: string,
  value: string | null | undefined
}

export default function Project14() {
  const [groceryItems, setGroceryItems] = React.useState<IGroceryItem[]>([])

  const [editFlag, setEditFlag] = React.useState<boolean>(false)
  const [editId, setEditId] = React.useState<string>()
  const [inputValue, setInputValue] = React.useState<string | null | undefined>('')

  const [alert, setAlert] = React.useState<IAlert>({ text: '', className: AlertType.blank })

  const refGrocery = React.useRef<HTMLInputElement>(null)

  function displayAlert(text: string, alertType: AlertType) {
    setAlert({ text: text, className: alertType })
    setTimeout(() => {
      setAlert({ text: '', className: AlertType.blank })
    }, 2000)
  }

  function updateGroceryItems(items: IGroceryItem[]) {
    setGroceryItems(items)
    localStorage.setItem(LS_ITEM_NAME, JSON.stringify(items))
  }

  function editItem(e: React.MouseEvent<HTMLButtonElement>, id: string) {
    setInputValue(
      e.currentTarget.parentElement?.previousElementSibling?.innerHTML
    )
    setEditFlag(true)
    setEditId(id)
  }

  function setBackToDefault() {
    setEditFlag(false)
    setInputValue('')
  }

  function deleteItem(id: string) {
    displayAlert('item removed', AlertType.danger)
    const newGroceryItems = groceryItems.filter(item => item.id !== id)
    updateGroceryItems(newGroceryItems)
    setBackToDefault()
  }

  function clearItems() {
    displayAlert('empty list', AlertType.danger)
    updateGroceryItems([])
    setBackToDefault()
  }

  function diplayItems() {
    return groceryItems.map(item => {
      return (
        <GroceryItem
          key={item.id}
          id={item.id}
          value={item.value ? item.value : ''}
          onClickEditBtn={(e: React.MouseEvent<HTMLButtonElement>) => editItem(e, item.id)}
          onClickDeleteBtn={() => deleteItem(item.id)}
        />
      )
    })
  }

  function addItem(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (inputValue === '') {
      displayAlert('please enter value', AlertType.danger)
      return
    }

    if (!editFlag) {
      displayAlert('item added to the list', AlertType.success)

      const id = new Date().getTime().toString()
      updateGroceryItems([...groceryItems, { id: id, value: inputValue }])
    } else {
      displayAlert('value changed', AlertType.success)

      const newGroceryItems = [...groceryItems].map(item => {
        if (item.id === editId) {
          item.value = inputValue
        }
        return item
      })
      updateGroceryItems(newGroceryItems)
    }
    setBackToDefault()
  }

  React.useEffect(() => {
    const savedGroceryItems = localStorage.getItem(LS_ITEM_NAME)
    if (savedGroceryItems) {
      setGroceryItems(JSON.parse(savedGroceryItems))
    }
  }, [])

  return (
    <div className='root-layout--main__div'>
      <section className='grocery-bud--container'>
        <form onSubmit={addItem}>
          <p className={`alert ${alert.className}`}>{alert.text}</p>
          <h3>grocery bud</h3>

          <div className='form-control'>
            <input
              type='text'
              placeholder='e.g. eggs'
              value={inputValue ? inputValue : ''}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
              ref={refGrocery}
            />
            <button type='submit' className='submit-btn'>
              {editFlag ? 'edit' : 'submit'}
            </button>
          </div>
        </form>

        <div
          className={'grocery-container' + (groceryItems.length ? ' show-container' : '')}
        >
          <div className='grocery-list'>{diplayItems()}</div>
          <button className='clear-btn' onClick={clearItems}>
            clear items
          </button>
        </div>
      </section>
    </div>
  )
}
