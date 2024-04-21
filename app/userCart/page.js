export default function userCart() {
    return (
        <>
        <h1 className='text-black italic font-bold text-left py-5 text-xl mx-5'>My Cart</h1>
        <div class="bg-white shadow-lg p-6 space-y-6 mx-5">
            <div class="grid gap-6">
                <div class="grid grid-cols-[80px_1fr_auto] items-center gap-4">
                <img
                    src="/placeholder.svg"
                    alt="Product Image"
                    width="80"
                    height="80"
                    class="rounded-md object-cover"
                    style={{aspectRatio: "80 / 80", objectFit: "cover"}}
                />
                <div class="space-y-1">
                    <h3 class="font-semibold text-lg">Cozy Sweater</h3>
                    <p class="text-gray-500 dark:text-gray-400 text-sm">Soft and warm, perfect for fall.</p>
                </div>
                <div class="flex items-center gap-2">
                    <p class="font-semibold">$49.99</p>
                    <div class="flex items-center gap-2">
                    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 p-1">
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
                        class="w-4 h-4"
                        >
                        <path d="M5 12h14"></path>
                        </svg>
                    </button>
                    <span class="text-base font-medium">1</span>
                    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 p-1">
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
                        class="w-4 h-4"
                        >
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                        </svg>
                    </button>
                    </div>
                </div>
                </div>
                <div class="grid grid-cols-[80px_1fr_auto] items-center gap-4">
                <img
                    src="/placeholder.svg"
                    alt="Product Image"
                    width="80"
                    height="80"
                    class="rounded-md object-cover"
                    style={{aspectRatio: "80 / 80", objectFit: "cover"}}
                />
                <div class="space-y-1">
                    <h3 class="font-semibold text-lg">Leather Backpack</h3>
                    <p class="text-gray-500 dark:text-gray-400 text-sm">Durable and stylish, perfect for everyday use.</p>
                </div>
                <div class="flex items-center gap-2">
                    <p class="font-semibold">$99.99</p>
                    <div class="flex items-center gap-2">
                    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 p-1">
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
                        class="w-4 h-4"
                        >
                        <path d="M5 12h14"></path>
                        </svg>
                    </button>
                    <span class="text-base font-medium">1</span>
                    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 p-1">
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
                        class="w-4 h-4"
                        >
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                        </svg>
                    </button>
                    </div>
                </div>
                </div>
            </div>
            <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <p class="text-black text-base font-medium">
                Total: <span class="text-black font-semibold">$149.98</span>
                </p>
                <div class="flex gap-2">
                <button class="inline-flex items-center justify-center whitespace-nowrap text-sm text-white font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-blue hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                    <a href="/">Continue Shopping</a>
                </button>
                <button class="inline-flex items-center justify-center whitespace-nowrap text-sm text-white font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-green-500 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                    <a href="Checkout">Proceed to Checkout</a>
                </button>
                </div>
            </div>
            </div>
        </>
     
      
    );
  }