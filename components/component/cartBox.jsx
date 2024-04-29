'use client'

import Quantity from "../ui/quantityButton";
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function CartBox({brand, name, price, gender, size,image,id,productquantity}) {

  const [quantity, setQuantity] = useState(0)

    const handleSetQuantity = (quantity) => {
        if (quantity < 0 || quantity === null || quantity === undefined || isNaN(quantity)) {
            setQuantity(0)
        } else {
            setQuantity(quantity)
        }
    }

  return (
    <div className="bg-white shadow-lg p-6 m-5 md:p-8 min-h-screen">
      <div className="flex flex-col gap-6">
        <div className="grid gap-4">
          <div className="flex items-center gap-4">
              
            <div className="flex-shrink-0">
              <img
                alt="Product Image"
                className="rounded-md"
                height={80}
                src={image && (image[0] ?? '')}
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width={80} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{`${brand} ${name}`}</h3>
              <p className="text-gray-500 dark:text-gray-400">{`${gender}`}</p>
            </div>
            <div className="flex items-center gap-2">
              <Quantity quantity={quantity} setQuantity={(quantity)=> handleSetQuantity(quantity)}/>
            </div>
            <div className="text-base font-medium">{`${price}`} THB</div>
            
          </div>

          
        </div>
        <div
          className="flex flex-col md:flex-row items-end justify-between gap-4">
          <div className="text-lg font-medium">Total: {`${price}`} THB</div>
          <div className="flex flex-row gap-2">
            <Button  className="bg-primary text-primary-foreground  " variant="outline"><a href="/">Continue Shopping</a></Button>
            <Button className="bg-green-500 text-primary-foreground hover:bg-green-200 hover:text-green-500"><a href="Checkout">Proceed to Checkout</a></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MinusIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M5 12h14" />
    </svg>)
  );
}


function PlusIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>)
  );
}


function XIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>)
  );
}
