import products from "../data/Products";
import { useState } from "react";

export default function ProductList() {
    const [addedProducts, setAddedProducts] = useState([])
    const AddToCart = (product) => {
        const prodottoEsistente = addedProducts.find((item) => item.name === product.name)
        if (!prodottoEsistente) {
            setAddedProducts([...addedProducts, { ...product, quantity: 1 }])
        }
    }
    return (
        <>
            <div>
                <h1>Prodotti</h1>
                <ul >
                    {products.map((product, i) => (

                        <li key={i}>{product.name} <span>{product.price} </span> <span><button onClick={() => AddToCart(product)}>Aggiungi al carrello</button></span></li>

                    )
                    )}
                </ul>
            </div>

            <div>
                <h1>Carrello</h1>
                {addedProducts.length > 0 && (
                    <ul>
                        {addedProducts.map((product, i) => (
                            <li key={i}>{product.name} <span>{product.price}</span> <span>{product.quantity}</span> </li>
                        ))}
                    </ul>
                )
                }
            </div>


        </>
    )

}