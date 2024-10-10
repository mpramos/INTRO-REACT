import React, { useState } from 'react'

function COntador() {
    const [count,setCount]= useState(0)
  return (
    <>
    <p>Has hecho clics {count} veces</p>
    <button onClick={()=> setCount(count+1)}>Haz Click</button>
    </>
  )
}

export default COntador