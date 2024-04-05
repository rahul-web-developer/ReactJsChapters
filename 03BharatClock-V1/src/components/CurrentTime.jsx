
import React, { useState } from 'react'

function CurrentTime() {

  let time = new Date()

  

  let [set,setstae] = useState();

  setInterval(() => {
    
    setstae(time.toLocaleTimeString())
  }, 1000);


  



  return (
    <div>CurrentTime {set}</div>
  )
}

export default CurrentTime