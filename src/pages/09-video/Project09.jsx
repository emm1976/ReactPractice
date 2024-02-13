import React from 'react'
// import preloader from './preloader.gif'
import video from './video.mp4'

export default function Project09 () {
  // const [hidePreloader, setHidePreloader] = React.useState(true)
  const [isVideoPaused, setIsVideoPaused] = React.useState(false)
  const videoRef = React.useRef()

  // React.useEffect(() => {
  //   const handleLoad = () => {
  //     setTimeout(() => {
  //       setHidePreloader(true)
  //     }, 5000)
  //   }

  //   window.addEventListener('load', handleLoad)

  //   return () => {
  //     window.removeEventListener('load', handleLoad)
  //   }
  // }, [])

  const handleClickBtn = () => {
    setIsVideoPaused(oldValue => !oldValue)
    if (isVideoPaused) {
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }
  }

  return (
    <div className='root-layout--main__div'>
      <section className='video--container'>
        {/* <div className={'preloader' + (hidePreloader ? ' hide-preloader' : '')}>
        <img src={preloader} alt='preloader' />
      </div> */}

        <header>
          <video muted autoPlay loop ref={videoRef}>
            <source src={video} type='video/mp4' />
          </video>
          <h1>video project</h1>

          <button className='switch-btn' onClick={handleClickBtn}>
            <span>play</span>
            <span>pause</span>
            <span className={'switch' + (isVideoPaused ? ' slide' : '')} />
          </button>
        </header>
      </section>
    </div>
  )
}
