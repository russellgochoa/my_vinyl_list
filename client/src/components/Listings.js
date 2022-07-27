import axios from 'axios'
import { useState, useEffect } from 'react'

const Listings = () => {
  const [records, setRecords] = useState([])

  useEffect(() => {
    const getRecords = async () => {
      const res = await axios.get(`http://localhost:3001/records`)
      console.log(res)
      setRecords(res.data.records)
    }
    getRecords()
  }, [])

  return (
    <div>
      <div className="records">
        <h2>Records</h2>
        <section className="container-grid">
          {records
            ? records.map((record) => (
                <div>
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