import products from "../data/Products";

export default function ProductList() {


    return (
        <>
            <ul >
                {products.map((product, i) => (

                    <li key={i}>{product.name} <span>{product.price} </span> </li>

                )
                )}
            </ul>
        </>
    )

}