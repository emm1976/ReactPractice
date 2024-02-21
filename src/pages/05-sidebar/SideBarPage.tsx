import { useState } from 'react'
import NavbarLinks from 'common/components/NavbarLinks'
import SocialIcons from 'common/components/SocialIcons'

const logo: string = require('../../assets/icons/logo2.svg').default

export default function SideBarPage() {
  const [showSidebar, setShowSidebar] = useState(false)

  const toggleClickHandler = () => setShowSidebar(old => !old)
  const closeClickHandler = () => setShowSidebar(false)

  return (
    <section className='sidebar--container'>
      <button className='sidebar-toggle' onClick={toggleClickHandler}>
        <i className='fas fa-bars' />
      </button>
      <aside className={`sidebar ${showSidebar ? 'show-sidebar' : ''}`}>
        <div className='sidebar-header'>
          <img src={logo} className='logo' alt='logo' />
          <button className='close-btn' onClick={closeClickHandler}>
            <i className='fas fa-times' />
          </button>
        </div>

        <ul className='links'>
          <NavbarLinks />
        </ul>

        <SocialIcons />

      </aside>
    </section>
  )
}
