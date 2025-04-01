import Cardforall from "./Cardforall"
import "../Styles/CardContainer.css"

const ProductList = ({ products }) => {
    return (
    <div className="ProductList">
        {products.map((product) => (
        <Cardforall key={product.id} Products={product} />
        ))}
    </div>
)
}

export default ProductList
