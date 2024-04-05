import React, { useState } from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import AppName from './components/AppName';
import Message from './components/Message';
import Fooditems from './components/Fooditems';

import './App.css';
import Container from './components/Container';
import Foodinput from './components/Foodinput';



function App() {

  
  // let fooditems = []

  let [fooditems,setfooitems] = useState([])


  // let [texttoshow,settext] = useState("Food item Entered by user");
 
  const handleonchange = (e)=>{
    


    if(e.key === "Enter"){
      let newfooitem = e.target.value;
      e.target.value = "";

      let newitems = [...fooditems,newfooitem];
      setfooitems(newitems)

    }

    // texttoshow = e.target.value;


  }

  return (
    <>

<Container >

<AppName />

<Foodinput handleonchange={handleonchange} />

{/* <p>{texttoshow}</p> */}

<Message
 data={fooditems}
 />


<Fooditems
 data={fooditems}
 />

</Container>
   <Container>
<p>Above is the list of healthy food </p>

   </Container>
  
</>
  )
}

export default App

