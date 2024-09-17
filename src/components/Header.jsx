import CartIcon from "./CartIcon"

const Header = ({cart})=> {
    return(
        <div className="flex justify-between pt-4 mb-8">
            <h1 className="text-3xl font-semibold ">React ve Tailwind Css ile Sepet Uygulaması</h1>
            <CartIcon cart={cart}/>
        </div>
    )
}

export default Header