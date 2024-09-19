import CodeLink  from './links/CodeLink'
import SocialLink  from './links/SocialLink'

const codeLinks = [
  {
    text: 'Github',
    href: 'https://github.com/schacon'
  },
  {
    text: 'Gitlab',
    href: 'https://gitlab.com/'
  }
]

const socialLinks = [
  {
    text: 'LinkedIn',
    href: 'https://linkedin.com/',
  },
  {
    text: 'X',
    href: 'https://x.com/'
  },
]

export default function LinksRibbon() {
  return (
    <aside className="ribbon">
      <section>
        <h3>Code</h3>
        <ul>
          {codeLinks.map(cl =>
            <li><CodeLink {...cl} /></li>
          )}
        </ul>
      </section>
      <section>
        <h3>Social</h3>
        <ul>
          {socialLinks.map(sl =>
            <li><SocialLink {...sl} /></li>
          )}
        </ul>
      </section>
    </aside>
  )
}
