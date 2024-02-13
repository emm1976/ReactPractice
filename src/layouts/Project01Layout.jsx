import { Outlet, NavLink } from 'react-router-dom'

const Project01Layout = () => {
  return (
    <>
      <nav className='project01-layout--nav'>
        <div className='project01-layout--nav-div'>
          <h4>color flipper</h4>
          <nav>
            <NavLink to='simple'>simple</NavLink>
            <NavLink to='hex'>hex</NavLink>
          </nav>
        </div>
      </nav>
      <main className='project01-layout--main'>
        <Outlet />
      </main>
    </>
  )
}

export default Project01Layout
