import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"

export default function CheckoutBox() {
  return (
    (<main className="flex-1 py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
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
              <div className="flex-1">
                <h3 className="font-medium">Acme Headphones</h3>
                <div className="flex items-center gap-2 text-gray-500">
                  <span>Quantity: 2</span>
                  <span>·</span>
                  <span>$49.99</span>
                </div>
              </div>
              <Button size="icon" variant="outline">
                <TrashIcon className="h-5 w-5" />
                <span className="sr-only">Remove from cart</span>
              </Button>
            </div>
            <div className="flex items-center gap-4">
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
              <div className="flex-1">
                <h3 className="font-medium">Acme T-Shirt</h3>
                <div className="flex items-center gap-2 text-gray-500">
                  <span>Quantity: 1</span>
                  <span>·</span>
                  <span>$24.99</span>
                </div>
              </div>
              <Button size="icon" variant="outline">
                <TrashIcon className="h-5 w-5" />
                <span className="sr-only">Remove from cart</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-primary dark:bg-gray-800 text-primary-foreground p-6">
          <h2 className="text-3xl text-secondary font-bold mb-6">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>$74.98</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Taxes</span>
              <span>$5.25</span>
            </div>
            <div className="flex items-center justify-between font-bold text-xl text-secondary">
              <span>Total</span>
              <span>$80.23</span>
            </div>
          </div>
          <Separator className="my-6" />
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="John Doe" type="text" className="text-foreground rounded-none" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="john@example.com" type="email" className="text-foreground rounded-none"/>
              </div>
              <div>
                <Label htmlFor="postcode">Postcode</Label>
                <Input id="postcode" placeholder="12345" type="text" className="text-foreground rounded-none"/>
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="123-456-7890" type="tel" className="text-foreground rounded-none"/>
              </div>
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Textarea id="address" placeholder="89/98 Srilom,Bangkok" rows={3} className="text-foreground rounded-none" />
            </div>
            <div>
                <h3 className="font-bold text-lg text-secondary">Payment Method</h3>
                <p className="font-medium text-md ">Cash on delivery only</p>
            </div>
            <Button className="w-full bg-secondary hover:bg-secondary/80 rounded-none" type="submit">
              <a href="orderComplete">Confirm Order</a>
            </Button>
          </form>
        </div>
      </div>
    </main>)
  );
}

function TrashIcon(props) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>)
  );
}
