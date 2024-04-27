import ProductCard from "@/components/productCard";

export default function productList({params}) {

const brand = [
    'adidas', 'nike', 'vans', 'newBalance'
]

    return (
        <>
        <div className='flex flex-col'>
            <h1 className='text-primary italic font-bold text-center py-5 text-2xl capitalize'>{brand.includes(params.brands) ? params.brands : 'All Product'}</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 w-full gap-4 justify-items-center align-middle'>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
        </>
     
      
    );
  }