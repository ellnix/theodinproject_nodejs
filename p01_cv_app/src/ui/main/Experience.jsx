import Job from './experience/Job'

const jobs = [
  {
    title: "Head of Marketing (2008-2008)",
    subtitle: "Reynholm Industries",
    description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
  },
  {
    title: "Head of IT (2006-2008)",
    subtitle: "Reynholm Industries",
    description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
  },
]

export default function Experience() {
  return (
    <section>
      <h3>Experience</h3>
      {jobs.map(job =>
        <Job {...job} />
      )}
    </section>
  )
}
