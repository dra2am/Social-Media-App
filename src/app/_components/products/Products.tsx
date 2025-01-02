//interface can be used to define types for props
//func return type is implied but is JSX.Element
//const [state, setState] = useState<string>("defaultValue"); -- but state can be inferred for default values
// for state that may be null --> const [user, setUser] = useState<User | null>(null);

//for mocking purposes products are in file, realistically would be fetched from blob storage
import products from "../../../../public/data/data"
import { ProductCard } from "./ProductCard"

export const Products = () => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            {/* searchbar - could go anywhere since it would be querying storage
             should pass products in as props?*/}
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">All Products</h2>            
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products.map(product => {
                    return (
                        <div key={product.id}>                        
                            <ProductCard {...product} />
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
        
    )
}