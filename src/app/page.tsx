import Browse from '@/components/Browse'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HomeHero from '@/components/HomeHero'
import Products from '@/components/Products'

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-full h-screen z-0 fixed top-0 left-0">
        <img className="w-full h-full object-cover" src="/background.jpg" alt="background" />
      </div>  
      <HomeHero/>
      <Browse/>
      <div className='relative w-full h-[200px] bg-gradient-to-b from-transparent to-black -mt-50'></div>
      <div className='relative h-[300px] bg-black'></div>
      <div className='relative w-full h-[200px] bg-gradient-to-b from-black to-transparent z-10'></div>
      <Products/>
      <div className='h-[300px]'></div>
      <Footer />
    </>
  )
}
