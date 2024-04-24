import React from "react";
import Product from "../../../../../model/Product";
import Card from "../../../../components/ui/productCard/Card";

async function getProducts() {
  const response = await fetch("http://localhost:3000/api/products/get", {
    method: "GET",
  });
  return response.json();
}

async function page() {
  const products = await getProducts(); // Use await here to get the products
  console.log(products);
  return (
    <div className="flex justify-center items-center mx-12">
      <div className="lg:flex lg:justify-start lg:items-center lg:flex-wrap lg:gap-6">
        {products.map((product: Product) => {
          // Use a logical AND operator directly within the JSX
          return (
            product.collection === "new arrivals" && (
              <Card
                key={product.productID}
                title={product.name}
                price={product.price}
                image={product.images[0]}
                id={product.productID}
              />
            )
          );
        })}
      </div>
    </div>
  );
}

export default page;
