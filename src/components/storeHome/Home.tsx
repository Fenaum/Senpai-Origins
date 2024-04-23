'use client'

import React, { useEffect, useState } from 'react';
import Product from "../../../model/Product";
import Card from "../../components/ui/productCard/Card";
import StoreHero from "../storeHero/StoreHero"
import "./home.css"

async function getProducts() {
 const response = await fetch("http://localhost:3000/api/products/get", {
    method: "GET",
 });
 const products = await response.json();
 return products;
}

const Home = () => {
 const [products, setProducts] = useState<Product[]>([]);

 useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    };

    fetchProducts();
 }, []); // Empty dependency array ensures this effect runs once on component mount

 return (
   <div className="container mx-auto flex flex-col justify-center items-center">
      <div className='heroContainer'>
      <h1 className="text-2xl font-normal my-2">Welcome Anime Fans!</h1>
        <StoreHero />
      </div>     
     <div className="collection flex-col items-center text-center">
       <h1 className="text-2xl font-light m-4"> New Arrivals </h1>
       <div className="new-arrivals">
         {products.map((product: Product) => (
           <Card
             key={product.productID}
             title={product.name}
             price={product.price}
             image={product.images[0]}
             id={product.productID}
           />
         ))}
       </div>
       <h1 className="text-2xl font-light m-4"> Special Offers </h1>
       <div className="new-arrivals">
         {products.map((product: Product) => (
           <Card
             key={product.productID}
             title={product.name}
             price={product.price}
             image={product.images[0]}
             id={product.productID}
           />
         ))}
       </div>
     </div>
   </div>
 );
};

export default Home;