import { Container, Row, Col } from "react-bootstrap";
import Product from "../../components/products/product";
import products from "./data"

const Products = () => {
    return (
        <Container>
            <Row md={5}>
                {products.map(product => {
                    return (
                        <Col>
                            <Product {...product} key={product.id} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default Products;