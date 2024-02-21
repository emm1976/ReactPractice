import ColorFlipper from './components/ColorFlipper'
import { generateRandomInteger } from 'common/utils'

const getRandomColor = () => {
  const alphabet = '0123456789ABCDEF'
  return '#' + [1, 2, 3, 4, 5, 6].map(_ => alphabet[generateRandomInteger(1, alphabet.length)]).join('')
}

export default function HexColorFlipper() {

  return (
    <ColorFlipper getRandomColor={getRandomColor} />
  )
}
