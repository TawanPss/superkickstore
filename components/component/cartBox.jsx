"use client";

import Quantity from "../ui/quantityButton";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function CartBox() {
  const [quantity, setQuantity] = useState(1);

  const [storedOrder, setStoredOrder] = useState(() => {
    const storedOrder = localStorage.getItem("selectOrder");
    return storedOrder ? JSON.parse(storedOrder) : [];
  });

  // Calculate total price
  const totalPrice = storedOrder.reduce((total, item) => {
    return total + item.price * item.select_qty;
  }, 0);

  console.log("storeOrder", storedOrder);

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
      setSelectOrder({
        ...selectOrder,
        select_qty: quantity,
      });
    }
  };

  return (
    <div className="bg-white shadow-lg p-6 m-5 md:p-8 min-h-screen">
      {/* <div className="flex flex-col gap-6">
        <div className="grid gap-4">
          <div className="flex items-center gap-4">
              
            <div className="flex-shrink-0">
              <img
                alt="Product Image"
                className="rounded-md"
                height={80}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width={80} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg">Acme Widgets</h3>
              <p className="text-gray-500 dark:text-gray-400">Pack of 3</p>
            </div>
            <div className="flex items-center gap-2">
              <Quantity quantity={quantity} setQuantity={(quantity)=> handleSetQuantity(quantity)}/>
            </div>
            <div className="text-base font-medium">$29.99</div>
            
          </div>

          
        </div>
        <div
          className="flex flex-col md:flex-row items-end justify-between gap-4">
          <div className="text-lg font-medium">Total: $49.98</div>
          <div className="flex flex-row gap-2">
            <Button  className="bg-primary text-primary-foreground  " variant="outline"><a href="/">Continue Shopping</a></Button>
            <Button className="bg-green-500 text-primary-foreground hover:bg-green-200 hover:text-green-500"><a href="Checkout">Proceed to Checkout</a></Button>
          </div>
        </div>
      </div> */}

      {storedOrder.map((items, idx) => (
        <div className="flex flex-col gap-6 mt-5">
          <div className="grid gap-4">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <img
                  alt="Product Image"
                  className="rounded-md"
                  height={80}
                  src={items.image_url?.[0]}
                  style={{
                    aspectRatio: "80/80",
                    objectFit: "cover",
                  }}
                  width={80}
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{items.sneakers_name}</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  size : {items.select_size} US
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Quantity
                  quantity={items.select_qty}
                  setQuantity={(quantity) => handleSetQuantity(iquantity)}
                />
              </div>

              <div className="text-base font-medium">
                {items.price * items.select_qty}
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="flex flex-col md:flex-row items-end justify-between gap-4">
        <div className="text-lg font-medium">
          Total: {totalPrice.toFixed(2)}
        </div>
        <div className="flex flex-row gap-2">
          <Button
            className="bg-primary text-primary-foreground  "
            variant="outline"
          >
            <a href="/">Continue Shopping</a>
          </Button>
          <Button className="bg-green-500 text-primary-foreground hover:bg-green-200 hover:text-green-500">
            <a href="Checkout">Proceed to Checkout</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

function MinusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
