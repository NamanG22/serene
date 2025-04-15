import Link from "next/link";
import { Indie_Flower } from 'next/font/google'

const indieFlower = Indie_Flower({
  subsets: ['latin'],
  weight: ['400'],
});

export default function Review() {
  return (
    <div className='relative flex bg-black min-h-screen -mt-50 review-box'>
        <div className='relative w-1/2 min-h-screen flex items-center px-28'>
            <div className="">
                <div className="text-left">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl flex flex-col leading-20">
                        <span>Capture</span> <span>Every Moment,</span> Your Way
                    </h1>
                    <p className="mt-4 text-md">
                        Explore a range of photography and videography
                    </p>
                    <p className="mt-4 text-md">
                        services curated for every unique story.
                    </p>
                    <div className="mt-10 flex items-start gap-x-6">
                    <Link href="/about" className="text-sm font-semibold leading-6 text-gray-600 border border-gray-600 rounded-3xl px-8 py-3 bg-white">
                        Explore marketplace
                    </Link>
                    <Link href="/about" className="text-sm font-semibold leading-6 text-gray-600 border border-gray-600 rounded-3xl px-8 py-3 bg-white">
                        About us
                    </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="relative w-1/2 min-h-screen flex flex-col items-center pr-28 pl-20 justify-center">
            <div className='w-full h-[250px] bg-white flex transform scale-80'>
                <div className='w-1/2 h-full bg-black review-box-1'></div>
                <div className={`${indieFlower.className} w-1/2 h-full p-4 flex flex-col justify-center text-white bg-[#5C7285]`}>
                    <p>&quot;As a photographer, joining ClickConnect has allowed me to focus on my craft while they handle client bookings. My business has grown 200% since joining.&quot;</p>
                    <h1 className="text-2xl font-bold mt-6"> - John Doe</h1>
                    <h2 className="text-xl text-blue-900">Professional Photographer</h2>
                </div>
            </div>
            <div className='w-full h-[250px] bg-white flex -my-20 z-10'>
                <div className='w-1/2 h-full bg-black review-box-1'></div>
                <div className={`${indieFlower.className} w-1/2 h-full p-4 flex flex-col justify-center text-white bg-[#5C7285]`}>
                    <p>&quot;As a photographer, joining ClickConnect has allowed me to focus on my craft while they handle client bookings. My business has grown 200% since joining.&quot;</p>
                    <h1 className="text-2xl font-bold mt-6"> - John Doe</h1>
                    <h2 className="text-xl text-blue-900">Professional Photographer</h2>
                </div>
            </div>
            <div className='w-full h-[250px] bg-white flex transform scale-80'>
                <div className='w-1/2 h-full bg-black review-box-1'></div>
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