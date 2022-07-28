import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

const RecordDetails = (props) => {
  const [records, setRecord] = useState('')

  let { id } = useParams()

  useEffect(() => {
    let selectedRecord = async () => {
      let res = await axios.get(`http://localhost:3001/records/${id}`)
      setRecord(res.data)
      console.log(res)
    }
    selectedRecord()
  }, [])

  //   setRecords(selectedRecord)
  // }, [props.records, id])

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
          <h3>Artist: {records.artist}</h3>
        </div>
        <p>{records.description}</p>
      </div>
    </div>
  ) : null
}

export default RecordDetails
