
import style from './ButtonCon.module.css'
import React, { useState } from 'react'


function ButtonCon({setval}) {

  //  function setvalue(value,e){

  //   console.log(e.target.value+value)
    
 
  //    setval(value)
  //  }


  const buttonName = [
    'C',
    '1',
    '2',
    '+',
    '3',
    '4',
    '-',
    '5',
    '6',
    '*',
    '7',
    '8',
    '/',
    '=',
    '9',
    '0',
    '.'
  ]


  return (
   <>
   
   <div className={style.btncon}>


{
buttonName.map(btn=>   <button className={style.classbtn}

onClick={()=>setval(btn)}
>{btn}</button>

)
}
 
</div>
   
   </>
  )
}

export default ButtonCon