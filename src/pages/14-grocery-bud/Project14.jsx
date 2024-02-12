import React from 'react'
import GroceryItem from './components/GroceryItem'

const LS_ITEM_NAME = 'list'

export default function Project14 () {

  const [groceryItems, setGroceryItems] = React.useState([])

  const [editFlag, setEditFlag] = React.useState(false)
  const [editId, setEditId] = React.useState()
  const [inputValue, setInputValue] = React.useState('')

  const [alert, setAlert] = React.useState({ text: '', className: '' })

  const refGrocery = React.useRef()

  function displayAlert (text, action) {
    setAlert({ text: text, className: `alert-${action}` })
    setTimeout(() => {
      setAlert({ text: '', className: '' })
    }, 2000)
  }

  function updateGroceryItems (items) {
    setGroceryItems(items)
    localStorage.setItem(LS_ITEM_NAME, JSON.stringify(items))
  }

  function editItem (e, id) {
    setInputValue(
      e.currentTarget.parentElement.previousElementSibling.innerHTML
    )
    setEditFlag(true)
    setEditId(id)
  }

  function setBackToDefault () {
    setEditFlag(false)
    setInputValue('')
  }

  function deleteItem (id) {
    displayAlert('item removed', 'danger')
    const newGroceryItems = groceryItems.filter(item => item.id !== id)
    updateGroceryItems(newGroceryItems)
    setBackToDefault()
  }

  function clearItems () {
    displayAlert('empty list', 'danger')
    updateGroceryItems([])
    setBackToDefault()
  }

  function diplayItems () {
    if (Array.isArray(groceryItems)) {
      return groceryItems.map(item => {
        return (
          <GroceryItem
            key={item.id}
            id={item.id}
            value={item.value}
            onClickEditBtn={e => editItem(e, item.id)}
            onClickDeleteBtn={() => deleteItem(item.id)}
          />
        )
      })
    }
  }

  function addItem (e) {
    e.preventDefault()

    if (inputValue === '') {
      displayAlert('please enter value', 'danger')
      return
    }

    if (!editFlag) {
      displayAlert('item added to the list', 'success')

      const id = new Date().getTime().toString()
      updateGroceryItems([...groceryItems, { id: id, value: inputValue }])
    } else {
      displayAlert('value changed', 'success')

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
    <section className='grocery-bud--container'>
      <form onSubmit={addItem}>
        <p className={`alert ${alert.className}`}>{alert.text}</p>
        <h3>grocery bud</h3>

        <div className='form-control'>
          <input
            type='text'
            placeholder='e.g. eggs'
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            ref={refGrocery}
          />
          <button type='submit' className='submit-btn'>
            {editFlag ? 'edit' : 'submit'}
          </button>
        </div>
      </form>

      <div
        className={`grocery-container ${
          groceryItems === '' ? '' : ' show-container'
        }`}
      >
        <div className='grocery-list'>{diplayItems()}</div>
        <button className='clear-btn' onClick={clearItems}>
          clear items
        </button>
      </div>
    </section>
  )
}
