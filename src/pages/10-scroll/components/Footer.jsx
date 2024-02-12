import React from 'react'

export default function Footer (props) {
  return (
    <footer className='section'>
      <p>
        copyright &copy; backroads travel tours company
        <span>{new Date().getFullYear()}</span>. all rights reserved
      </p>
    </footer>
  )
}
