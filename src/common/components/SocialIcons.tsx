const socialIcons = [
  'fa-facebook',
  'fa-twitter',
  'fa-behance',
  'fa-linkedin',
  'fa-sketch'
]

const SocialIcons = () => {
  return (
    <ul className='container_social-icons'>
      {socialIcons.map((item, index) => (
        <li key={index}>
          <a href='https://www.twitter.com'>
            <i className={'fab ' + item} />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialIcons
