interface IMenuItemProps {
  img: string,
  title: string,
  price: number,
  desc: string
}

export default function MenuItem({ img, title, price, desc }: IMenuItemProps) {

  // console.log("MenuItem: ", { img, title, price, desc })

  return (
    <article className='menu-item'>
      <img src={img} alt={title} className='menu-item-photo' />
      <div className='menu-item-info'>
        <header>
          <h4>{title}</h4>
          <h4 className='menu-item-info-price'>${price}</h4>
        </header>
        <p className='menu-item-info-text'>{desc}</p>
      </div>
    </article>
  )
}
