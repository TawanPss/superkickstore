const ProductCard = () => {
    return(
        <div
            class =" bg-white text-black w-[200px] p-4 mx-auto max-w-sm  lg:w-[230px] xl:w-[300px] overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
            >
            <img
                src="https://assets.adidas.com/images/w_600,f_auto,q_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Samba_OG_B75806_01_standard.jpg"
                alt="Product Image"
                class="w-full h-2/3 object-cover"
                style={{aspectRatio: "400 / 400"}}
            />
            <div className="p-2 space-y-1">
                <div class="space-y-1">
                <h3 class="whitespace-nowrap tracking-tight text-md font-bold text-wrap">Adidas Samba OG Adidas Samba OG</h3>
                </div>
                <div class="flex items-center justify-between">
                <span class="text-secondary text-md font-bold ">3,800 THB</span>
                </div>
            </div>
</div>
    );
}

export default ProductCard;