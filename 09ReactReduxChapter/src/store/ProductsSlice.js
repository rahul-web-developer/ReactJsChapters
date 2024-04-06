



import {createSlice} from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils';

// const initialState = [];

export const STATUSES = Object.freeze(
  {
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading',
    
    }
);




const ProductSlice = createSlice({
  name:'product',
  initialState:{

    data:[],
    status:STATUSES.IDLE,

  },

  reducers:{

   setproducts(state,action){
     state.data = action.payload

    },
   setstatus(state,action){

    state.status = action.payload

   }

  }

})


export const {setproducts,setstatus}  = ProductSlice.actions;


export default ProductSlice.reducer

export function fetchproducts(){


  return async function fetchproductthunk(dispatch,getstate){

    dispatch(setstatus(STATUSES.LOADING))

    



    try {
      
      
     const res = await fetch(`https://fakestoreapi.com/products`)


     const data = await res.json();

     dispatch(setproducts(data))

     dispatch(setstatus(STATUSES.IDLE))


    } catch (error) {

      console.log(error)
      dispatch(setstatus(STATUSES.ERROR))

    }

  }

}