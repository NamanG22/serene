import Link from "next/link";
import { Indie_Flower } from 'next/font/google'

const indieFlower = Indie_Flower({
  subsets: ['latin'],
  weight: ['400'],
});

export default function Review() {
  return (
    <div className='relative flex bg-black min-h-screen -mt-50 review-box'>
        <div className='relative w-1/2 min-h-screen flex items-center pl-28 pr-10'>
            <div className="">
                <div className="text-left">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl flex flex-col leading-20">
                        <span>What our Users Say</span>
                    </h1>
                    <p className="mt-4 text-md">
                        Hear from our users about their experience with Serene.
                    </p>
                    <div className="mt-10 flex items-start gap-x-6">
                    <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-600 border border-gray-600 rounded-3xl px-8 py-3 bg-white">
                        Contact
                    </Link>
                    <Link href="/marketplace" className="text-sm font-semibold leading-6 text-gray-600 border border-gray-600 rounded-3xl px-8 py-3 bg-white">
                        Try yourself
                    </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="relative w-1/2 min-h-screen flex flex-col items-center pr-28 pl-20 justify-center">
            <div className='w-full h-[250px] bg-white flex transform scale-80 shadow-lg'>
                <div className='w-1/2 h-full bg-black review-box-1'></div>
                <div className={`${indieFlower.className} w-1/2 h-full p-4 flex flex-col justify-center text-white bg-[#5C7285]`}>
                    <p>&quot;As a photographer, joining ClickConnect has allowed me to focus on my craft while they handle client bookings. My business has grown 200% since joining.&quot;</p>
                    <h1 className="text-2xl font-bold mt-6"> - Sarah Johnson</h1>
                    <h2 className="text-xl text-blue-900">Marketing Manager</h2>
                </div>
            </div>
            <div className='w-full h-[250px] bg-white flex -my-20 z-10 shadow-lg'>
                <div className='w-1/2 h-full bg-black review-box-2'></div>
                <div className={`${indieFlower.className} w-1/2 h-full p-4 flex flex-col justify-center text-white bg-[#5C7285]`}>
                    <p>&quot;Our company uses ClickConnect for all our event photography needs. The platform makes it easy to find photographers who match our brand aesthetic.&quot;</p>
                    <h1 className="text-2xl font-bold mt-6"> - Priya Patel</h1>
                    <h2 className="text-xl text-blue-900">Event Planner</h2>
                </div>
            </div>
            <div className='w-full h-[250px] bg-white flex transform scale-80 shadow-lg'>
                <div className='w-1/2 h-full bg-black review-box-3'></div>
                <div className={`${indieFlower.className} w-1/2 h-full p-4 flex flex-col justify-center text-white bg-[#5C7285]`}>
                    <p>&quot;As a photographer, joining ClickConnect has allowed me to focus on my craft while they handle client bookings. My business has grown 200% since joining.&quot;</p>
                    <h1 className="text-2xl font-bold mt-6"> - John Doe</h1>
                    <h2 className="text-xl text-blue-900">Professional Photographer</h2>
                </div>
            </div>
        </div>
    </div>
  )
}