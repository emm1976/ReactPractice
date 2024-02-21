interface ITabItemProps {
  title: string,
  text: string,
  active: boolean
}

export default function TabItem({ title, text, active }: ITabItemProps) {
  return (
    <div className={`tabs--content ${active ? 'active' : ''}`}>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  )
}
