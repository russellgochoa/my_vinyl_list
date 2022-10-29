import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const RecordDetails = (props) => {
  const [records, setRecord] = useState('')
  const [record, Record] = useState('')

  let initialState = {
    title: '',
    artist: '',
    description: '',
    image: ''
  }
  const [formState, setFormState] = useState(initialState)

  let navigate = useNavigate()
  const showRecord = (record) => {
    navigate(`listings/${record._id}`)
  }

  let { id } = useParams()

  //GET one record

  useEffect(() => {
    let selectedRecord = async () => {
      let res = await axios.get(`http://localhost:3001/records/${id}`)
      setRecord(res.data)
      setFormState(res.data)
    }
    selectedRecord()
  }, [])

  //DELETE one record
  // useEffect(() => {
  const deleteRecord = async () => {
    const res = await axios.delete(`http://localhost:3001/records/${id}`)
    // deleteRecord(res.data.records)
    console.log(res)
  }
  // }, [])

  //PUT update one record
  const handleSubmit = async (event) => {
    event.preventDefault()
    let res = await axios.put(`http://localhost:3001/records/${id}`, formState)
    setFormState(res.data)
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
    console.log(formState)
  }

  return records ? (
    <div className="detail">
      <div className="detail-header">
        <img src={records.image} alt={records.name} />
        <div
          style={{
            minWidth: '30em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <h1>{records.name}</h1>
        </div>
      </div>
      <div className="info-wrapper">
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h3>Title: {records.title}</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="artist">Artist: </label>
            <input
              type="text"
              id="artist"
              value={formState.artist}
              onChange={handleChange}
            />
            <p></p>
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              id="title"
              value={formState.title}
              onChange={handleChange}
            />
            <p></p>
            <label htmlFor="description">Description: </label>
            <input
              type="text"
              id="description"
              value={formState.description}
              onChange={handleChange}
            />
            <p></p>
            <label htmlFor="image">Image:</label>
            <input
              type="text"
              id="image"
              value={formState.image}
              onChange={handleChange}
            />
            <p></p>
            <button type="submit">Update Record</button>
            <p></p>
            <button type="delete" onClick={deleteRecord}>
              Delete Record
            </button>
            <p></p>
          </form>
          <h3>Artist: {records.artist}</h3>
        </div>
        <p>{records.description}</p>
      </div>
    </div>
  ) : null
}

export default RecordDetails
