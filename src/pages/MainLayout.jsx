import { NavLink, Outlet } from "react-router";
import { CartContext } from "../stores";
import { useState } from "react";
import { LoveContext } from "../stores";
export default function MainLayout() {
    
    const [cart, setCart] = useState([])
    const [love, setLove] = useState([])

    return (
        <CartContext value={[cart, setCart]}>
            <LoveContext value={[love, setLove]}>
                <div className="container mx-auto">
                    <header className="flex gap-x-5 justify-end py-4">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink className="relative" to="/cart">Cart <div className="absolute -top-1 -right-5 text-[10px] w-4 h-4 bg-red-500 flex justify-center text-white rounded-full">{cart.length}</div></NavLink>
                        <NavLink className="relative" to="/favorite">Love <div className="absolute -top-1 -right-5 text-[10px] w-4 h-4 bg-red-500 flex justify-center text-white rounded-full">{love.length}</div></NavLink>
                    </header>


                    <main>
                        <Outlet />
                    </main>

                    <footer>

                    </footer>
                </div>
            </LoveContext>
            
        </CartContext>

    )
}
