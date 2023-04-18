import React, { useState } from 'react'
import { library } from '../Library/library'
import Cards from '../Components/Cards'
import Select from './../Components/Select';
import Button from './../Components/Button';
function Home() {

  const [dataApi, setDataApi] = useState([])

  const url = "https://mhw-db.com/armor"

  const data = async() => {
      const traer = await library.consume(url)
        .then(a => console.log(a))
        .catch(err => console.log(err))

      return setDataApi(traer)
    }

  return (
    <div className='container'>
      <div>
        <Select />
        <br />
        <Button />
      </div>
      {dataApi.map((datos, index) => {
        console.log(datos[index])
      })}
    </div>
  )
}

export default Home