const ProductCard = () => {
    return(
        <div
            className =" bg-white text-black w-[200px] p-4 mx-auto max-w-sm  lg:w-[230px] xl:w-[300px] overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
            >
            <img
                src="https://assets.adidas.com/images/w_600,f_auto,q_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Samba_OG_B75806_01_standard.jpg"
                alt="Product Image"
                className="w-full h-2/3 object-cover"
                style={{aspectRatio: "400 / 400"}}
            />
            <div className="p-2 space-y-1">
                <div className="space-y-1">
                <h3 className="whitespace-nowrap tracking-tight text-md font-bold text-wrap">Adidas Samba</h3>
                </div>
                <div className="flex items-center justify-between">
                <span className="text-secondary text-md font-bold ">3,800 THB</span>
                </div>
            </div>
</div>
    );
}

export default ProductCard;