export default function ScrollFooter () {
  return (
    <footer className='section'>
      <p>
        copyright &copy; backroads travel tours company
        <span>{new Date().getFullYear()}</span>. all rights reserved
      </p>
    </footer>
  )
}
