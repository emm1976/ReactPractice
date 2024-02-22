import { FC, MouseEvent, MutableRefObject } from "react"

interface IScrollLinkProps {
  text: string,
  refObj: MutableRefObject<HTMLElement | null>,
  handleClick: (event: MouseEvent<HTMLAnchorElement>, href: MutableRefObject<HTMLElement | null>) => void
}

const ScrollLink: FC<IScrollLinkProps> = ({ text, refObj, handleClick }) => {
  return (
    <a href={`#${text}`} className='scroll-link' onClick={(event: MouseEvent<HTMLAnchorElement>) => handleClick(event, refObj)}>
      {text}
    </a>
  )
}

export default ScrollLink

export type handleClickType = IScrollLinkProps['handleClick']