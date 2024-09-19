import LinkedInLogo from '../../assets/linkedin.svg'
import TwitterLogo from '../../assets/twitter.svg'
import GenericLogo from '../../assets/message-circle-more.svg'

export default function SocialLink({ text, href }) {
  let logo

  if (href.includes('linkedin.com'))
    logo = LinkedInLogo
  else if (href.includes('x.com'))
    logo = TwitterLogo
  else
    logo = GenericLogo

  return (
    <a className="social-link" href={href}>
      <img src={logo} />
      <p>{text}</p>
    </a>
  )
}
