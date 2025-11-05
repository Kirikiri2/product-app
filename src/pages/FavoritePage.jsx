import { useContext } from "react"
import { LoveContext } from "../stores"

export default function FavoritePage() {
const [love, setLove] = useContext(LoveContext)

    return (
        <div>
            <h2 className="font-bold text-3xl my-4">Favorite products</h2>
            <div className="grid grid-cols-3 gap-5">
                            {
                    love.map(product => (
                        <div className=" max-w-5xl mx-auto mb-8 flex flex-col justify-center items-center gap-5">
                                <img src={product.images[0]} alt="" className="max-w-[500px] rounded-xl" />
                                <h1 className="font-bold text-2xl">{product.title}</h1>
                                <p className="text-xl"><span className="font-bold">Prise: </span>${product.price}</p>
                                <button className="bg-red-400 px-22 py-1.5 rounded-xl text-white font-bold cursor-pointer">Delete</button>
                            </div>
                    ))
                }
            </div>


        </div>
    )
}