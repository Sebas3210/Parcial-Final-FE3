import React, { useEffect, useState } from 'react'
import { useGlobalContext, url } from '../Components/utils/global.context'
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Detail = () => {
 
  const params = useParams()

  const [dentist, setDentist] = useState({})
  const dentistUrl = `${url}/${params.id}`

  useEffect(() => {
    axios(dentistUrl)
    .then((res) => setDentist(res.data))
  }, [])

  return (
    <div >
      <h1>Detail Dentist ID #{dentist.id}</h1>
      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Website</th>
          </tr>
        </thead>
        <thead> 
          <tr>
            <td>{dentist.name}</td>
            <td><a href={dentist.email}>{dentist.email}</a></td>
            <td>{dentist.phone}</td>
            <td><a href={dentist.website}>{dentist.website}</a></td>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default Detail