
import { useEffect, useRef, useState } from 'react'
import logo from '../../assets/icons/logo3.svg'
import ScrollLink, { handleClickType } from './components/ScrollLink'
import ScrollSection from './components/ScrollSection'
import ScrollFooter from './components/ScrollFooter'

// const sectionItems = ['home', 'about', 'services', 'tours']

export default function ScrollPage() {
  const [navIsFixed, setNavIsFixed] = useState(false)
  const [showTopLink, setShowTopLink] = useState(false)

  // const sectionRefs = useRef<Array<HTMLElement | null>>([])

  const homeRef = useRef<HTMLElement | null>(null)
  const aboutRef = useRef<HTMLElement | null>(null)
  const servicesRef = useRef<HTMLElement | null>(null)
  const tooursRef = useRef<HTMLElement | null>(null)

  const navbarRef = useRef<HTMLElement>(null)
  const linksContainerRef = useRef<HTMLDivElement>(null)
  const linksRef = useRef<HTMLUListElement>(null)

  useEffect(() => {

    const handleScroll = () => {
      if (navbarRef.current) {
        const navHeight = navbarRef.current.getBoundingClientRect().height
        setNavIsFixed(window.scrollY > navHeight)
        setShowTopLink(window.scrollY > 500)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const onClickNavToggleBtn = () => {
    if (linksContainerRef.current && linksRef.current) {

      if (linksContainerRef.current.getBoundingClientRect().height === 0) {
        const heightOfLink = linksRef.current.getBoundingClientRect().height
        linksContainerRef.current.style.height = `${heightOfLink}px`
      } else {
        linksContainerRef.current.style.height = '0'
      }
    }

  }

  const onClickScrollLink: handleClickType = (event, href): void => {
    event.preventDefault()

    const element = href.current

    if (element && linksContainerRef.current && linksRef.current && navbarRef.current) {

      const navHeight = navbarRef.current.getBoundingClientRect().height
      const containerHeight = linksContainerRef.current.getBoundingClientRect().height

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

      linksContainerRef.current.style.height = '0'
    }

  }

  return (
    <div className='root-layout--main__div'>
      <div className='scroll-page' style={{ height: '80vh' }}>
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

                  <li><ScrollLink text='about' refObj={aboutRef} handleClick={onClickScrollLink} /></li>
                  <li><ScrollLink text='services' refObj={servicesRef} handleClick={onClickScrollLink} /></li>
                  <li><ScrollLink text='tours' refObj={tooursRef} handleClick={onClickScrollLink} /></li>

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

        <ScrollSection id='about' text='about' spanText='us' refObj={aboutRef} />
        <ScrollSection id='services' text='our' spanText='uservices' refObj={servicesRef} />
        <ScrollSection id='tours' text='featured' spanText='tours' refObj={tooursRef} />

        <ScrollFooter />

        <a
          className={`scroll-link top-link ${showTopLink ? 'show-link' : ''}`}
          href='#home'
        >
          <i className='fas fa-arrow-up' />
        </a>
      </div>
    </div>
  )
}
