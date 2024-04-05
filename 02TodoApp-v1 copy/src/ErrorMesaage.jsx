

import React from 'react'


import  style from './ErrorMesaage.module.css';



function ErrorMesaage({data}) {
  return (
    <>

    {
   data.length == 0 && <p className={style.heading}>Enjoy Your day</p> 
    }
      </>
  )
}

export default ErrorMesaage