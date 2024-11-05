import EditButton from '../EditButton'

export default function JobTitle({ title }) {
  return (
    <section>
      <EditButton />
      <h2>
        {title}
      </h2>
    </section>
  )
}
