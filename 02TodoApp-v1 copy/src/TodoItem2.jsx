
import React from 'react'

// import {BiMessageAdd,MdDelete} from 'react-icons/bi'


function TodoItem2({tododata,handledeleteitem}) {
  
  return(
    <div className='row'>

{
 tododata.map((data,i)=>{
    return(
      <>
      
      <div className='col-6' key={i}>
{data.name}
</div>

<div className="col-4">
{data.duedate}
</div>

<div className="col-2">

  <button type='button'  className='btn btn-danger' onClick={()=>handledeleteitem(data.name)}>
  {/* <MdDelete /> */}
delete
 
    </button> 

</div>
       </>
    )
  })
}

    </div>
  )
  
    }
  
  
export default TodoItem2;


