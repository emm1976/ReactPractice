import React from 'react'

const logo: string = require('../../images/logo2.svg').default

const socialIcons = [
  'fa-facebook',
  'fa-twitter',
  'fa-behance',
  'fa-linkedin',
  'fa-sketch'
]

export default function Project04() {
  const [isToggled, setIsToggled] = React.useState(false)

  return (
    <section className='navbar--container'>
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
            className={
              'navbar--links' + (isToggled ? ' navbar--show-links' : '')
            }
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

          <ul className='container_social-icons'>
            {socialIcons.map((item, index) => (
              <li key={index}>
                <a href='https://www.twitter.com'>
                  <i className={'fab ' + item} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </section>
  )
}
