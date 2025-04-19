import { GrFormSchedule } from "react-icons/gr";
import { LuAward } from "react-icons/lu";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineAccessTime } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
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
        <section id="products" className='relative bg-white min-h-screen pt-20 px-6 -mt-50 rounded-b-[10%] z-10 '>
            <div className="absolute inset-0 w-full h-full z-0 bg-[#1b0b3b] rounded-b-[10%]">
            </div>
            <div className="absolute inset-0 top-2 w-full h-full -z-1 bg-[#5C4680] rounded-b-[10%]">
            </div>
            <div className="absolute inset-0 top-4 w-full h-full -z-2 bg-[#AFA3CC] rounded-b-[10%]">
            </div>
            <div className="relative flex flex-col items-center min-h-screen px-12 space-y-16 py-24 rounded-b-[10%]">
                <div className='flex justify-center space-x-16 '>
                    <div className='relative rounded-4xl w-1/4 p-4 shadow-[0_4px_4px_rgba(0,0,0,0.50)]'>
                        <div className='w-full flex justify-center items-center'>
                            <div className="flex justify-center items-center p-4 bg-white rounded-full">
                                <GrFormSchedule className="text-6xl text-[#1b0b3b]" />
                            </div>
                        </div>
                        <div className='pt-8 flex flex-col justify-end space-y-4 text-center'>
                            <h1 className={`text-2xl`}>Easy Booking</h1>
                            <p className={`text-sm`}>Book photographers with our simple, hassle-free scheduling system.</p>
                        </div>
                    </div>
                    <div className='relative rounded-4xl w-1/4 p-4 shadow-[0_4px_4px_rgba(0,0,0,0.50)]'>
                        <div className='w-full flex justify-center items-center'>
                            <div className="flex justify-center items-center p-4 bg-white rounded-full">
                                <LuAward className="text-6xl text-[#1b0b3b]" />
                            </div>
                        </div>
                        <div className='pt-8 flex flex-col justify-end space-y-4 text-center'>
                            <h1 className={`text-2xl`}>Verified Professionals</h1>
                            <p className={`text-sm`}>All photographers on our platform are vetted for quality and reliability.</p>
                        </div>
                    </div>
                    <div className='relative rounded-4xl w-1/4 p-4 shadow-[0_4px_4px_rgba(0,0,0,0.50)]'>
                        <div className='w-full flex justify-center items-center'>
                            <div className="flex justify-center items-center p-4 bg-white rounded-full">
                                <IoSearchSharp className="text-6xl text-[#1b0b3b]" />
                            </div>
                        </div>
                        <div className='pt-8 flex flex-col justify-end space-y-4 text-center'>
                            <h1 className={`text-2xl`}>Quick Search</h1>
                            <p className={`text-sm`}>Find the right photographer for your specific needs using our search filters.</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center space-x-16 h-1/2'>
                    <div className='relative rounded-4xl w-1/4 p-4 shadow-[0_4px_4px_rgba(0,0,0,0.50)]'>
                        <div className='w-full flex justify-center items-center'>
                            <div className="flex justify-center items-center p-4 bg-white rounded-full">
                                <MdOutlineAccessTime className="text-6xl text-[#1b0b3b]" />
                            </div>
                        </div>
                        <div className='pt-8 flex flex-col justify-end space-y-4 text-center'>
                            <h1 className={`text-2xl`}>Real-time Availability</h1>
                            <p className={`text-sm`}>See photographers' availability in real-time and book instantly.</p>
                        </div>
                    </div>
                    <div className='relative rounded-4xl w-1/4 p-4 shadow-[0_4px_4px_rgba(0,0,0,0.50)]'>
                        <div className='w-full flex justify-center items-center'>
                            <div className="flex justify-center items-center p-4 bg-white rounded-full">
                                <BsFillPeopleFill className="text-6xl text-[#1b0b3b]" />
                            </div>
                        </div>
                        <div className='pt-8 flex flex-col justify-end space-y-4 text-center'>
                            <h1 className={`text-2xl`}>Creator Economy Focus</h1>
                            <p className={`text-sm`}>Tailored services for content creators, influencers, and businesses.</p>
                        </div>
                    </div>
                    <div className='relative rounded-4xl w-1/4 p-4 shadow-[0_4px_4px_rgba(0,0,0,0.50)]'>
                        <div className='w-full flex justify-center items-center'>
                            <div className="flex justify-center items-center p-4 bg-white rounded-full">
                                <IoCameraOutline className="text-6xl text-[#1b0b3b]" />
                            </div>
                        </div>
                        <div className='pt-8 flex flex-col justify-end space-y-4 text-center'>
                            <h1 className={`text-2xl`}>Diverse Portfolio</h1>
                            <p className={`text-sm`}>Browse extensive portfolios to find the perfect style for your project.</p>
                        </div>
                    </div>
                    
                </div>
            </div>

        </section>
    )
}