import products from "../data/Products";
import { useState } from "react";

export default function ProductList() {
    const [addedProducts, setAddedProducts] = useState([])
    const AddToCart = (product) => {
        const prodottoEsistente = addedProducts.find((item) => item.name === product.name)
        if (!prodottoEsistente) {
            setAddedProducts([...addedProducts, { ...product, quantity: 1 }])
        } else {
            updateProductQuantity(product)
        }
    }
    function updateProductQuantity(product) {
        setAddedProducts(addedProducts.map((item) =>
            item.name === product.name
                ? { ...item, quantity: item.quantity + 1 }
                : item
        ));
    }

    const removeFromCart = (product) => {
        setAddedProducts(addedProducts.filter((item) => item.name !== product.name))
    }

    const total = addedProducts.reduce((curr, product) => curr + (product.price * product.quantity), 0)

    return (
        <>
            <div>
                <h1>Prodotti</h1>
                <ul >
                    {products.map((product, i) => (

                        <li key={i}>
                            {product.name} <span>{product.price} </span>
                            <span><button onClick={() => AddToCart(product)}>Aggiungi al carrello</button></span>
                        </li>

                    )
                    )}
                </ul>
            </div>

            <div>
                <h1>Carrello</h1>
                {addedProducts.length > 0 && (
                    <ul>
                        {addedProducts.map((product, i) => (
                            <li key={i}>
                                Prodotto: {product.name}
                                <span> Prezzo: {product.price} €</span>
                                <span> Quantità: {product.quantity}</span>
                                <p> <button onClick={() => removeFromCart(product)}>Rimuovi dal carrello</button></p>
                            </li>
                        ))}
                    </ul>

                )
                }
                <h3>Totale: {total.toFixed(2)} €</h3>
            </div>


        </>
    )

}