import { Card } from "react-bootstrap";
import { useRouter } from "next/router";


const Product = ({ name, img, price, id }) => {
    const router = useRouter()

    const handleClick = (e) => {
        e.preventDefault();
        router.push(`/products/details/${id}`)
    }

    return (
        <Card style={{ borderWidth: 0 }} onClick={handleClick}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">${price}</Card.Subtitle>
            </Card.Body>
        </Card>
    )
}

export default Product;