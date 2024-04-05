
import React, { useContext } from 'react';
import { Todoitemscontext } from './store/todo-item-store';



// import {BiMessageAdd,MdDelete} from 'react-icons/bi'


function TodoItem2() {
  


  const  {todoitemscontextfrom,handledeleteitem,todoval} = useContext(Todoitemscontext)

  // const todoitemnew = todoitemscontextfrom.todoval;

  // const handledeleteitem = todoitemscontextfrom.handledeleteitem;


  // console.log(todoitemnew)

  return(
    <div className='row'>



{
 todoval.map((data,i)=>{
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


