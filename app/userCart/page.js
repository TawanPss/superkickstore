"use client";

import CartBox from "@/components/component/cartBox";
import { useState, useEffect } from "react";

export default function userCart() {
  const [data, setData] = useState(); 

  useEffect(() => {
    const storedData = localStorage.getItem("cart");
    if (storedData) {
      setData(JSON.parse(storedData)); 
    }
  }, []);

  console.log(data);

  return (
    <>
      <div>
        
        <h1 className="text-3xl font-bold m-6">Your Cart</h1>
        <CartBox brand={data?.brand} name={data?.name} price={data?.price_per_unit} gender={data?.gender} size={data?.size} image={data?.image}id={data?.product_id} product_quantity={data?.product_quantity}/>
      </div>
    </>
  );

}
