import { useRef, useState } from 'react'
// import preloader from './preloader.gif'

// import video from './video.mp4'
import video from '../../assets/videos/video.mp4'

export default function VideoPage() {
  // const [hidePreloader, setHidePreloader] = useState(true)

  const [isVideoPaused, setIsVideoPaused] = useState(false)

  const videoRef = useRef<HTMLVideoElement>(null)

  const clickTogglePlayHandler = () => {
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

        {/* <div className={`preloader  ${hidePreloader ? 'hide-preloader' : ''}`}>
        <img src={preloader} alt='preloader' />
      </div> */}

        <header>
          <video muted autoPlay loop ref={videoRef}>
            <source src={video} type='video/mp4' />
          </video>
          <h1>video project</h1>

          <button className='switch-btn' onClick={clickTogglePlayHandler}>
            <span>play</span>
            <span>pause</span>
            <span className={`switch ${isVideoPaused ? 'slide' : ''}`} />
          </button>
        </header>
      </section>
    </div>
  )
}
