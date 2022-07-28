import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Listings = () => {
  const [records, setRecords] = useState([])
  const initialState = {
    title: '',
    artist: '',
    description: '',
    image: ''
  }
  const [formState, setFormState] = useState(initialState)

  useEffect(() => {
    const getRecords = async () => {
      const res = await axios.get(`http://localhost:3001/records`)
      console.log(res)
      setRecords(res.data.records)
    }
    getRecords()
  }, [])

  let navigate = useNavigate()
  const showRecord = (record) => {
    navigate(`listings/${record._id}`)
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formState)
    setFormState(initialState)
  }

  return (
    <div>
      <div className="records">
        <form onSubmit={handleSubmit}>
          <label htmlFor="artist">Artist:</label>
          <input type="text" id="artist" />
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" />
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" />
          <label htmlFor="image">Image:</label>
          <input type="text" id="image" />
          <button type="submit">Add Record</button>
        </form>
        <h2>Records</h2>
        <section className="container-grid">
          {records
            ? records.map((record) => (
                <div onClick={() => showRecord(record)} key={record._id}>
                  {record.title}
                  {record.artist}
                  {record.description}
                  <img src={record.image} alt={record.title} />
                </div>
              ))
            : ''}
        </section>
      </div>
    </div>
  )
}

export default Listings
