

import React, { useState } from 'react'
 

import style from './App.module.css';
import Display from './components/Display';
import ButtonCon from './components/ButtonCon';


function App(){


  let [calval,setcalval] = useState('');

  const onbuttonclick = (buttonText)=>{
    console.log(buttonText)


if(buttonText === "C"){
  
  setcalval("")


}else if(buttonText === "="){

  const newvalue = eval(calval)

  setcalval(newvalue)
 

}else{

  const newdisplayvalue = calval + buttonText;


  setcalval(newdisplayvalue)



}



  }



  return (
    <div className={style.calculator}>

     <Display displayvalue={calval}  /> 

     <ButtonCon  setval={onbuttonclick} />





    </div>
  )
}

export default App