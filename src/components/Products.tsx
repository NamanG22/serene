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
            <div className="absolute inset-0 w-full h-full z-0 bg-gradient-to-r from-[#3B1E54] to-[#9B7EBD]">
            <img 
              src="/product-bg-3.jpg" 
              alt="browse background" 
              className="w-full h-full object-cover object-[10%_100%]"
            />
            <div className="absolute inset-0" />
          </div>
            <div className="flex flex-col items-start min-h-screen px-12">
                <div className="flex">
                    <div className="relative bg-white h-[50%] p-3 pb-8 w-[40%] text-center drop-shadow-sm shadow-black/10 backdrop-blur-sm">
            
                        <div className="">
                            <img 
                                src="/wedding.jpg" 
                                alt="Polaroid Image" 
                                className="w-full"
                            />
                        </div>

                        <div>
                            <h1 className="mt-2 text-lg font-[cursive] text-black">Wedding Photography</h1>
                            <p>Capture your special day with our talented wedding photographers who specialize in creating timeless memories.</p>
                        </div>
                    </div>
                    <div className="relative bg-white p-3 pb-8 w-[40%] text-center drop-shadow-sm shadow-black/10 backdrop-blur-sm mt-28 -ml-24 transition-all hover:z-50">
                        
                        <div className="">
                            <img 
                                src="/event.jpg" 
                                alt="Polaroid Image" 
                                className="w-full"
                            />
                        </div>
                        
                        <div>
                            <h1 className="mt-2 text-lg font-[cursive] text-black">Professional Headshots</h1>
                            <p>Capture your special day with our talented wedding photographers who specialize in creating timeless memories.</p>
                        </div>
                    </div>
                    <div className="relative bg-white p-3 pb-8 h-[50%] w-[40%] text-center drop-shadow-sm shadow-black/10 backdrop-blur-sm mt-4 -ml-20">
                        
                        <div className="">
                            <img 
                                src="/event.jpg" 
                                alt="Polaroid Image" 
                                className="w-full"
                            />
                        </div>
                        
                        <div>
                            <h1 className="mt-2 text-lg font-[cursive] text-black">Event Photogrpahy</h1>
                            <p>Capture your special day with our talented wedding photographers who specialize in creating timeless memories.</p>
                        </div>
                    </div>
                </div>
                <div className="flex -mt-12">
                    <div className="relative bg-white h-[50%] p-3 pb-8 w-[40%] text-center drop-shadow-sm shadow-black/10 backdrop-blur-sm">
            
                        <div className="">
                            <img 
                                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                                alt="Polaroid Image" 
                                className="w-full"
                            />
                        </div>
                        
                        <div>
                            <h1 className="mt-2 text-lg font-[cursive] text-black">Product Photogrpahy</h1>
                            <p>Capture your special day with our talented wedding photographers who specialize in creating timeless memories.</p>
                        </div>
                    </div>
                    <div className="relative bg-white p-3 pb-8 w-[40%] text-center drop-shadow-sm shadow-black/10 backdrop-blur-sm mt-28 -ml-24">
                        
                        <div className="">
                            <img 
                                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                                alt="Polaroid Image" 
                                className="w-full"
                            />
                        </div>
                        
                        <div>
                            <h1 className="mt-2 text-lg font-[cursive] text-black">Content Creator Services</h1>
                            <p>Capture your special day with our talented wedding photographers who specialize in creating timeless memories.</p>
                        </div>
                    </div>
                    <div className="relative bg-white p-3 pb-8 h-[50%] w-[40%] text-center drop-shadow-sm shadow-black/10 backdrop-blur-sm mt-4 -ml-20">
                        
                        <div className="">
                            <img 
                                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                                alt="Polaroid Image" 
                                className="w-full"
                            />
                        </div>
                        
                        <div>
                            <h1 className="mt-2 text-lg font-[cursive] text-black">Custom Photogrpahy</h1>
                            <p>Capture your special day with our talented wedding photographers who specialize in creating timeless memories.</p>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}