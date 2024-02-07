import React from 'react'
import './App.css'
import logo from './logo.svg'

export default function App () {
  const [isToggled, setIsToggled] = React.useState(false)

  return (
    <div className='App'>
      <nav>
        <div className='nav-center'>
          <div className='nav-header'>
            <img src={logo} className='logo' alt='logo' />
            <button
              className='nav-toggle'
              onClick={() => setIsToggled(oldValue => !oldValue)}
            >
              <i className='fas fa-bars'></i>
            </button>
          </div>

          <ul className={isToggled ? 'links show-links' : 'links'}>
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
    </div>
  )
}
