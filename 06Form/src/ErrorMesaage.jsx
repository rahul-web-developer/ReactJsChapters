




import { createContext, useContext } from 'react';
import  style from './ErrorMesaage.module.css';
import { Todoitemscontext } from './store/todo-item-store';



function ErrorMesaage() {

  
 const tododata = useContext(Todoitemscontext)



  return (
  

    
   tododata.length === 0 && <p className={style.heading}>Enjoy Your day</p> 

  )
}

export default ErrorMesaage