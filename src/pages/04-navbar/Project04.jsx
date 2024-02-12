import React from 'react'
import logo from '../../images/logo2.svg'

export default function Project04 () {
  const [isToggled, setIsToggled] = React.useState(false)

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img
            src={logo}
            className='logo'
            style={{
              height: '40px'
            }}
            alt='logo'
          />
          <button
            className='nav-toggle'
            onClick={() => setIsToggled(oldValue => !oldValue)}
          >
            <i className='fas fa-bars'></i>
          </button>
        </div>

        <ul
          className={'navbar--links' + (isToggled ? 'navbar--show-links' : '')}
        >
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

        <ul className='navbar--social-icons'>
          <li>
            <a href='https://www.twitter.com'>
              <i className='fab fa-facebook'></i>
            </a>
          </li>
          <li>
            <a href='https://www.twitter.com'>
              <i className='fab fa-twitter'></i>
            </a>
          </li>
          <li>
            <a href='https://www.twitter.com'>
              <i className='fab fa-behance'></i>
            </a>
          </li>
          <li>
            <a href='https://www.twitter.com'>
              <i className='fab fa-linkedin'></i>
            </a>
          </li>
          <li>
            <a href='https://www.twitter.com'>
              <i className='fab fa-sketch'></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
