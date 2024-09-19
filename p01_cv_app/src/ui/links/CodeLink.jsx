import GitLogo from '../../assets/git-fork.svg'
import GHLogo from '../../assets/github.svg'
import GLLogo from '../../assets/gitlab.svg'

export default function CodeLink({ text, href }) {
  let logo

  if (href.includes('github'))
    logo = GHLogo
  else if (href.includes('gitlab'))
    logo = GLLogo
  else 
    logo = GitLogo

  return (
    <a className="code-link" href={href}>
      <img src={logo} />
      <p>{text}</p>
    </a>
  )
}
