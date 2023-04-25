import React from 'react'

function Cards(props) {

    const {url, title, descripcion} = props


  return (
    <div className="card">
        <img src={url} alt="" />
    </div>
  )
}

export default Cards