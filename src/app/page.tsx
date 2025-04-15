import Browse from '@/components/Browse'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HomeHero from '@/components/HomeHero'
import Products from '@/components/Products'
import Review from '@/components/Review'

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-full h-screen z-0 fixed top-0 left-0">
        <img className="w-full h-full object-cover" src="/bg6.jpg" alt="background" />
      </div>  
      <HomeHero/>
      <Browse/>
      <div className='relative w-full h-[200px] bg-gradient-to-b from-transparent to-black -mt-50'></div>
      <div className='relative h-[300px] bg-black'></div>
      <div className='relative w-full h-[200px] bg-gradient-to-b from-black to-transparent z-10'></div>
      <Products/>
      <div className='relative w-full h-[200px] bg-gradient-to-b from-transparent to-black -mt-50'></div>
      <div className='relative w-full h-[200px] bg-gradient-to-b from-black to-transparent z-10'></div>
      <div className='relative h-fit z-60 -mt-20'>
        <div className='flex flex-col items-center'>
          <div className='flex flex-col items-center'>
            <h1 className='text-white text-4xl font-bold'>How it works</h1>
            <p>We have simplified the process of finding and booking photographers for your needs.</p>
          </div>
          <div className='flex flex-row justify-center w-full h-fit space-x-8 my-12'>
            <div className='w-[20%] h-full bg-white/40 rounded-lg text-center flex flex-col text-black font-bold text-xl shadow-md p-4'>
              <img src="/background.jpg" alt="search" className='h-1/2' />
              <div className='flex flex-col items-start'>
                <h1 className='text-white text-4xl permanent-marker-regular'>Search</h1>
                <p className='text-white text-sm text-left mt-2'>Browse through our list of photographers and choose the one that best suits your needs.</p>
              </div>
            </div>
            <div className='w-[20%] h-full bg-white/40 rounded-lg text-center flex flex-col text-black font-bold text-xl shadow-md p-4'>
              <img src="/background.jpg" alt="search" className='h-1/2' />
              <div className='flex flex-col items-start'>
                <h1 className='text-white text-4xl permanent-marker-regular'>Search</h1>
                <p className='text-white text-sm text-left mt-2'>Browse through our list of photographers and choose the one that best suits your needs.</p>
              </div>
            </div>
            <div className='w-[20%] h-full bg-white/40 rounded-lg text-center flex flex-col text-black font-bold text-xl shadow-md p-4'>
              <img src="/background.jpg" alt="search" className='h-1/2' />
              <div className='flex flex-col items-start'>
                <h1 className='text-white text-4xl permanent-marker-regular'>Search</h1>
                <p className='text-white text-sm text-left mt-2'>Browse through our list of photographers and choose the one that best suits your needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='relative w-full h-[200px] bg-gradient-to-b from-transparent to-black -mt-20'></div>
      <div className='relative w-full h-[200px] bg-gradient-to-b from-black to-transparent z-10'></div>
      <Review/>
      <Footer />
    </>
  )
}
