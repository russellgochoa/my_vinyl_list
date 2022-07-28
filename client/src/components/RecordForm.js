import { useNavigate } from 'react-router-dom'

const RecordForm = (props) => {
  let navigate = useNavigate()
  const handleSubmit = (e) => {
    props.addRecord(e)
    navigate('/records')
  }

  const newRecord = props.newRecord

  return (
    <div>
      <h1>Add A New Record</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newRecord.title}
          onChange={props.handleChange}
          name={'title'}
          placeholder={'title'}
        />
        <input
          type="text"
          value={newRecord.artist}
          onChange={props.handleChange}
          name={'artist'}
          placeholder={'artist'}
        />
        <input
          type="text-area"
          value={newRecord.description}
          onChange={props.handleChange}
          name={'description'}
          placeholder={'description'}
        />
        <input
          type="text"
          value={newRecord.image}
          onChange={props.handleChange}
          name={'image'}
          placeholder={'image'}
        />
        <button>Add Record</button>
      </form>
    </div>
  )
}

export default RecordForm
