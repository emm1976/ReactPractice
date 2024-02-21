import { oneDay, oneHour, oneMinute } from 'common/constants'
import DeadlineItem from './DeadlineItem'

interface IDeadlineItemsProps {
  remainedTime: number
}

export default function DeadlineItems({ remainedTime }: IDeadlineItemsProps) {
  return (
    <>
      <DeadlineItem
        key={1}
        value={Math.floor(remainedTime / oneDay)}
        text='days'
      />
      <DeadlineItem
        key={2}
        value={Math.floor((remainedTime % oneDay) / oneHour)}
        text='hours'
      />
      <DeadlineItem
        key={3}
        value={Math.floor((remainedTime % oneHour) / oneMinute)}
        text='mins'
      />
      <DeadlineItem
        key={4}
        value={Math.floor((remainedTime % oneMinute) / 1000)}
        text='secs'
      />
    </>
  )
}
