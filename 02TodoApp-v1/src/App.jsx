
import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppName from './AppName';
import AddTodo from './AddTodo';
import TodoItem from './Todoitem';
import TodoItem2 from './TodoItem2';

function App() {
  return (
   <>

   <center className='container'>  
    <AppName />
    
<div className=' text-center'>
 
 <AddTodo />

<TodoItem  />
  
<TodoItem2 />


</div>

   </center>








   </>
  )
}

export default App