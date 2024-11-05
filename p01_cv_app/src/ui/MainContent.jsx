import JobTitle from "./main/JobTitle"
import Bio from "./main/Bio"
import Experience from "./main/Experience"

import { useState } from 'react'

export default function MainContent() {
  const [jobTitle, setJobTitle] = useState("Lumberjack")

  return (
    <main>
      <JobTitle title={jobTitle} />
      <Bio />
      <Experience />
    </main>
  )
}
