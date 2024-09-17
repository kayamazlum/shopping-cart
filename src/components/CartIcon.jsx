import { LuShoppingCart } from "react-icons/lu";
const CartIcon = ({ cart }) => {
    return (
        <div className="relative">
            <LuShoppingCart className="text-4xl " />
            {
                cart.length > 0 && (
                    <span className="bg-red-500 text-white flex h-5 w-5 rounded-full justify-center items-center absolute -top-2 -right-3 text-xs ">
                        {cart.length}
                    </span>
                )
            }
        </div>
    )
}
export default CartIcon