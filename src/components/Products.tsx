import { Indie_Flower } from 'next/font/google'

const indieFlower = Indie_Flower({
  subsets: ['latin'],
  weight: ['400'],
});

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
                src="/product-bg-6.jpg" 
                alt="browse background" 
                className="w-full h-full object-cover object-[10%_30%]"
                />
                <div className="absolute inset-0" />
            </div>
            <div className="relative flex flex-col items-center min-h-screen px-12 space-y-8 py-24">
                <div className="flex justify-center space-x-8">
                    <div className='w-[350px] h-[400px] bg-white box flex flex-col px-5 pt-5'>
                        <div className='w-full h-[65%] inbox inbox-1'></div>
                        <div className='w-full h-[35%] justify-center items-center flex flex-col text-black'>
                            <h1 className={`${indieFlower.className} text-3xl`}>Wedding Photography</h1>
                            <p className={`${indieFlower.className} text-md text-center px-4`}>Capture your special day with our talented wedding photographers who specialize in creating timeless memories.</p>
                        </div>
                    </div>
                    <div className='w-[350px] h-[400px] bg-white box flex flex-col px-5 pt-5'>
                        <div className='w-full h-[65%] inbox'></div>
                        <div className='w-full h-[35%] justify-center items-center flex flex-col text-black'>
                            <h1 className={`${indieFlower.className} text-3xl`}>Event Photography</h1>
                            <p className={`${indieFlower.className} text-md text-center px-2`}>From corporate gatherings to private parties, our photographers will document your event with style and professionalism.</p>
                        </div>
                    </div>
                    <div className='w-[350px] h-[400px] bg-white box flex flex-col px-5 pt-5'>
                        <div className='w-full h-[65%] inbox'></div>
                        <div className='w-full h-[35%] justify-center items-center flex flex-col text-black'>
                            <h1 className={`${indieFlower.className} text-3xl`}>Professional Headshots</h1>
                            <p className={`${indieFlower.className} text-md text-center px-4`}>Elevate your professional image with high-quality headshots for your website, social media, or professional profile.</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center space-x-8">
                    <div className='w-[350px] h-[400px] bg-white box flex flex-col px-5 pt-5'>
                        <div className='w-full h-[65%] inbox'></div>
                        <div className='w-full h-[35%] justify-center items-center flex flex-col text-black'>
                            <h1 className={`${indieFlower.className} text-3xl -mx-1`}>Creator Content Services</h1>
                            <p className={`${indieFlower.className} text-md text-center px-4`}>We offer creator content services to help you create engaging and professional content for your audience.</p>
                        </div>
                    </div>
                    <div className='w-[350px] h-[400px] bg-white box flex flex-col px-5 pt-5'>
                        <div className='w-full h-[65%] inbox'></div>
                        <div className='w-full h-[35%] justify-center items-center flex flex-col text-black'>
                            <h1 className={`${indieFlower.className} text-3xl`}>Product Shots</h1>
                            <p className={`${indieFlower.className} text-md text-center px-4`}>Elevate your product with professional photography that showcases your brand&apos;s unique features and quality.</p>
                        </div>
                    </div>
                    <div className='w-[350px] h-[400px] bg-white box flex flex-col px-5 pt-5'>
                        <div className='w-full h-[65%] inbox'></div>
                        <div className='w-full h-[35%] justify-center items-center flex flex-col text-black'>
                            <h1 className={`${indieFlower.className} text-3xl`}>Custom Photography</h1>
                            <p className={`${indieFlower.className} text-md text-center px-4`}>We offer custom photography services to capture your unique moments and ideas.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}