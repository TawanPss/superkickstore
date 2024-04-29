"use client";

import ProductCard from "@/components/productCard";
import { useCallback, useEffect, useState } from "react";
import { get } from "@/api/api";

export default function productList({params}) {
  const brand = ["adidas", "nike", "vans", "newBalance"];

  const [data, setData] = useState()

  const getData = useCallback(async () => {
    try {
      const res = await get(`products/brand/${params.brands}`);
      setData(res.data.sneakers)
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-primary italic font-bold text-center py-5 text-2xl capitalize">
          {brand.includes(params.brands) ? params.brands : "All Product"}
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-4 justify-items-center align-middle">
        {
            data?.map((item, index) => {
                console.log(item)
                return (
                <ProductCard brand={item.sneakers_brand} name={item.sneakers_name} price={item.sneakers_price} gender={item.sneakers_categories}
                id={item.sneakers_id}/>
                )
            })
        }
          
        </div>
      </div>
    </>
  );
}
