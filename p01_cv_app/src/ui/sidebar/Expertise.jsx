import Skill from './expertise/Skill'
const skills = [
  {
    name: "Lying",
    level: 4,
  },
  {
    name: "Leadership",
    level: 1,
  },
  {
    name: "Management",
    level: 3,
  }
]

export default function Expertise() {
  return (
    <section>
      <h3>Expertise</h3>
      <ul>
        {skills.map(skill => 
          <Skill {...skill} />
        )}
      </ul>
    </section>
  )
}
