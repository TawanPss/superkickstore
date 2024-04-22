
const FooterSuperKick = () =>{
    return(
        <footer className="bg-primary mt-10">
            <div className="container mx-auto  py-5 flex flex-col">
                
                <div className="flex flex-col md:flex-row justify-around items-center pb-3">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className='text-secondary italic font-bold text-center pt-3 text-xl'>Contact Us</h1>
                        <p className="text-white text-md">Email : SuperKickBKK@gmail.com</p>
                        <p className="text-white text-md">tel : 099-999-9999</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h1 className='text-secondary italic font-bold text-center pt-3 text-xl'>Follow Us</h1>
                        <p className="text-white text-md">Facebook : SuperKickBKK</p>
                        <p className="text-white text-md">Instagram : SuperKickBKK</p>
                    </div>
                </div>
                    
            </div>

        </footer>
    );
}

export default FooterSuperKick;