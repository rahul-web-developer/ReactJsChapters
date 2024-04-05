


import  React, {  useContext, useState } from 'react';
import UserContext from '../context/UserContext';


function Login() {

  const [username,setusername] = useState('');

  const [password,setpassword] = React.useState('');


  const {setUser,user} = useContext(UserContext)


  const handlesubmit = (e)=>{

    e.preventDeafult()

    setUser({username,password})


  }
  
  return (
    <div>
      <h2>Login</h2>
      <input type="text"
      value={username}
      onChange={(e)=>setusername(e.target.value)}
      placeholder='User name' />


      <input  value={password}
      onChange={(e)=>setpassword(e.target.value)} type="password" />

      <button onClick={handlesubmit}>Submit</button>
      </div>
  )
}

export default Login