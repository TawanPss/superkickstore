'use client'
import CartBox from "@/components/component/cartBox";
import { get } from "@/api/api";
import { useState, useCallback, useEffect } from "react";

export default function userCart() {
// const orders = storedOrder ? JSON.parse(storedOrder) : [];

// Define state to hold the fetched data
// const [fetchedData, setFetchedData] = useState([]);
// console.log("d",fetchedData);
// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       // Create an array to collect promises of fetch requests
//       const fetchPromises = orders.map(order => {
//         // Return a promise for each fetch request
//         return get(`products/products/${order.id}`, undefined)
//           .then(res => res.data)
//           .catch(error => {
//             console.log(`Error fetching data for product ID ${order.id}:`, error);
//             return null; // Return null if fetch fails
//           });
//       });

//       // Wait for all fetch requests to complete
//       const data = await Promise.all(fetchPromises);

//       // Filter out null values (if any) from the fetched data
//       const filteredData = data.filter(item => item !== null);

//       // Set the filtered fetched data to state
//       setFetchedData(...filteredData);
//     } catch (error) {
//       console.log('Error fetching data:', error);
//     }
//   };

//   fetchData();
// }, []);


    return (
        <>
        <h1 className="text-3xl font-bold m-6">Your Cart</h1>
        <CartBox />
        </>
     
      
    );
  }