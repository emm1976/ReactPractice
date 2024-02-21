interface IButtonCounterProps {
  caption: string,
  clickHandler: () => void
}

const ButtonCounter = ({ caption, clickHandler }: IButtonCounterProps) => {
  return (
    <button type='button' className='btnCounter' onClick={clickHandler}>
      {caption}
    </button>
  )
}

export default ButtonCounter
