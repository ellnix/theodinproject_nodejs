import Edit from '../assets/pencil.svg'

export default function EditButton({ onClick }) {
  return (
    <button className="edit-button" onClick={onClick}><img src={Edit} />Edit</button>
  )
}
