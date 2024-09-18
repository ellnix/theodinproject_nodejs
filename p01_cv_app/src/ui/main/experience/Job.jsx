export default function Job({title, subtitle, description}) {
  return (
    <section className="job">
      <h4>{title}</h4>
      <p className="job-subtitle">{subtitle}</p>
      <p>{description}</p>
    </section>
  )
}
