"use client";

import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { useState } from "react";
import Quantity from "../ui/quantityButton";

export default function ShoeOrder({ brand, name, price, gender, size,image }) {
  const [quantity, setQuantity] = useState(1);
  const [selectOrder, setSelectOrder] = useState(
    {
      id:'',
      select_size:'',
      select_qty:'',
    }
  );

      console.log("oder",selectOrder);

  
  const handleSetQuantity = (quantity) => {
    if (
      quantity < 1 ||
      quantity === null ||
      quantity === undefined ||
      isNaN(quantity)
    ) {
      setQuantity(1);
    } else {
      setQuantity(quantity);
    }
  };

  const onClick = () =>{
    // console.log("oder",selectOder);
  }

  return (
    <div className="px-4 md:px-6 py-6">
      <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl mx-auto">
        <div className="grid gap-4">
          <Carousel className="w-full max-w-md">
            <CarouselContent>
            {image?.map((image, index) => {
                  return (
                    <CarouselItem>
                    <img
                      alt="Shoe Image"
                      className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                      height={600}
                      src={image}
                      width={600}
                    />
                  </CarouselItem>
                  );
                })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="grid gap-4 md:gap-10">
          <div>
            <h1 className="font-bold text-3xl lg:text-4xl">{`${brand} ${name}`}</h1>
            <div className="text-3xl text-secondary font-bold">
              {`${price}`} THB
            </div>
          </div>
          <form className="grid gap-4 md:gap-6">
            <div className="grid gap-2">
              <Label className="text-base" htmlFor="size">
                Size
              </Label>
              <RadioGroup
                className="flex items-center gap-2"
                defaultValue="9"
                id="size"
                onChange={(e) => {
    setSelectOrder({
      ...selectOrder,
      select_size: e.target.value, // Update the selected size
    });
  }}

              >
                {size?.map((size, index) => {
                  return (
                    <Label
                      className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                      htmlFor={size}
                    >
                      <RadioGroupItem id={size} value={size.split(" ")[0]} />
                      {size}
                    </Label>
                  );
                })}
              </RadioGroup>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 mr-5">
                <Quantity
                  quantity={quantity}
                  setQuantity={(quantity) => handleSetQuantity(quantity)}
                />
              </div>
              <Button size="lg" >Add to Cart</Button>
            </div>
          </form>
          <div>
            <h1 className="font-bold text-lg lg:text-xl">Product Detail</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              {gender} shoes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
