import School from './education/School'

const education = [
  {
    title: 'MIT',
    subtitle: '2022-2024',
  }
]

export default function Education() {
  return (
    <section className="education">
      <h3>Education</h3>
      {education.map(school =>
        <School {...school} />
      )}
    </section>
  )
}
