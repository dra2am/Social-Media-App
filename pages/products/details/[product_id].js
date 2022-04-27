import { useRouter } from "next/router";
import products from "../data";

const details = () => {
    const router = useRouter();
    const { product_id } = router.query;
    const product = products.find(product => product.id === +product_id);

    return (
        <h1>
            {product?.name}
        </h1>
    )
}

export default details;