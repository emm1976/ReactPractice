import React from 'react'
import logo from '../../images/logo2.svg'

const socialIcons = [
  'fa-facebook',
  'fa-twitter',
  'fa-behance',
  'fa-linkedin',
  'fa-sketch'
]

export default function Project05 () {
  const [showSidebar, setShowSidebar] = React.useState(false)

  return (
    <section className='sidebar--container'>
      <button
        className='sidebar-toggle'
        onClick={() => setShowSidebar(oldValue => !oldValue)}
      >
        <i className='fas fa-bars' />
      </button>
      <aside className={'sidebar' + (showSidebar ? ' show-sidebar' : '')}>
        <div className='sidebar-header'>
          <img src={logo} className='logo' alt='' />
          <button className='close-btn' onClick={() => setShowSidebar(false)}>
            <i className='fas fa-times' />
          </button>
        </div>

        <ul className='links'>
          <li>
            <a href='index.html'>home</a>
          </li>
          <li>
            <a href='about.html'>about</a>
          </li>
          <li>
            <a href='projects.html'>projects</a>
          </li>
          <li>
            <a href='contact.html'>contact</a>
          </li>
        </ul>

        <ul className='social-icons'>
          {socialIcons.map((item, index) => (
            <li key={index}>
              <a href='https://www.twitter.com'>
                <i className={'fab ' + item} />
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  )
}
