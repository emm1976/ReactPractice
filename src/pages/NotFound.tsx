import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound: React.FC = () => {
  return (
    <div className='root-layout--main__div'>
      <section>
        <header>
          <h2>Page not found!</h2>
        </header>
        <main>
          Go to the <NavLink to='/'>Homepage</NavLink>.
        </main>
      </section>
    </div>
  )
}

export default NotFound
