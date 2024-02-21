import { useState } from "react"

const ColorFlipper = ({ getRandomColor }: { getRandomColor: Function }) => {

    const colorInitialValue = getRandomColor()

    const [color, setColor] = useState(colorInitialValue)

    const clickHandler = () => setColor(() => getRandomColor())

    return (
        <div className='color-flipper--container' style={{ background: color }}>
            <h2>
                background color : <span className='color'>{color}</span>
            </h2>
            <button type='button' onClick={clickHandler}>
                click me
            </button>
        </div>
    )
}

export default ColorFlipper