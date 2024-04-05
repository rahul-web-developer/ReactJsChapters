
import React from 'react'

function Item({data,bought,handleButtonClicked}) {




  return (
    <>
    <li className={`list-group-item ${bought && 'active' } kg-item `}><span className='span'>{data}</span>
    
    <button

    onClick={()=>handleButtonClicked(data)}

    >Buy</button>
    </li>
  
    
    </>
  )
}

export default Item