const Quantity = ( {quantity, setQuantity} ) => {
    return (
        <div className="w-max flex items-center border bg-card">
            <button
                onClick={(e) => {setQuantity(quantity - 1),e.preventDefault()}}
                className="w-5 h-5 md:w-10 md:h-10 flex justify-center items-center rounded-md hover:bg-accent hover:text-accent-foreground"
            >
                -
            </button>
            <input
                min={0}
                type="text"
                inputMode="numeric"
                value={quantity || 0}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-5 h-5 md:w-10 md:h-10 bg-card text-center flex justify-center items-center appearance-none"
            />
            <button
                onClick={(e) => {setQuantity(quantity + 1),e.preventDefault()}}
                className="w-5 h-5 md:w-10 md:h-10 flex justify-center items-center rounded-md hover:bg-accent hover:text-accent-foreground"
            >
                +
            </button>
        </div>
    )
}

export default Quantity