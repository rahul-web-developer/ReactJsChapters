

import React, { useState } from 'react'

function Random() {

let [number,setnumber] = useState(0)

function randomnumber(){

  let numbervalue = Math.floor(Math.random()*10);
  setnumber(numbervalue);
  
}


  return (
    <>
    
<h1 onClick={randomnumber}>Random number is{number} </h1>
    <button className='btn btn-warning'>warning</button>
    
    
    
    </>
  )
}

export default Random