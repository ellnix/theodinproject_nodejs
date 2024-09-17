import Name from "./main/Name"
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import LinksRibbon from './LinksRibbon'

export default function CV() {
  return (
    <div className="cv-wrapper">
      <Name />
      <div className="cv">
        <Sidebar />
        <MainContent />
        <LinksRibbon />
      </div>
    </div>
  )
}
