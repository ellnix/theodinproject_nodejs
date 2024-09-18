const LEVELS = [
  "None",
  "Basic",
  "Intermediate",
  "Advanced",
  "Infallible",
  "Indescribable",
]
export default function SkillLevel({ level }) {
  return (
    <>
      <meter min="0" max="5" value={level}>
          at {level}/5
      </meter>
      <p className="level-str">{LEVELS[level]}</p>
    </>
  )
}

