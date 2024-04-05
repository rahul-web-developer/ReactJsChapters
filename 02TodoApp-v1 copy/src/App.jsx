
import React, { useState } from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import AppName from './AppName';
import AddTodo from './AddTodo';

import TodoItem2 from './TodoItem2';
import ErrorMesaage from './ErrorMesaage';
import Container from './Container';

import './App.css';



function App() {


let [todoval,settodoval] = useState([])

const onnewitem = (itename,itemduedate)=>{

    let newval = [...todoval,{name:itename,duedate:itemduedate}]


      settodoval(newval)

}

const handledeleteitem = (todoitemname)=>{


console.log(`delete data ${todoitemname}`)

const newtodoitems = todoval.filter((data)=>data.name !== todoitemname)

console.log(newtodoitems)

settodoval(newtodoitems)

}





  return (


   <Container> 
     
    <AppName />
    
<div className=' text-center'>

 <AddTodo oclickbtn={onnewitem} />
 <ErrorMesaage data={todoval} />
<TodoItem2 tododata={todoval} handledeleteitem={handledeleteitem} />


  



</div>

   </Container>

  )
}

export default App