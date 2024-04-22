
import { Button } from "@/components/ui/button"

export default function CartBox() {
  return (
    (<div className="bg-white dark:bg-gray-950 shadow-lg p-6 m-5 md:p-8">
      <div className="flex flex-col gap-6">
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
              <Button className="p-1" size="icon" variant="outline">
                <MinusIcon className="w-4 h-4" />
              </Button>
              <span className="text-base font-medium">2</span>
              <Button className="p-1" size="icon" variant="outline">
                <PlusIcon className="w-4 h-4" />
              </Button>
            </div>
            <div className="text-base font-medium">$29.99</div>
            
          </div>
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
              <h3 className="font-semibold text-lg">Acme Gizmos</h3>
              <p className="text-gray-500 dark:text-gray-400">Pack of 2</p>
            </div>
            <div className="flex items-center gap-2">
              <Button className="p-1" size="icon" variant="outline">
                <MinusIcon className="w-4 h-4" />
              </Button>
              <span className="text-base font-medium">1</span>
              <Button className="p-1" size="icon" variant="outline">
                <PlusIcon className="w-4 h-4" />
              </Button>
            </div>
            <div className="text-base font-medium">$19.99</div>
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
      </div>
    </div>)
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
