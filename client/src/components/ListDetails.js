import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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

  let navigate = useNavigate()
  const showList = (list) => {
    navigate(`${list._id}`)
  }

  return (
    <div>
      <h2>Lists</h2>
      <section className="container-grid">
        {lists
          ? lists.map((list) => (
              <div onClick={() => showList(list)} key={list._id}>
                {list.name}
              </div>
            ))
          : ''}
      </section>
    </div>
  )
}

export default ListDetails
