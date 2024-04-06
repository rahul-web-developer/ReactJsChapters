
import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { remove } from '../store/CartSlice';

function Cart() {


const itemsdata  =  useSelector((state)=>state.cart)

const dispatch = useDispatch();




const handleRemove = (proid)=>{

dispatch(remove(proid))


}

  return (
    <div>


      <h3>Cart</h3>

      <div className="cart-wrapper">

{

  itemsdata.map(pro => (

    <div className='cartCard'>
    
    <img src={pro.image} alt="img" />

   <h5>{pro.title}</h5>
   <h5>{pro.price}</h5>
   <button className='remove-btn' onClick={()=> handleRemove(pro.id)}>Remove</button>

    </div>
  ))

}

      </div>


    </div>
  )
}

export default Cart