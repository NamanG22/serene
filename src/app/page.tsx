import Browse from '@/components/Browse'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HomeHero from '@/components/HomeHero'
import Products from '@/components/Products'
import Review from '@/components/Review'
import Link from 'next/link'

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
      <div className='relative w-full h-[200px] bg-gradient-to-b from-black to-transparent z-10'></div>
      <Products/>
      <div className='relative h-[680px]'>
        <div className="absolute inset-0 w-full h-full z-0 bg-gradient-to-r from-[#3B1E54] to-[#9B7EBD]">
          <img 
            src="/product-bg-6.jpg" 
            alt="browse background" 
            className="w-full h-full object-cover object-[10%_100%]"
          />
          <div className="absolute inset-0" />
        </div>
        <div className="relative flex flex-col w-full h-fit px-28 items-center justify-center pt-8">
            <div className='w-full flex items-center mx-auto justify-center'>
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl flex flex-col leading-20">
                        <span>How it works</span>
                    </h1>
                    <p className="mt-4 text-md">
                    Hear from clients and photographers who have found success on our platform.
                    </p>
                </div>
            </div>
            <div className='w-full flex items-center space-x-4 justify-center mt-12'>
                    <div className='w-[300px] h-[310px] bg-white box flex flex-col px-5 pt-5'>
                        <div className='w-full h-[80%] inbox'></div>
                        <div className='w-full h-[20%] justify-center items-center flex text-black'>
                            <h1 className='indie-flower-regular text-3xl'>Signature Here</h1>
                        </div>
                    </div>
                    <div className='w-[300px] h-[310px] bg-white box flex flex-col px-5 pt-5'>
                        <div className='w-full h-[80%] inbox'></div>
                        <div className='w-full h-[20%] justify-center items-center flex text-black'>
                            <h1 className='indie-flower-regular text-3xl'>Signature Here</h1>
                        </div>
                    </div>
                    <div className='w-[300px] h-[310px] bg-white box flex flex-col px-5 pt-5'>
                        <div className='w-full h-[80%] inbox'></div>
                        <div className='w-full h-[20%] justify-center items-center flex text-black'>
                            <h1 className='indie-flower-regular text-3xl'>Signature Here</h1>
                        </div>
                    </div>
            </div>
        </div>
      </div>
      <div className='relative w-full h-[200px] bg-gradient-to-b from-transparent to-black -mt-50'></div>
      <div className='relative w-full h-[200px] bg-gradient-to-b from-black to-transparent z-10'></div>
      <Review/>
      <div className='relative w-full h-[200px] bg-gradient-to-b from-transparent to-black -mt-50'></div>
      <div className='relative w-full h-[200px] bg-gradient-to-b from-black to-transparent z-10'></div>
      <Footer />
    </>
  )
}
