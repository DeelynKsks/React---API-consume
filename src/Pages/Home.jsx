import React, { useState } from 'react'
import { library } from '../Library/library'
import Cards from '../Components/Cards'
import Select from './../Components/Select';
import Button from './../Components/Button';
function Home() {

  const [dataApi, setDataApi] = useState([])

  const url = "https://mhw-db.com/armor"

  const handleButtonShowData = async () => {
    const data = await library.consume(url)
                                  .then(a => a)
                                  .catch(err => err)

    setDataApi(data)
  }

  return (
    <div className='container'>
      <div>
        <Button action={handleButtonShowData}/>
      </div>
      {dataApi.map((datos, index) => {
        console.log(datos[index])
      })}
    </div>
  )
}

export default Home