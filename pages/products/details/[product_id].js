import { useRouter } from "next/router";
import { Container, Row, Col, Button } from "react-bootstrap";
import products from "../data";
import TopNav from "../../../components/TopNav";
import SelectQuantity from "../../../components/products/select_quantity";

const details = () => {
    const router = useRouter();
    const { product_id } = router.query;
    const product = products.find(product => product.id === +product_id);

    return (
        <>
            <TopNav />
            <Container>
                <Row>
                    <Col xs={4}>
                        <img src={product?.img} className="img-fluid" alt={product?.name} />
                    </Col>
                    <Col xs={8}>   
                        <Row>
                            <Col>
                                <h1>
                                    {product?.name}
                                </h1>
                                <span className="text-muted">
                                    ${product?.price}
                                </span>
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

export default details;