export default function Products(){
    // const services = [
    //     {
    //         title: "Wedding Photography",
    //         image: "/wedding.jpg",
    //         description: "Capturing your special moments with elegance"
    //     },
    //     {
    //         title: "Portrait Sessions",
    //         image: "/portrait.jpg",
    //         description: "Professional portraits that tell your story"
    //     },
    //     {
    //         title: "Event Coverage",
    //         image: "/event.jpg",
    //         description: "Documenting your events with style"
    //     },
    //     {
    //         title: "Family Photography",
    //         image: "/family.jpg",
    //         description: "Beautiful family moments frozen in time"
    //     },
    //     {
    //         title: "Commercial Shoots",
    //         image: "/commercial.jpg",
    //         description: "Professional imagery for your business"
    //     },
    //     {
    //         title: "Nature & Landscape",
    //         image: "/landscape.jpg",
    //         description: "Capturing the beauty of the natural world"
    //     }
    // ];

    return(
        <section className='relative bg-black min-h-screen py-20 px-6 -mt-50'>
            <div className="absolute inset-0 w-full h-full z-0 bg-gradient-to-r from-[#3B1E54] to-[#9B7EBD] ">
                <img 
                src="/product-bg-4.jpg" 
                alt="browse background" 
                className="w-full h-full object-cover object-[10%_100%]"
                />
                <div className="absolute inset-0" />
            </div>
            <div className="relative flex flex-col items-center min-h-screen px-12 space-y-8">
                <div className="flex justify-center space-x-8">
                    <div className='w-[350px] h-[400px] bg-white box flex flex-col px-5 pt-5'>
                        <div className='w-full h-[80%] inbox'></div>
                        <div className='w-full h-[20%] justify-center items-center flex text-black'>
                            <h1 className='indie-flower-regular text-3xl'>Signature Here</h1>
                        </div>
                    </div>
                    <div className='w-[350px] h-[400px] bg-white box flex flex-col px-5 pt-5'>
                        <div className='w-full h-[80%] inbox'></div>
                        <div className='w-full h-[20%] justify-center items-center flex text-black'>
                            <h1 className='indie-flower-regular text-3xl'>Signature Here</h1>
                        </div>
                    </div>
                    <div className='w-[350px] h-[400px] bg-white box flex flex-col px-5 pt-5'>
                        <div className='w-full h-[80%] inbox'></div>
                        <div className='w-full h-[20%] justify-center items-center flex text-black'>
                            <h1 className='indie-flower-regular text-3xl'>Signature Here</h1>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center space-x-8">
                    <div className='w-[350px] h-[400px] bg-white box flex flex-col px-5 pt-5'>
                        <div className='w-full h-[80%] inbox'></div>
                        <div className='w-full h-[20%] justify-center items-center flex text-black'>
                            <h1 className='indie-flower-regular text-3xl'>Signature Here</h1>
                        </div>
                    </div>
                    <div className='w-[350px] h-[400px] bg-white box flex flex-col px-5 pt-5'>
                        <div className='w-full h-[80%] inbox'></div>
                        <div className='w-full h-[20%] justify-center items-center flex text-black'>
                            <h1 className='indie-flower-regular text-3xl'>Signature Here</h1>
                        </div>
                    </div>
                    <div className='w-[350px] h-[400px] bg-white box flex flex-col px-5 pt-5'>
                        <div className='w-full h-[80%] inbox'></div>
                        <div className='w-full h-[20%] justify-center items-center flex text-black'>
                            <h1 className='indie-flower-regular text-3xl'>Signature Here</h1>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}