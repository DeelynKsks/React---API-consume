import React from 'react'

function Button(props) {

  const { action } = props

  return (
    <div>
        <button onClick={action}>Show data</button>
    </div>
  )
}

export default Button