
import {configureStore} from '@reduxjs/toolkit';

import cartreducer from './CartSlice'

import productReducer from './ProductsSlice'

const store = configureStore({
  reducer:{
    cart:cartreducer,
    product:productReducer,

    
  }
})

export default store;
