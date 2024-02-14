import React, { DetailedHTMLProps, VideoHTMLAttributes, useRef } from 'react'
// import preloader from './preloader.gif'
import video from './video.mp4'

export default function Project09() {
  // const [hidePreloader, setHidePreloader] = React.useState(true)

  const [isVideoPaused, setIsVideoPaused] = React.useState(false)

  // Create a ref to hold the reference to the video element
  const videoRef = useRef<HTMLVideoElement>(null)


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

  // Function to play or pause the video
  const togglePlay = () => {
    setIsVideoPaused((oldValue) => !oldValue)
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
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

          <button className='switch-btn' onClick={togglePlay}>
            <span>play</span>
            <span>pause</span>
            <span className={'switch' + (isVideoPaused ? ' slide' : '')} />
          </button>
        </header>
      </section>
    </div>
  )
}
