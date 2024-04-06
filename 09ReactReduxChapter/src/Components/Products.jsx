
import React, { useState,useEffect } from 'react'

import  * as ReactDomclient from 'react-dom/client'

import {useDispatch,useSelector}  from 'react-redux'

import { STATUSES, fetchproducts } from '../store/ProductsSlice';


import { add } from '../store/CartSlice';
function Products() {

  const {data : products,status} = useSelector((state)=>state.product)


  const dispatch = useDispatch();


  // const [products,setproducts] = useState([]);





  useEffect(()=>{

  //  const fetchproducts = async ()=>{
  
  //    const res = await fetch(`https://fakestoreapi.com/products`)


  //    const data = await res.json();

     
  //    setproducts(data)


  //  }  
  // //  fetchproducts()


  dispatch(fetchproducts());


  },[])


  const handledadd = (product)=>{


    dispatch(add(product))


   
    

  }


  if(status === STATUSES.LOADING){
    return <h2>Loading...</h2>
  }

  if(status === STATUSES.ERROR){
     return <h2>Something went wrong</h2>
  }

  return (
    <div className='products-wrapper'>


     { 
     
     products.map(productsdata =>(
      <div className='cart' key={products.id}>

        <img src={productsdata.image} alt="img" />

    <h5>{productsdata.title}</h5>

<button className='btn' onClick={()=>handledadd(productsdata)}>Add to Cart</button>

      </div>

     ) )

     }
      
      </div>
  )
}



export default Products