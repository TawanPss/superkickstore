import React from 'react';
import ImageSlider from '../components/imageSilder';
import ProductCard from '@/components/productCard';


const images = [
    'https://image.cnbcfm.com/api/v1/image/104955261-GettyImages-893780366.jpg?v=1592413870&w=1920&h=1080',
    'https://creativereview.imgix.net/content/uploads/2023/09/adidasoriginals-2.jpg?auto=compress,format&q=60&w=1920&h=1080',
    'https://thedrum-media.imgix.net/thedrum-prod/s3/news/tmp/213062/11846996_13c_runlock_p1_digi_printworks_manc_2112x1188_urban.jpg?w=1280&ar=default&fit=crop&crop=faces',
  ];


export default function Home() {
  return (
    <>
      <div>
          <ImageSlider images={images} />
      </div>
      <div className='flex flex-col'>
        <h1 className='text-blue italic font-bold text-center py-5 text-xl'>New Arrival</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 w-full gap-4 justify-items-center align-middle'>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
      </div>
      <div>
        <h1 className='text-blue italic font-bold text-center py-5 text-xl'>Brands</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 w-full gap-4 justify-items-center align-middle'>
        <img
                src="https://seeklogo.com/images/A/adidas-originals-logo-504EB40D54-seeklogo.com.png"
                width={180}
                height={180}
                alt="adidasLogo"
                class="object-scale-down"
                style={{aspectRatio: "180 / 180"}}
            />
          <img
                src="https://seeklogo.com/images/N/nike-logo-0FBAF72D4F-seeklogo.com.png"
                width={180}
                height={180}
                alt="nikeLogo"
                class="object-scale-down"
                style={{aspectRatio: "180 / 180"}}
            />
          <img
                src="https://i.pinimg.com/736x/dc/03/89/dc03893a0baf50b2efbdede6350e4d67.jpg"
                width={180}
                height={180}
                alt="vansLogo"
                class="object-scale-down"
                style={{aspectRatio: "180 / 180"}}
            />
          <img
                src="https://seeklogo.com/images/N/new-balance-logo-6BC6A6B337-seeklogo.com.png"
                width={180}
                height={180}
                alt="newBalanceLogo"
                class="object-scale-down"
                style={{aspectRatio: "180 / 180"}}
            />
        </div>
      </div>
      <div>
        <h1 className='text-blue italic font-bold text-center py-5 text-xl'>Men shoes</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 w-full gap-4 justify-items-center align-middle'>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
      </div>
      <div>
        <h1 className='text-blue italic font-bold text-center py-5 text-xl'>Women shoes</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 w-full gap-4 justify-items-center align-middle'>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
      </div>
    </>
  );
}
