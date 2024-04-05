
import React from 'react'

function Message({data}) {
  return (
    <>
    
    {
  data.length === 0 && <h1>i am still hungry</h1>
}
    </>
  )
}

export default Message