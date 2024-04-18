import React from "react";
import Product from "../../../../model/Product";
import Card from "../../../components/ui/productCard/Card";

async function getProducts() {
  const response = await fetch("http://localhost:3000/api/products/read", {
    method: "GET",
  });
  return response.json();
}

async function page() {
  const products = getProducts().then((products) => {
    console.log(products)
    return (
      <div className="flex justify-center items-center mx-12">
        <div className="flex justify-start items-center flex-wrap gap-6">
          {products.map((product: Product) => {
            return (
              <Card
                key={product.productID}
                title={product.name}
                price={product.price}
                image={product.images[0]}
                id={product.productID}
              />
            );
          })}
        </div>
      </div>
    );
  });
  return products;
}

export default page;
