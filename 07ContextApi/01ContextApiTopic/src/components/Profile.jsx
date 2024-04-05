

import React, { useContext } from 'react'
import UserContext from '../context/UserContext'




function Profile() {


  const {user} = useContext(UserContext)

  if(!user) return <p>please login</p>
   

  return <div>welcome {user.username}</div>


  return (
    <div>Profile</div>
  )
}

export default Profile