import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import products from "../../../public/data";
import TopNav from "../../../components/TopNav";
import Message from "../../../components/message";

function details() {
    const router = useRouter();
    const { product_id } = router.query;
    const product = products.find(product => product.id === +product_id);
    const msg = useSelector(state => state.message);  

    if (product) {
        const { img, name, description, price } = product;
        return (
            <div style={{ height: "100%", position: "relative" }}>  
                {msg && <Message msg={msg} />}
                <TopNav />
                <ProductDisplay 
                img={img} 
                name={name} 
                description={description} 
                price={price} />            
            </div>
        )    
    }
    return null;
}

export default details;