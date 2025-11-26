import { useEffect, useState } from "react"
import { useParams } from "react-router"

export default function ProductItemPage() {

    const { id } = useParams()

    const [product, setProduct] = useState(null)

    useEffect(() => {
        async function getProduct() {
            const resp = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
            const data = await resp.json()
            setProduct(data)
        }

        getProduct()
    }, [])


    return (
        <div>
            {
                product && (
                        <div className=" max-w-5xl mx-auto flex flex-col justify-center items-center gap-5">
                            <img src={product.images[0]} alt="" className="max-w-[500px] rounded-xl" />
                            <h1 className="font-bold text-2xl">{product.title}</h1>
                            <p className="text-xl"><span className="font-bold">Prise: </span>${product.price}</p>
                            <p className="max-w-2xl text-[18px]"><span className="font-bold">Description: </span>{product.description}</p>
                        </div>
                )
            }
        </div>
    )
}
