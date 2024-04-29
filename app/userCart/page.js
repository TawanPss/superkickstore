"use client";

import CartBox from "@/components/component/cartBox";
import { useState, useEffect } from "react";

export default function userCart() {
  const [data, setData] = useState(null); // Initialize data state to null

  useEffect(() => {
    // Retrieve data from local storage
    const storedData = localStorage.getItem("cart");
    // Check if data exists in local storage
    if (storedData) {
      setData(JSON.parse(storedData)); // Parse JSON and set data state
    }
  }, []);

  // Use data state in JSX after it's updated
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
