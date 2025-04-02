import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-full h-screen z-0 fixed top-0 left-0">
        <img className="w-full h-full object-cover" src="/background.jpg" alt="background" />
      </div>
      {/* Hero Section */}
      <div className='absolute top-0 left-0 w-full h-screen z-10'>
        <div className='flex h-screen'>
          {/* Left side with text */}
          <div className="bg-black w-1/2 relative">
            {/* Gradient fade from right edge */}
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-r from-transparent to-black" />
            
            <div className="relative isolate px-6 pt-14 lg:px-8">
              <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="text-left">
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    Welcome to Serene
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    A modern full-stack application built with Next.js, featuring a beautiful UI
                    and powerful backend capabilities.
                  </p>
                  <div className="mt-10 flex items-start gap-x-6">
                    <a
                      href="/marketplace"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Find Photographers
                    </a>
                    <a href="/about" className="text-sm font-semibold leading-6 text-gray-600 border border-gray-600 rounded-md px-3 py-2">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side with image */}
          <div className='w-1/2 relative'>
            {/* Gradient fade from left edge */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-l from-transparent to-black z-10" />
            <div className="h-full relative">
              <img 
                src="/heroimage.jpg" 
                alt="heroimage"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="h-[300px]" />

        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Join us in building the next generation of web applications with our powerful and intuitive platform.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/dashboard"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  View Dashboard
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
