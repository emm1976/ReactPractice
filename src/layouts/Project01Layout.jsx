import { Outlet, NavLink } from 'react-router-dom'

const Project01Layout = () => {
  return (
    <div className='project01-layout'>
      <h4>color flipper</h4>
      <nav>
        <NavLink to='simple'>simple</NavLink>
        <NavLink to='hex'>hex</NavLink>
      </nav>
      <main className='root-layout--main'>
        <div className='root-layout--main__div'>
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default Project01Layout
