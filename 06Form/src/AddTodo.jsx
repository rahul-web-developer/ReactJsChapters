

import React, { useState,useRef, useContext} from 'react'
import { Todoitemscontext } from './store/todo-item-store';

// import {BiMessageAdd,MdDelete} from 'react-icons/bi'

function AddTodo() {

  // const [todoname,settodoname] = useState('');

  // const [duedate,setduedate] = useState('');


  const todoNamelement = useRef();
  const tododateelement = useRef();


  const contextapi = useContext(  Todoitemscontext
    )


    const addnewitembtn = contextapi.Addnewitem;





// const hanlednamechange = (event)=>{
//   // console.log(event.target.value)
//   settodoname(event.target.value)

//   // noofupdates++

//   // noofupdates.current += 1
// }
// const handledatechange = (event)=>{

// setduedate(event.target.value)

// }

const handleaddbtnclick = (event)=>{

  



event.preventDefault()

const todoname = todoNamelement.current;
const tododate = tododateelement.current;


console.log(todoname)
console.log(tododate)


  if(!todoname.value){
    alert("Please enter some data")
   
  }else{
    addnewitembtn(todoname.value,tododate.value)
 
  }

  todoname.value = ""
  tododate.value = ""
 



}


  return (

<>

<form className="row" onSubmit={handleaddbtnclick}>



<div className="col-6"npm>
  <input type="text" ref={todoNamelement} placeholder='enter todo here' />
</div>

<div className="col-4">
  <input type="date" 
  ref={tododateelement}
   
    />
</div>

  <div className="col-2">
<button className='btn btn-success kg-button'>
  {/* <BiMess ageAdd /> */}
  add

</button>
  </div>

</form>

    </>
  )
}

export default AddTodo;