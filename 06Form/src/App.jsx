
import React, { useReducer, useState } from 'react'

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import AppName from './AppName';
import AddTodo from './AddTodo';

import TodoItem2 from './TodoItem2';
import ErrorMesaage from './ErrorMesaage';
import Container from './Container';
import { Todoitemscontext } from './store/todo-item-store';


const todoitemsreducer = (currentodoItems,action)=>{
  let newtodoitemsdata = currentodoItems;

  if(action.type === "NEW_ITEM"){


   
    newtodoitemsdata = [...currentodoItems,{name:action.payload.itename,duedate:action.payload.itemduedate}]

     

 



  }else if(action.type === "DELETE_ITEM"){


    newtodoitemsdata = currentodoItems.filter((data)=>data.itename !== action.itename )



  }





  return newtodoitemsdata;

}



function App() {


// let [todoval,settodoval] = useState([])

const [todoval,dispatch] = useReducer(todoitemsreducer,[]);

const Addnewitem = (itename,itemduedate)=>{

    

  const newitemaction = {
    type:"NEW_ITEM",
    payload:{
      itename,
      itemduedate

    }

  }

  dispatch(newitemaction)

  // const newtodoitemsinfunction = [...todoval,{name:itename,duedate:itemduedate}]

  //     settodoval(newtodoitemsinfunction)




  

}

const handledeleteitem = (todoitemname)=>{


// console.log(`delete data ${todoitemname}`)

// const newtodoitems = todoval.filter((data)=>data.name !== todoitemname)

// console.log(newtodoitems)

// settodoval(newtodoitems)

const deleteitem = {
  type:"DELETE_ITEM",
  payload:{
    itename:todoitemname,
    

  }

}

dispatch(deleteitem)


}





  return (

<Todoitemscontext.Provider value={{
  todoval,
 Addnewitem,
 handledeleteitem,
   
  }}>


<div className=' text-center conmain'>
<AppName />
 <AddTodo  />
 <ErrorMesaage />
<TodoItem2 />

</div>

</Todoitemscontext.Provider>

  )
}

export default App