import { useState } from 'react'
import NavbarLinks from 'common/components/NavbarLinks'
import SocialIcons from 'common/components/SocialIcons'

const logo: string = require('../../assets/icons/logo2.svg').default

export default function NavBarPage() {
  const [isToggled, setIsToggled] = useState(false)

  const clickHandler = () => setIsToggled(old => !old)

  return (
    <section className='navbar--container'>
      <nav className='navbar'>
        <div className='nav-center'>

          <div className='nav-header'>
            <img src={logo} className='logo' alt='logo' />
            <button
              className='nav-toggle'
              onClick={clickHandler}
            >
              <i className='fas fa-bars'></i>
            </button>
          </div>

          <ul className={`navbar--links ${isToggled ? 'navbar--show-links' : ''}`}>
            <NavbarLinks />
          </ul>

          <SocialIcons />

        </div>
      </nav>
    </section>
  )
}
