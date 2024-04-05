
import React from 'react'

function TodoItem() {


  let todoname = 'buy milk';
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

export default TodoItem