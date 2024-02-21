import ColorFlipper from './components/ColorFlipper'
import { generateRandomInteger } from 'common/utils';

const getRandomColor = () => {
  const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025']
  return colors[generateRandomInteger(1, colors.length)]
}

export default function SimpleColorFlipper() {

  return (
    <ColorFlipper getRandomColor={getRandomColor} />
  )
}
