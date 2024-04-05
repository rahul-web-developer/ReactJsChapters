

import style from './Display.module.css'

import React from 'react'

function Display({displayvalue}) {
  return (
    <div>
     <input type="text" value={displayvalue} className={style.display} placeholder='' readOnly />


    </div>
  )
}

export default Display