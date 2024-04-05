import React, { useState } from 'react'
import Item from './Item'

function Fooditems({data}) {

  let [active,setactive] = useState([]);

  const onbybtn = (data,e)=>{

    let newitems = [...active,data]

    console.log(active.includes(data))

    setactive(newitems)
  }
  
  return (
    <>
    

<ul className='list-group'>
   
   {

    data.map((data)=>
       <Item data={data} bought={active.includes(data)}  handleButtonClicked={(e)=>onbybtn(data,e)}/>

    )
   }




   </ul>
   
    
    
    
    
    </>
  )
}

export default Fooditems