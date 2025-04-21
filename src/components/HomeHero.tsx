'use client'
import { useState } from 'react';
import { Indie_Flower } from 'next/font/google';
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";
import { CiCircleChevRight, CiCircleChevLeft } from "react-icons/ci";

const indieFlower = Indie_Flower({
    subsets: ['latin'],
    weight: ['400'],
});

export default function HomeHero(){
    const [activeIndex, setActiveIndex] = useState(0);

    const handleDotClick = (index: number) => {
        setActiveIndex(index);
    };

    const handleArrowClick = (direction: 'up' | 'down' | 'left' | 'right') => {
        if (direction === 'up' || direction === 'down') {
            setActiveIndex(activeIndex + (direction === 'up' ? (activeIndex > 0 ? -1: 6) : (activeIndex < 6 ? 1: -6)));
        } else if (direction === 'left' || direction === 'right') {
            setActiveIndex(activeIndex + (direction === 'left' ? (activeIndex > 0 ? -1: 6) : (activeIndex < 6 ? 1: -6)));
        }
    };

    const images = [
        ["/browse-bg-2.jpg","50%_50%"],
        ["/wedding.jpg","100%_50%"],
        ["/event.jpg","50%_50%"],
        ["/ph.jpg","0%_20%"],
        ["/ccs.jpg","100%_43%"],
        ["/product.jpg","100%_70%"],
        ["/custom.jpg","100%_30%"],
    ];

    return(
        <div className='relative mt-0 w-full max-h-screen z-10'>
            <div className='w-full h-screen'>
                <div className='w-full h-full transition-all duration-500'>
                    <img 
                    src="/browse-bg-2.jpg"
                    alt="heroimage"
                    className={`${activeIndex === 0 ? 'opacity-100' : 'opacity-0'} absolute w-full h-full object-cover object-[50%_50%] z-0 transition-all duration-500`}
                    />
                    <img 
                    src="/wedding.jpg"
                    alt="heroimage"
                    className={`${activeIndex === 1 ? 'opacity-100' : 'opacity-0'} absolute w-full h-full object-cover object-[100%_50%] z-0 transition-all duration-500`}
                    />
                    <img 
                    src="/event.jpg"
                    alt="heroimage"
                    className={`${activeIndex === 2 ? 'opacity-100' : 'opacity-0'} absolute w-full h-full object-cover object-[50%_50%] z-0 transition-all duration-500`}
                    />
                    <img 
                    src="/ph.jpg"
                    alt="heroimage"
                    className={`${activeIndex === 3 ? 'opacity-100' : 'opacity-0'} absolute w-full h-full object-cover object-[0%_20%] z-0 transition-all duration-500`}
                    />
                    <img 
                    src="/ccs.jpg"
                    alt="heroimage"
                    className={`${activeIndex === 4 ? 'opacity-100' : 'opacity-0'} absolute w-full h-full object-cover object-[100%_43%] z-0 transition-all duration-500`}
                    />
                    <img 
                    src="/product.jpg"
                    alt="heroimage"
                    className={`${activeIndex === 5 ? 'opacity-100' : 'opacity-0'} absolute w-full h-full object-cover object-[100%_70%] z-0 transition-all duration-500`}
                    />
                    <img 
                    src="/custom.jpg"
                    alt="heroimage"
                    className={`${activeIndex === 6 ? 'opacity-100' : 'opacity-0'} absolute w-full h-full object-cover object-[100%_30%] z-0 transition-all duration-500`}
                    />
                </div>
            </div>

            <div className="absolute top-30 isolate pt-14 self-end px-12 sm:px-16 lg:px-28 z-10">
                <div className="mx-auto max-w-2xl">
                    <div className="text-left">
                    <p className="my-4 text-sm leading-8 text-white/70">
                        by Nova
                    </p>
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-7xl">
                        Welcome to Serene
                    </h1>
                    <p className="mt-4 text-md leading-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veniam autem sapiente facere mollitia quae eligendi magnam placeat odit est dolores consequuntur eius.
                    </p>
                    <div className="mt-10 flex items-start gap-x-6">
                        <button 
                          onClick={() => {
                            document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                          }} 
                          className="text-sm font-semibold leading-6 text-white border border-white rounded-3xl px-8 py-3 hover:bg-gray-50 hover:text-black transition-colors"
                        >
                          Explore Marketplace
                        </button>
                        <button 
                          onClick={() => {
                            document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                          }} 
                          className="text-sm font-semibold leading-6 text-white border border-white rounded-3xl px-8 py-3 hover:bg-gray-50 hover:text-black transition-colors"
                        >
                          Learn more
                        </button>
                    </div>
                    <div className="mt-10 flex items-start">
                        <button onClick={() => handleArrowClick('left')}>
                          <CiCircleChevLeft className='text-gray-500 text-6xl cursor-pointer hover:text-white transition-colors' />
                        </button>
                        <button onClick={() => handleArrowClick('right')}>
                          <CiCircleChevRight className='text-gray-500 text-6xl cursor-pointer hover:text-white transition-colors' />
                        </button>
                    </div>
                    </div>
                </div>
            </div>
            <div className="absolute right-0 top-0 h-full px-4 flex flex-col items-end justify-center transition-all duration-500">
                <IoIosArrowRoundUp className='text-white text-2xl cursor-pointer' onClick={() => handleArrowClick('up')} />
                <p className={`${indieFlower.className} ${activeIndex === 0 ? 'text-7xl' : 'text-xs'} p-2 cursor-pointer transition-all duration-500`} onClick={() => handleDotClick(0)}>00</p>
                <p className={`${indieFlower.className} ${activeIndex === 1 ? 'text-7xl' : 'text-xs'} p-2 cursor-pointer transition-all duration-500`} onClick={() => handleDotClick(1)}>01</p>
                <p className={`${indieFlower.className} ${activeIndex === 2 ? 'text-7xl' : 'text-xs'} p-2 cursor-pointer transition-all duration-500`} onClick={() => handleDotClick(2)}>02</p>
                <p className={`${indieFlower.className} ${activeIndex === 3 ? 'text-7xl' : 'text-xs'} p-2 cursor-pointer transition-all duration-500`} onClick={() => handleDotClick(3)}>03</p>
                <p className={`${indieFlower.className} ${activeIndex === 4 ? 'text-7xl' : 'text-xs'} p-2 cursor-pointer transition-all duration-500`} onClick={() => handleDotClick(4)}>04</p>
                <p className={`${indieFlower.className} ${activeIndex === 5 ? 'text-7xl' : 'text-xs'} p-2 cursor-pointer transition-all duration-500`} onClick={() => handleDotClick(5)}>05</p>
                <p className={`${indieFlower.className} ${activeIndex === 6 ? 'text-7xl' : 'text-xs'} p-2 cursor-pointer transition-all duration-500`} onClick={() => handleDotClick(6)}>06</p>
                <IoIosArrowRoundDown className='text-white text-2xl cursor-pointer' onClick={() => handleArrowClick('down')} />
            </div>
            {/* <div className="absolute bottom-0 pb-16 isolate pt-8 self-end px-12 sm:px-16 lg:px-28 bg-black/50">
                <div className="mx-auto w-full flex text-left space-x-24 px-20">
                    <div className="flex flex-col space-y-2">
                        <p className="text-white text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veniam autem sapiente facere mollitia quae eligendi magnam placeat odit.</p>
                        <h1 className="text-white text-lg ">Learn More</h1>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <p className="text-white text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veniam autem sapiente facere mollitia quae eligendi magnam placeat odit.</p>
                        <h1 className="text-white text-lg ">Learn More</h1>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <p className="text-white text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veniam autem sapiente facere mollitia quae eligendi magnam placeat odit.</p>
                        <h1 className="text-white text-lg ">Learn More</h1>
                    </div>
                </div>
            </div> */}

        </div>
    )
}

