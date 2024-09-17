import ProductItem from "./ProductItem"
import ProductData from "../ProductData"

const Products = (props) => {
  return (
    <div className="grid grid-cols-3 gap-10 mb-8">
      {ProductData.map((product)=>{
        return(
          <ProductItem key={product.id} product={product} cart={props.cart} setCart={props.setCart}/>
        )
      })}
    </div>
  )
}

export default Products
