import Browse from '@/components/Browse'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HomeHero from '@/components/HomeHero'
export default function Home() {
  return (
    <>
      <Header />
      <div className="w-full h-screen z-0 fixed top-0 left-0">
        <img className="w-full h-full object-cover" src="/background.jpg" alt="background" />
      </div>
      <HomeHero/>
      {/* <div className='relative bg-gray-900 h-[200px] z-10'></div> */}
      <Browse/>
      <div className='h-[300px]'></div>
      <Footer />
    </>
  )
}
