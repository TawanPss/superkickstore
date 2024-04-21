export default function Checkout() {
    return(
        <main class="flex-1 py-12 px-6">
        <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h1 class="text-3xl font-bold mb-6">My Cart</h1>
            <div class="space-y-6">
              <div class="flex items-center gap-4">
                <img
                  src="/placeholder.svg"
                  width="80"
                  height="80"
                  alt="Product Image"
                  class="rounded-md"
                  style={{aspectRatio: "80 / 80", objectFit: "cover"}}
                />
                <div class="flex-1">
                  <h3 class="font-medium">Acme Headphones</h3>
                  <div class="flex items-center gap-2 text-gray-500">
                    <span>Quantity: 2</span>
                    <span>·</span>
                    <span>$49.99</span>
                  </div>
                </div>
                <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-5 w-5"
                  >
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                  </svg>
                  <span class="sr-only">Remove from cart</span>
                </button>
              </div>
              <div class="flex items-center gap-4">
                <img
                  src="/placeholder.svg"
                  width="80"
                  height="80"
                  alt="Product Image"
                  class="rounded-md"
                  style={{aspectRatio: "80 / 80", objectFit: "cover"}}
                />
                <div class="flex-1">
                  <h3 class="font-medium">Acme T-Shirt</h3>
                  <div class="flex items-center gap-2 text-gray-500">
                    <span>Quantity: 1</span>
                    <span>·</span>
                    <span>$24.99</span>
                  </div>
                </div>
                <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-5 w-5"
                  >
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                  </svg>
                  <span class="sr-only">Remove from cart</span>
                </button>
              </div>
            </div>
          </div>

          {/* ------------Order Summary Box-------------- */}

          <div class="bg-blue text-white p-6">
            <h2 class="text-xl text-orange font-bold mb-6">Order Summary</h2>
            <div class="space-y-4">
              <div class="flex text-base items-center justify-between">
                <span>Subtotal</span>
                <span>$74.98</span>
              </div>
              <div class="flex text-base items-center justify-between">
                <span>Taxes</span>
                <span>$5.25</span>
              </div>
              <div class="flex items-center justify-between font-bold text-lg text-orange">
                <span>Total</span>
                <span>$80.23</span>
              </div>
            </div>
            <div data-orientation="horizontal" role="none" class="shrink-0 bg-gray-100 h-[1px] w-full my-6"></div>
            <form class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label
                    class="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="name"
                  >
                    Name
                  </label>
                  <input
                    class="flex h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="name"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    class="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    class="flex h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="email"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
              </div>
              <div>
                <label
                  class="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="address"
                >
                  Address
                </label>
                <textarea
                  class="flex min-h-[80px] w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="address"
                  rows="3"
                  placeholder="123 Main St, Anytown USA"
                ></textarea>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label
                    class="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="PostCode"
                  >
                    PostCode
                  </label>
                  <input
                    class="flex h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="PostCode"
                    placeholder="10280"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    class="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="PhoneNumber"
                  >
                    Phone Number
                  </label>
                  <input
                    class="flex h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="PhoneNumber"
                    placeholder="088-888-8888"
                    type="text"
                  />
                </div>
              </div>
              
              <div>
                <p class="text-md font-bold text-orange">Payment Method</p>
                <p class="text-sm font-medium ">Cash on delivery only</p>
              </div>
              <button
                class="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none bg-green-500 text-primary-foreground hover:bg-green-700 h-10 px-4 py-2 w-full"
                type="submit"
              >
                Confirm Order
              </button>
            </form>
          </div>
        </div>
      </main>
    );
}