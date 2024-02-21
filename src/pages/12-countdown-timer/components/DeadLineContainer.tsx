import { useEffect, useState } from "react"
import DeadlineItems from "./DeadlineItems"
import { oneSecond } from "common/constants"

const DeadLineContainer = ({ futureTime }: { futureTime: number }) => {

    const [remainedTime, setRemainedTime] = useState<number>(
        futureTime - new Date().getTime()
    )

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRemainedTime(old => old - oneSecond)
        }, oneSecond)

        if (remainedTime < oneSecond) {
            clearInterval(intervalId)
        }

        return () => clearInterval(intervalId)
    }, [remainedTime])

    return (
        <div className='deadline'>
            {remainedTime < oneSecond && (
                <h4 className='expired'>sorry, this giveaway has expired!</h4>
            )}
            {remainedTime >= oneSecond && (
                <DeadlineItems remainedTime={remainedTime} />
            )}
        </div>
    )
}

export default DeadLineContainer