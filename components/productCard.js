const ProductCard = ({brand, name, price,gender,id,image}) => {
    console.log(image)
    return(
        <a href={`/product/${gender}/${brand}/${id}`}>
        <div
            className =" bg-white text-black w-[200px] p-4 mx-auto max-w-sm  lg:w-[230px] xl:w-[300px] h-[360px] overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
            >
            <img
                src={image && (image[0] ?? '')}
                alt="Product Image"
                className="w-full h-2/3 object-cover"
                style={{aspectRatio: "400 / 400"}}
            />
            <div className="p-2 space-y-1">
                <div className="space-y-1">
                <h3 className="whitespace-nowrap tracking-tight text-md font-bold text-wrap capitalize">{`${brand} ${name}`}</h3>
                </div>
                <div className="flex items-center justify-between">
                <span className="text-secondary text-md font-bold ">{price} THB</span>
                </div>
            </div>
        </div>
        </a>
        
        
    );
}

export default ProductCard;