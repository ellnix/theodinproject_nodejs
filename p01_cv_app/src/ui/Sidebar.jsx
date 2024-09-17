import Location from './sidebar/Location'
import Expertise from './sidebar/Expertise'
import Education from './sidebar/Education'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Location />
      <Expertise />
      <Education />
    </div>
  )
}
