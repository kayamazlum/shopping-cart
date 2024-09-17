const Cart = ({ cart , emptyCart}) => {

  const total= cart.reduce((acc, item)=> acc + item.price ,0)

  if (cart === 0) return
  return (
    <div className="border w-72 ml-auto p-4 mt-2 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Sepet</h2>
      <ul>
        {cart.map((item) =>{
          return(
            <li className="mt-2 flex justify-between" key={item.id}>
            <span>{item.name}</span>
            <span>{item.price}</span>
          </li>
          )
        } )}
      </ul>
      <hr className="my-4" />
      <p className="font-semibold text-xl">Toplam : {total} TL</p>
      <button onClick={emptyCart} className="bg-red-500 text-white px-2 py-2 w-full hover:bg-red-600 mt-4 transition-all">Sepeti Boşalt</button>
    </div>
  )
}

export default Cart
