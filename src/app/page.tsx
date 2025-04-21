import Browse from '@/components/Browse'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HomeHero from '@/components/HomeHero'
// import Products from '@/components/Products'
import Review from '@/components/Review'
// import { Indie_Flower } from 'next/font/google'

// const indieFlower = Indie_Flower({
//   subsets: ['latin'],
//   weight: ['400'],
// });

export default function Home() {
  return (
    <>
      <Header />
      <HomeHero/>
      <div className='relative w-full h-[100px] bg-gradient-to-b from-transparent to-black z-10 -mt-25'></div>
      <Browse/>
      <div className='relative w-full h-[100px] bg-gradient-to-b from-black to-transparent z-10'></div>
      <Review/>
      <div className='relative w-full h-[100px] bg-gradient-to-b from-transparent to-black z-10 -mt-25'></div>
      {/* <Browse/> */}
      {/* <div className='relative w-full h-[200px] bg-gradient-to-b from-transparent to-[#1b0b3b] -mt-100'></div>
      <div className='relative w-full h-[200px] bg-gradient-to-b from-[#1b0b3b] to-transparent z-10'></div>
      <Products/>
      <div className='relative min-h-screen -mt-30'>
        <div className="absolute inset-0 w-full h-full z-0 bg-white">
        </div>
        <div className="relative flex flex-col w-full h-fit px-28 items-center justify-center py-48">
            <div className='w-full flex items-center mx-auto justify-center text-black'>
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl flex flex-col leading-20">
                        <span>How it works</span>
                    </h1>
                    <p className="text-md">
                    We&apos;ve simplified the process of finding and booking photographers for your needs.
                    </p>
                </div>
            </div>
            <div className='w-full flex flex-col items-center space-y-20 justify-center mt-12'>
              <div className='w-full flex items-center justify-center -ml-56'>
                <div className='w-3/4 h-[250px] bg-black flex flex-col px-5 pt-5 rounded-r-full inbox-7'></div>
                <div className='w-[28%] justify-center items-center flex flex-col text-black ml-10'>
                    <h1 className={`${indieFlower.className} text-5xl indie-flower-regular`}>Search</h1>
                    <p className={`${indieFlower.className} text-xl text-center`}>Browse our marketplace of professional photographers and filter by location, specialty, and price.</p>
                </div>
              </div>
              <div className='w-full flex items-center space-x-4 justify-center -mr-56'>
                <div className='w-1/4 h-[45%] justify-center items-center flex flex-col text-black mr-10'>
                    <h1 className={`${indieFlower.className} text-5xl`}>Connect</h1>
                    <p className={`${indieFlower.className} text-xl text-center px-4`}>View profiles, portfolios, and reviews to find the perfect match for your project.</p>
                </div>
                <div className='w-3/4 h-[250px] bg-black box flex flex-col px-5 pt-5 rounded-l-full inbox-8'></div>
              </div>
              <div className='w-full flex items-center space-x-4 justify-center -ml-56'>
                <div className='w-3/4 h-[250px] bg-black box flex flex-col px-5 pt-5 rounded-r-full inbox-9'></div>
                <div className='w-[28%] h-[45%] justify-center items-center flex flex-col text-black ml-10'>
                    <h1 className={`${indieFlower.className} text-5xl`}>Book</h1>
                    <p className={`${indieFlower.className} text-xl text-center`}>Schedule and book your photography session with our secure and simple booking system.</p>
                </div>
              </div>
                    <div className='w-[300px] h-[330px] bg-white box flex flex-col px-5 pt-5'>
                        <div className='w-full h-[55%] inbox inbox-7'></div>
                        <div className='w-full h-[45%] justify-center items-center flex flex-col text-black'>
                            <h1 className={`${indieFlower.className} text-3xl indie-flower-regular`}>Search</h1>
                            <p className={`${indieFlower.className} text-md text-center`}>Browse our marketplace of professional photographers and filter by location, specialty, and price.</p>
                        </div>
                    </div>
                    <div className='w-[300px] h-[330px] bg-white box flex flex-col px-5 pt-5'>
                        <div className='w-full h-[55%] inbox inbox-8'></div>
                        <div className='w-full h-[45%] justify-center items-center flex flex-col text-black'>
                            <h1 className={`${indieFlower.className} text-3xl`}>Connect</h1>
                            <p className={`${indieFlower.className} text-md text-center px-4`}>View profiles, portfolios, and reviews to find the perfect match for your project.</p>
                        </div>
                    </div>
                    <div className='w-[300px] h-[330px] bg-white box flex flex-col px-5 pt-5'>
                        <div className='w-full h-[55%] inbox inbox-9'></div>
                        <div className='w-full h-[45%] justify-center items-center flex flex-col text-black'>
                            <h1 className={`${indieFlower.className} text-3xl`}>Book</h1>
                            <p className={`${indieFlower.className} text-md text-center`}>Schedule and book your photography session with our secure and simple booking system.</p>
                        </div>
                    </div>
            </div>
        </div>
      </div>
      <Review/>
      <div className='relative w-full h-[200px] bg-gradient-to-b from-transparent to-black z-20 -mt-50'></div>
      <div className='relative w-full h-[200px] bg-gradient-to-b from-black to-transparent z-10'></div> */}
      <Footer />
    </>
  )
}
