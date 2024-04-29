"use client";

import ProductCard from "@/components/productCard";
import { useCallback, useEffect, useState } from "react";
import { get } from "@/api/api";

export default function productList({params}) {

    const [data, setData] = useState()

    const getData = useCallback(async () => {
      try {
        console.log(params.gender)
        const res = await get(`products/categories/${params.gender}`, undefined);
        setData(res.data.sneakers)
        //console.log(res)
      } catch (error) {
        console.log(error);
      }
    }, []);
  
    useEffect(() => {
      getData();
    }, [getData]);
  
  
    return (
        <>
        <div className='flex flex-col'>
            <h1 className='text-primary italic font-bold text-center py-5 text-2xl capitalize'>{params.gender === 'women' || params.gender === 'men' ? params.gender : 'all genders'}</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 w-full gap-4 justify-items-center align-middle'>
            {
            data?.map((item, index) => {
                return (
                <ProductCard key={index} brand={item.sneakers_brand} name={item.sneakers_name} price={item.sneakers_price} gender={item.sneakers_categories}
                id={item.sneakers_id}/>
                )
            })
        }
            </div>
        </div>
        </>
     
      
    );
  }