import React from 'react'
// import './App.css'
import Footer from './components/Footer'
import ScrollLink from './components/ScrollLink'
import logo from './logo.svg'
import Section from './components/Section'

export default function Project10 () {
  const [navIsFixed, setNavIsFixed] = React.useState(false)
  const [showTopLink, setShowTopLink] = React.useState(false)

  const navbarRef = React.useRef()
  const linksContainerRef = React.useRef()
  const linksRef = React.useRef()

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY
      const navHeight = navbarRef.current.getBoundingClientRect().height
      setNavIsFixed(scrollHeight > navHeight)
      setShowTopLink(scrollHeight > 500)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const onClickNavToggleBtn = () => {
    if (linksContainerRef.current.getBoundingClientRect().height === 0) {
      linksContainerRef.current.style.height = `${
        linksRef.current.getBoundingClientRect().height
      }px`
    } else {
      linksContainerRef.current.style.height = 0
    }
  }

  const onClickScrollLink = e => {
    e.preventDefault()

    const id = e.currentTarget.getAttribute('href').slice(1)
    const element = document.getElementById(id)

    const navHeight = navbarRef.current.getBoundingClientRect().height
    const containerHeight =
      linksContainerRef.current.getBoundingClientRect().height

    let position = element.offsetTop - navHeight

    if (!navIsFixed) {
      position = position - navHeight
    }
    if (navHeight > 82) {
      position = position + containerHeight
    }

    window.scrollTo({
      left: 0,
      top: position
    })

    linksContainerRef.current.style.height = 0
  }

  return (
    <div className='App'>
      <header id='home'>
        <nav id='nav' className={navIsFixed ? 'fixed-nav' : ''} ref={navbarRef}>
          <div className='nav-center'>
            
            <div className='nav-header'>
              <img src={logo} className='logo' alt='logo' />
              <button className='nav-toggle' onClick={onClickNavToggleBtn}>
                <i className='fas fa-bars' />
              </button>
            </div>

            <div className='links-container' ref={linksContainerRef}>
              <ul className='links' ref={linksRef}>
                <li>
                  <ScrollLink text='home' onClick={onClickScrollLink} />
                </li>
                <li>
                  <ScrollLink text='about' onClick={onClickScrollLink} />
                </li>
                <li>
                  <ScrollLink text='services' onClick={onClickScrollLink} />
                </li>
                <li>
                  <ScrollLink text='tours' onClick={onClickScrollLink} />
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className='banner'>
          <div className='container'>
            <h1>scroll project</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas eos
              neque sunt in? Id, necessitatibus quos quisquam distinctio
              laudantium fugiat?
            </p>
            <a href='#tours' className='scroll-link btn btn-white'>
              explore tours
            </a>
          </div>
        </div>
      </header>

      <Section id='about' text='about' spanText='us' />
      <Section id='services' text='our' spanText='uservices' />
      <Section id='tours' text='featured' spanText='tours' />

      <Footer />

      <a
        className={'scroll-link top-link' + (showTopLink ? ' show-link' : '')}
        href='#home'
      >
        <i className='fas fa-arrow-up' />
      </a>
    </div>
  )
}
