import { FC } from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const RootLayout: FC = () => {
  return (
    <div className='root-layout'>
      <header className='root-layout--header'>
        <nav className='root-layout--header__nav'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='colorflipper'>01</NavLink>
          <NavLink to='counter'>02</NavLink>
          <NavLink to='reviews'>03</NavLink>
          <NavLink to='navbar'>04</NavLink>
          <NavLink to='sidebar'>05</NavLink>
          <NavLink to='modal'>06</NavLink>
          <NavLink to='questions'>07</NavLink>
          <NavLink to='menu'>08</NavLink>
          <NavLink to='video'>09</NavLink>
          <NavLink to='scroll'>10</NavLink>
          <NavLink to='tabs'>11</NavLink>
          <NavLink to='timer'>12</NavLink>
          <NavLink to='loremipsum'>13</NavLink>
          <NavLink to='grocerybud'>14</NavLink>
          <NavLink to='slider'>15</NavLink>
        </nav>
      </header>
      <main className='root-layout--main'>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
