import React from 'react'
import './App.css'
import logo from './logo.svg'

export default function App () {
  const [showSidebar, setShowSidebar] = React.useState(false)

  return (
    <div className='App'>
      <button className='sidebar-toggle' onClick={() => setShowSidebar((oldValue) => !oldValue)}>
        <i className='fas fa-bars' />
      </button>
      <aside className={showSidebar ? 'sidebar show-sidebar' : 'sidebar'}  >
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
          <li>
            <a href='https://www.twitter.com'>
              <i className='fab fa-facebook' />
            </a>
          </li>
          <li>
            <a href='https://www.twitter.com'>
              <i className='fab fa-twitter' />
            </a>
          </li>
          <li>
            <a href='https://www.twitter.com'>
              <i className='fab fa-behance' />
            </a>
          </li>
          <li>
            <a href='https://www.twitter.com'>
              <i className='fab fa-linkedin' />
            </a>
          </li>
          <li>
            <a href='https://www.twitter.com'>
              <i className='fab fa-sketch' />
            </a>
          </li>
        </ul>
      </aside>
    </div>
  )
}
