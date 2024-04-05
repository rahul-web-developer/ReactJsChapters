

import React from 'react'

import style  from './Foodinput.module.css'



function Foodinput({handleonchange}) {




  return (
<>


<input type="text" placeholder='Enter Food name...' className={style.Foodinput} onKeyDown={(e)=>handleonchange(e)}/>

</>  )
}

export default Foodinput