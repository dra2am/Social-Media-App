"use client"
import styles from "./page.module.css";
import { TopNav } from "./_components/TopNav" ;
import { Products } from "./_components/products/Products"
import { useReducer } from 'react'
import { ProductCardInterface } from "_components/products/ProductCard";

export interface PassReducerInterface {
  itemsState? : ProductCardInterface[],
  dispatchAddItems?: (payload: ProductCardInterface)=>void,
  dispatchRemoveItems?:(payload: number)=>void,
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
  payload : ProductCardInterface | number
}

export const itemsReducer = (state : ProductCardInterface[], action:ItemsActionInterface) => {
  const {type, payload} = action;
  
  if (typeof payload !== 'number') {
  }

  switch (type) {
    case (ItemsActions.AddToCart): { 
      if (typeof payload !== 'number') {
        const isInCart = state.find( x => x.id === payload.id)
        if(isInCart == undefined){
          return [
            ...state,
            payload
          ]
        } else {
          return [
            ...state.map(x => {
              if(x.id == payload.id){
                return payload
              } else {
                return x
              }
            })
          ]
        }
      }
    } 
    
    case (ItemsActions.RemoveFromCart):{  
      return state.filter(x => x.id == payload)
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

  const dispatchRemoveItems = (payload : number) => {
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