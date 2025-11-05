import { useContext, useEffect, useState } from "react"
import { NavLink } from "react-router";
import { CartContext, LoveContext } from "../stores";
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { Flex, Rate } from 'antd';


export default function ProductsPage() {
        const [products, setProducts] = useState([])
        const [cart, setCart] = useContext(CartContext)
        const [love, setLove] = useContext(LoveContext)

    function addToCart(product) {
        setCart([...cart, product]);
    }

    function addToFavorite(product){
        const InLove = love.some((item) => item.id === product.id);
        if (InLove) return;
        setLove([...love, product])
    }

    const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

    useEffect(() => {

        async function getProducts() {
            const resp = await fetch('https://api.escuelajs.co/api/v1/products')
            console.log(resp)
            if (resp.ok) {
                const data = await resp.json()
                setProducts(data)
            }

        }

        getProducts()

    }, [])


    return (
        <div>
            <div className="grid grid-cols-4 gap-5">
                {
                    products.map(product => {
                        const isInLove = love.some((item) => item.id === product.id);
                        return(
                            <div className="flex flex-col justify-center items-center gap-5 bg-[#89898924] rounded-[5px]">
                                <NavLink to={`/products/${product.id}`} className="flex flex-col items-center gap-2.5" >
                                    <img className="w-full rounded-[5px]" src={product.images[0]} alt="" />
                                    <h3 className="text-xl font-extrabold">{product.title}</h3>
                                    <p className="text-gray-400 font-bold">Description Product</p>
                                </NavLink>
                                <div className="w-full flex justify-evenly items-center px-2 py-2">
                                    <p className="font-bold">${product.price}</p>
                                    <button onClick={()=> addToCart(product)} className="bg-[#4A9C80] px-22 py-1.5 rounded-xl text-white font-bold cursor-pointer">Buy</button>
                                    <button onClick={()=> addToFavorite(product)} className="bg-white px-2 py-2 cursor-pointer rounded-full ">
                                        <img src="/icons/Heart.svg"  alt="favorite" className={`w-[25px] transition ${isInLove ? "invert brightness-50" : ""}`} />
                                    </button>
                                </div>
                                <div className="mb-4">
                                        <Flex gap="middle" vertical>
                                            <Rate defaultValue={3} character={({ index = 0 }) => customIcons[index + 1]} />

                                            </Flex>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
