import React from 'react'

function Button({name}) {
  return (
    <button className ="p-2 m-5 bg-gray-300 rounded-lg hover:bg-gray-800 hover:text-white">
        {name}
    </button>
  )
}

export default Button