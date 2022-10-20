import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";
import products from "../../../public/data";
import TopNav from "../../../components/TopNav";
import SelectQuantity from "../../../components/products/select_quantity";
import Message from "../../../components/message";
import { addToCart, displayMessage } from "../../../redux-files/actions/index"

function details() {
    const [ qty, setQty ] = useState(1);
    const router = useRouter();
    const { product_id } = router.query;
    const product = products.find(product => product.id === +product_id);

    //create a selector for the state
    const msg = useSelector(state => state.message);  
    const dispatch = useDispatch();

    const handleChange = (e) => {
        e.preventDefault();
        setQty(e.target.value);
    }

    //adds item to cart and displays a message
    const handleSubmit = () => {
        const payload =  `${product.name} has been added to your cart.`;
        dispatch(addToCart(product.name, qty))
        dispatch(displayMessage(payload))
    }

    if (product) {
        const { img, name, description, price } = product;
        return (
            <div style={{ height: "100%", position: "relative" }}>  
                {msg && <Message msg={msg} />}
                <TopNav />
                <Container>
                    <Button variant="link" onClick={()=>router.push("/")}>Back to Products</Button>
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
                                    <Button variant="primary" onClick={handleSubmit}>Add to Cart</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )    
    }
    return null;
}

export default details;