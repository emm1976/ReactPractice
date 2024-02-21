import { FC } from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const ColorFlipperLayout: FC = () => {
  return (
    <>
      <nav className='color-flipper-layout--nav'>
        <div className='color-flipper-layout--nav-div'>
          <h4>color flipper</h4>
          <nav>
            <NavLink to='simple'>simple</NavLink>
            <NavLink to='hex'>hex</NavLink>
          </nav>
        </div>
      </nav>
      <main className='color-flipper-layout--main'>
        <Outlet />
      </main>
    </>
  )
}

export default ColorFlipperLayout
