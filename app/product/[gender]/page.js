import ProductCard from "@/components/productCard";

export default function productList({params}) {
    return (
        <>
        <div className='flex flex-col'>
            <h1 className='text-primary italic font-bold text-center py-5 text-2xl capitalize'>{params.gender === 'women' || params.gender === 'men' ? params.gender : 'all genders'}</h1>
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