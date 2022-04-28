import { useRouter } from "next/router";
import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";
import products from "../../data";
import TopNav from "../../../components/TopNav";
import SelectQuantity from "../../../components/products/select_quantity";

const details = () => {
    const router = useRouter();
    const { product_id } = router.query;
    const product = products.find(product => product.id === +product_id);

    if (product) {
        return (
            <>
                <TopNav />
                <Container>
                    <Button variant="link">Back to Products</Button>
                    <Row className="mt-5">
                        <Col xs={4}>
                            <div style={{width: '100%', height: "500px", position: 'relative'}}>
                                <Image variant="top" src={product.img} alt={product.name} layout="fill" objectFit="cover" className="card-img-top img-responsive"/>
                            </div>                    
                        </Col>
                        <Col xs={8}>   
                            <Row>
                                <Col>
                                    <h1>
                                        {product.name}
                                    </h1>
                                    <h4 className="text-muted">
                                        ${product.price}
                                    </h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="d-flex align-items-center">
                                    <SelectQuantity />
                                    <Button variant="primary">Add to Cart</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </>
        )    
    }
    return null;
}

export default details;