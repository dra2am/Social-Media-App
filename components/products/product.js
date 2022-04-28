import { Card } from "react-bootstrap";
import { useRouter } from "next/router";
import Image from "next/image";

const Product = ({ name, img, price, id }) => {
    const router = useRouter()

    const handleClick = (e) => {
        e.preventDefault();
        router.push(`/products/details/${id}`)
    }

    return (
        <Card style={{ borderWidth: 0 }} onClick={handleClick} className="product mb-4">
            <div style={{width: '100%', height: "200px", position: 'relative'}}>
                <Image variant="top" src={img} alt={name} layout="fill" objectFit="cover" className="card-img-top img-responsive"/>
            </div>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">${price}</Card.Subtitle>
            </Card.Body>
        </Card>
    )
}

export default Product;