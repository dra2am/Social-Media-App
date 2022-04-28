import { useSelector } from "react-redux"

const Cart = () => {
    const cart = useSelector(state => state.cart)
    console.log('cart', cart)

    return null;
}

export default Cart;