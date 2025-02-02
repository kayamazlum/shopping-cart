
const ProductItem = ({product, setCart, cart}) => {

  const findProduct = cart.find((item)=> item.id === product.id)

  const addToCart = (product)=>{
    // setCart([...cart, product])
    setCart((prevState)=> [...prevState, product])
  }

  return (
    <div className='border p-4 m-2 rounded-lg shadow-lg'>
      <img className="w-full h-48 object-cover rounded-t-lg" src={product.image} alt="product image"/>
      <div className="p-2">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-gray-500 my-2">{product.price}</p>
        <button disabled={findProduct} onClick={()=>addToCart(product)} 
        className={`bg-blue-600 text-white px-4 py-[0.4rem] rounded hover:bg-blue-500 w-full ${findProduct && "opacity-50 cursor-no-drop"}`}>
            Sepete Ekle
        </button>
      </div>
    </div>
  )
}

export default ProductItem
