interface IFilterBtnProps {
  category: string,
  clickHandler: () => void
}

export default function FilterBtn({ category, clickHandler }: IFilterBtnProps) {

  // console.log('FilterBtn: ', { category, clickHandler })
  
  return (
    <button
      type='button'
      className='filter-btn'
      data-id={category}
      onClick={clickHandler}
    >
      {category}
    </button>
  )
}
