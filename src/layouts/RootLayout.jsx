import { Outlet, NavLink } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='root-layout'>
      <header className='root-layout--header'>
        <nav className='root-layout--header__nav'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='Project01'>01</NavLink>
          <NavLink to='Project02'>02</NavLink>
          <NavLink to='Project03'>03</NavLink>
          <NavLink to='Project04'>04</NavLink>
          <NavLink to='Project05'>05</NavLink>
          <NavLink to='Project06'>06</NavLink>
          <NavLink to='Project07'>07</NavLink>
          <NavLink to='Project08'>08</NavLink>
          <NavLink to='Project09'>09</NavLink>
          <NavLink to='Project10'>10</NavLink>
          <NavLink to='Project11'>11</NavLink>
          <NavLink to='Project12'>12</NavLink>
          <NavLink to='Project13'>13</NavLink>
          <NavLink to='Project14'>14</NavLink>
          <NavLink to='Project15'>15</NavLink>
        </nav>
      </header>
      <main className='root-layout--main'>
        <div className='root-layout--main__div'>
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default RootLayout
