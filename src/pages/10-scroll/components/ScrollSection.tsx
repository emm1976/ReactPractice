import { FC, MutableRefObject } from "react"

interface ISectionProps {
  id: string,
  text: string,
  spanText: string,
  refObj: MutableRefObject<HTMLElement | null>
}

const ScrollSection: FC<ISectionProps> = ({ id, text, spanText, refObj }) => {
  return (
    <section id={id} ref={refObj} className='section'>
      <div className='title'>
        <h2>
          {text} <span>{spanText}</span>
        </h2>
      </div>
    </section>
  )
}

export default ScrollSection