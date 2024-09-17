import Sidebar from './Sidebar'
import MainContent from './MainContent'
import LinksRibbon from './Links'

export default function CV() {
  return (
    <div className="cv-wrapper">
      <Sidebar />
      <MainContent />
      <LinksRibbon />
    </div>
  )
}
