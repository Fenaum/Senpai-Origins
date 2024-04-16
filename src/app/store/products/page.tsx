import React from 'react'
import Product from "../../../../model/Product"

async function getProducts() {
 const response = await fetch("http://localhost:3000/api/products/get", {
   method: "GET",
 });
    return response.json()
}


function page() {
    const products = getProducts().then((products) => {
        return (
            <div>
                {products.map((product: Product) => {
                    return (
                        <div key={product.productID}>
                            <h1>{product.name}</h1>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                        </div>
                    )
                })}
            </div>
        )
    })
    return products;
}

export default page