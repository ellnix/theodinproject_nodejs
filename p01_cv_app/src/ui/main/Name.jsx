import EditButton from '../EditButton'

export default function Name({ changeName }) {
  return (
    <div className="name-wrapper">
      <div className="name">
        <EditButton onClick={changeName} />
        <h1>
          Jane Doe
        </h1>
      </div>
    </div>
  )
}
