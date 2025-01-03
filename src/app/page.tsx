"use client"
import styles from "./page.module.css";
import { TopNav } from "./_components/TopNav" ;
import { Products } from "./_components/products/Products"
import { useReducer } from 'react'
import { ProductCardInterface } from "_components/products/ProductCard";

export interface PassReducerInterface {
  itemsState? : ProductCardInterface[],
  dispatchAddItems?: (payload: ProductCardInterface)=>void,
  dispatchRemoveItems?:(payload: ProductCardInterface)=>void
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

  const passToNav : PassReducerInterface = {
    itemsState: items,
    dispatchRemoveItems: dispatchRemoveItems
  }

  const passToProducts : PassReducerInterface = {
    dispatchAddItems: dispatchAddItems
  }

  return (
    <>
        <TopNav {...passToNav} ></TopNav>
        <Products {...passToProducts}></Products>
    </>
  );
}

const initialItems: ProductCardInterface[] = [];

enum ItemsActions {
  AddToCart = "Add",
  RemoveFromCart = "Remove"
}
interface ItemsActionInterface {
  type: ItemsActions,
  payload : ProductCardInterface
}

export const itemsReducer = (state : ProductCardInterface[], action:ItemsActionInterface) => {
  const {type, payload} = action;
  switch (type) {
    case ItemsActions.AddToCart:{ 
      return [
        ...state,
        payload
      ]
    }
    case ItemsActions.RemoveFromCart:{      
      return [
        ...state.filter(x => x.id == payload.id)
      ]
    }
    default: {
      return state;
    }
  }
}