
import React from 'react'

function TodoItem2() {
  


    let todoname = 'go to college ';
    let tododate = '10/10/23';
  
  
    return (
      <>
      
      <div className="row">
  
  
  <div className="col-6">
  {todoname}</div>
  
  <div className="col-4">
  {tododate}
  </div>
  
    <div className="col-2">
  
      <button type='button' className='btn btn-danger'>Delete</button>
  
    </div>
  
  
  
    </div>
      
      
      </>
    )
  }
export default TodoItem2;