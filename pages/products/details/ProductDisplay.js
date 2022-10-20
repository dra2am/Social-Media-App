import React from "react";
import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux"
import { useState } from "react";
import SelectQuantity from "../../../components/products/select_quantity";
import { addToCart, displayMessage } from "../../../redux-files/actions/index"


const ProductDisplay = ({img, name, description, price}) => {
    const [ qty, setQty ] = useState(1);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        e.preventDefault();
        setQty(e.target.value);
    }

    const handleSubmit = () => {
        const payload =  `${name} has been added to your cart.`;
        dispatch(addToCart(name, qty))
        dispatch(displayMessage(payload))
    }

    return (
        <Container>
        <Button variant="link" href="/">Back to Products</Button>
        <Row className="mt-4">
            <Col xs={4}>
                <div style={{width: '100%', height: "500px", position: 'relative'}}>
                    <Image variant="top" src={img} alt={name} layout="fill" objectFit="cover" className="card-img-top img-responsive"/>
                </div>                    
            </Col>
            <Col xs={8}>   
                <Row>
                    <Col>
                        <h1>
                            {name}
                        </h1>
                        <h4 className="text-muted">
                            ${price}
                        </h4>
                    </Col>
                </Row>
                <Row className="my-4">
                    <Col>
                        <p>{description}</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex align-items-center">
                        <SelectQuantity handleChange={handleChange} />
                        <Button variant="primary" onClick={() => handleSubmit()}>Add to Cart</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>

    )
}

export default ProductDisplay;