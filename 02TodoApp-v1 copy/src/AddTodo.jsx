

import React, { useState } from 'react'

// import {BiMessageAdd,MdDelete} from 'react-icons/bi'

function AddTodo({oclickbtn}) {

  const [todoname,settodoname] = useState('');

  const [duedate,setduedate] = useState('');

const hanlednamechange = (event)=>{
  // console.log(event.target.value)
  settodoname(event.target.value)
}
const handledatechange = (event)=>{

setduedate(event.target.value)

}

const handleaddbtnclick = (todoname,duedate)=>{




  if(!todoname){
    alert("Please enter some data")
   
  }else{
    
    oclickbtn(todoname,duedate)

  }
  settodoname('')
  setduedate('')

}


  return (

<>
<div className="row">


<div className="col-6"npm>
  <input type="text" value={todoname} placeholder='enter todo here' onChange={hanlednamechange} />
</div>

<div className="col-4">
  <input type="date" value={duedate} onInput={handledatechange} />
</div>

  <div className="col-2">
<button className='btn btn-success kg-button' onClick={()=>handleaddbtnclick(todoname,duedate)}>
  {/* <BiMessageAdd /> */}
  add
</button>
  </div>



  </div>
    </>
  )
}

export default AddTodo