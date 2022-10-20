import React from "react";
import { Container, Table } from "react-bootstrap"
import { useSelector } from "react-redux"

const CartTable = () => {
    
    const cart = useSelector(state => { cart })

    return (
        <Container>
        <h1>Shopping Cart</h1>
        { cart.length ? 
            <Table className="mt-5">
                <thead>
                    <th>Qty.</th>
                    <th>Name</th>
                </thead>
                <tbody>
                    {cart.map((product, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    {product.qty}
                                </td>
                                <td>
                                    {product.name}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
         : "Your cart is empty."}
    </Container>
    );
}

export default CartTable;