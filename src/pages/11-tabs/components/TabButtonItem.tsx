interface ITabButtonItemProps {
  id: number,
  title: string,
  active: boolean,
  handleClick: (id: number) => void
}

export default function TabButtonItem({ id, title, active, handleClick }: ITabButtonItemProps) {
  return (
    <button
      type='button'
      className={`tab-btn ${active ? 'active' : ''}`}
      onClick={() => handleClick(id)}
    >
      {title}
    </button>
  )
}
