import SkillLevel from "./SkillLevel"

export default function Skill({ name, level }) {
  return (
    <li className="skill">
      <p className="skill-name">{name}</p>
      <SkillLevel level={level} />
    </li>
  )
}
