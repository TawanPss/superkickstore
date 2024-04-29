'use client'

import ShoeOrder from "@/components/component/shoeOrder"
import { useParams } from "next/navigation"
import { get } from "@/api/api";
import { useState,useCallback,useEffect } from "react";

export default function ProductDetail({params}) {
    const [data, setData] = useState()

    const getData = useCallback(async () => {
        try {
          const res = await get(`products/products/${params.item}`, undefined);
          setData(res.data)
          console.log(res.data)
        } catch (error) {
          console.log(error);
        }
      }, []);
    
      useEffect(() => {
        getData();
      }, [getData]);

    return (
        <>
        <ShoeOrder brand={data?.sneakers_brand} name={data?.sneakers_name} price={data?.sneakers_price} gender={data?.sneakers_categories} size={data?.sneakers_size} image={data?.image_url} />
        </>
    )
}