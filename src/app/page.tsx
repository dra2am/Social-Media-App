"use client"
import styles from "./page.module.css";
import { TopNav } from "./_components/TopNav" ;
import { Products } from "./_components/products/Products"
import { useReducer } from 'react'
import { ProductCardInterface } from "_components/products/ProductCard";

export interface PassReducerInterface {
  itemsState? : ProductCardInterface[],
  dispatchAddItems?: (payload: ProductCardInterface)=>void,
  dispatchRemoveItems?:(payload: ProductCardInterface)=>void,
  dispatchUpdateQty?:(payload: ProductCardInterface)=>void
}

const initialItems: ProductCardInterface[] = [];

enum ItemsActions {
  AddToCart = "Add",
  RemoveFromCart = "Remove",
  UpdateQty = "Update"
}

interface ItemsActionInterface {
  type: ItemsActions,
  payload : ProductCardInterface
}

export const itemsReducer = (state : ProductCardInterface[], action:ItemsActionInterface) => {
  const {type, payload} = action;
  console.log(`Action Type: ${type}, Item ID: ${payload.id}, Current Qty: ${payload.qty}`);  //can confirm called once
  switch (type) {
    case (ItemsActions.AddToCart): { 
      console.log(`....Adding item ${payload.id}`) //can confirm called once
      const isInCart = state.find( x => x.id === payload.id)
      if(isInCart == undefined){
        return [
          ...state,
          payload
        ]
      }
    } 

    case (ItemsActions.UpdateQty): {
      console.log(`....Updating item ${payload.id}`)  //can confirm called once
      return state.map(x => {
          if(x.id === payload.id){
             return {
              ...x,
              qty : (x.qty || 0) + 1 
             }
          } 
          return x
        })
    }
    
    case (ItemsActions.RemoveFromCart):{   
      return state.filter(x => x.id == payload.id)
      
    }
    default: {
      return state;
    }
  }
}

export default function Home() {

  const [ items, dispatch ] = useReducer(itemsReducer, initialItems)

  const dispatchAddItems = (payload : ProductCardInterface) => {
    dispatch({
      type: ItemsActions.AddToCart,
      payload
    })
  }

  const dispatchRemoveItems = (payload : ProductCardInterface) => {
    dispatch({
      type: ItemsActions.RemoveFromCart,
      payload
    })
  }

  const dispatchUpdateQty = (payload : ProductCardInterface) => {
    dispatch({
      type: ItemsActions.UpdateQty,
      payload
    })
  }

  const passToNav : PassReducerInterface = {
    itemsState: items,
    dispatchRemoveItems: dispatchRemoveItems
  }

  const passToProducts : PassReducerInterface = {
    dispatchAddItems: dispatchAddItems,
    dispatchUpdateQty : dispatchUpdateQty
  }

  return (
    <>
        <TopNav {...passToNav} ></TopNav>
        <Products {...passToProducts}></Products>
    </>
  );
}