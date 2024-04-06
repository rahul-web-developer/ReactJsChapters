

import React from 'react'

import { Link } from 'react-router-dom'

import  * as ReactDomclient from 'react-dom/client'

import {useSelector} from 'react-redux';



function Navbar() {


  const items = useSelector((state)=> state.cart )


  return (

    

    <div className='flex'>


<span className='logo'>REDUX STORE</span>

<div className='for-link'>
  <Link className="navlinks" to='/'>Home</Link>
  <Link className="navlinks" to='/cart'>Cart</Link>


<span className='cartcount'>
  Cart Items: {items.length}
</span>


</div>




    </div>

  )
}

export default Navbar