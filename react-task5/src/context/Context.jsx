import React, { useContext, createContext, useReducer } from 'react'
import list from '../data';
import { cartReducer, productReducer } from "./Reducers";


const Cart=createContext();


const Context = ({children}) => {
  
  const products=list.map(()=>({
    
     
  }))

  const [state, dispatch]=useReducer(cartReducer,{
    products:list,
    cart:[]
  });
 
  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  return (
   <Cart.Provider value={{state,dispatch, productState, productDispatch}}> 
    {children}
   </Cart.Provider>
  )
};

export default Context;
export const CartState=()=>{
  return useContext(Cart);
}