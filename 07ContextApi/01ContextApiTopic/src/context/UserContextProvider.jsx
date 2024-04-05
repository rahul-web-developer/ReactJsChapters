
import React, { Children, useState } from 'react'

import UserContext from './UserContext'





function UserContextProvider({chilren}) {

const [user,setuser] = useState(null)



  return (
    <UserContext.Provider value={{
      user,
      setuser,
    }}>

    {Children}
    
    
    </UserContext.Provider>
  )
}

export default UserContextProvider