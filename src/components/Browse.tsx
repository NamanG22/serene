// import { ReactNode } from 'react';
// import Link from 'next/link';
// import { Comic_Neue } from 'next/font/google'

// const comicNeue = Comic_Neue({
//   subsets: ['latin'],
//   weight: ['400'],
// });

export default function Browse(){
    return(
        <section className="max-h-screen px-28 py-20 flex flex-col space-y-10 items-center justify-center">
            <div className="px-12 sm:px-16 lg:px-28 flex items-center justify-center">
                <div className="mx-auto">
                    <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-7xl">
                        Welcome to Serene
                    </h1>
                    <p className="mt-4 text-md leading-8 max-w-3xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veniam autem sapiente facere mollitia quae.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    </div>
                </div>
            </div>
            <div className='w-full flex items-center justify-center space-x-4'>
                <div className='h-[400px] w-1/4 bg-white hover:w-full transition-all duration-3000' style={{
        backgroundImage: "url('/wedding.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: '45%',
        backgroundPositionY: '100%'
    }}></div>
                <div className='h-[400px] w-1/4 bg-white hover:w-full transition-all duration-3000' style={{
        backgroundImage: "url('/event.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: '100%',
        backgroundPositionY: '100%'
    }}></div>
                <div className='h-[400px] w-1/4 bg-white hover:w-full transition-all duration-3000' style={{
        backgroundImage: "url('/ph.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: '45%',
        backgroundPositionY: '100%'
    }}></div>
                <div className='h-[400px] w-1/4 bg-white hover:w-full transition-all duration-3000'></div>
                <div className='h-[400px] w-1/4 bg-white hover:w-full transition-all duration-3000'></div>
                <div className='h-[400px] w-1/4 bg-white hover:w-full transition-all duration-3000'></div>
            </div>
        </section>
    )
}