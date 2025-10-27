import Data from "../assets/Data.json"

export default function JSONFile(){
    return(
        <>
            {
                Data.products.map((Product)=>(
                    <div>
                    <p>The product name is : {Product.name}</p>
                    <p>The product  price is : {Product.price}</p>
                    </div>
                ))
            }
        </>
    )
}