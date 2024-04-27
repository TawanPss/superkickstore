

export default function OrderComplete (){
    return(
        <>
        <div className="flex flex-col items-center justify-center min-h-screen gap-8 px-4 md:px-6">
            <div
                className="bg-white shadow-sm rounded-lg p-8 w-full max-w-md">
                <div className="flex flex-col items-center justify-center gap-4">
                <div className="bg-green-500 text-white rounded-full p-3">
                    <CheckIcon className="h-6 w-6" />
                </div>
                <h1 className="text-2xl font-bold">Order Completed</h1>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                    Thank you for your order! Your order has been successfully processed.
                </p>
                </div>
                
                <div className="flex justify-center mt-7">
                <button className="inline-flex h-10 items-center justify-center bg-primary px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                    <a href="/">Back to HomePage</a>
                </button>
                </div>
            </div>
            </div>
            
        </>
    )
}

function CheckIcon(props) {
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
        <polyline points="20 6 9 17 4 12" />
      </svg>)
    );
  }