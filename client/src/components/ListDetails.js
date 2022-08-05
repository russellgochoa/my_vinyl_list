import { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useParams } from 'react-router-dom'
import axios from 'axios'

const ListDetails = (props) => {
  const [lists, setLists] = useState('')

  useEffect(() => {
    const getLists = async () => {
      const res = await axios.get(`http://localhost:3001/lists`)
      console.log(res)
      setLists(res.data.lists)
    }
    getLists()
  }, [])
}

export default ListDetails
