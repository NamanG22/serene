import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <Header />
      <div className="w-full h-screen z-0 fixed top-0 left-0">
        <img className="w-full h-full object-cover" src="/background.jpg" alt="background" />
      </div>
      {/* Hero Section */}
      <div className='absolute top-0 left-0 w-full h-screen z-10'>
        <div className='w-full h-screen'>
          <div className='w-full h-full'>
            <img 
              src="/background5.jpg" 
              alt="heroimage"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="absolute bottom-20 isolate pl-6 pt-14 lg:pl-16 self-end">
          <div className="mx-auto max-w-2xl">
            <div className="text-left">
              <p className="my-4 text-sm leading-8 text-white/70">
                by Naman
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Welcome to Serene
              </h1>
              <p className="mt-6 text-md leading-8 text-black">
                A modern full-stack application built with Next.js, featuring a beautiful UI
                and powerful backend capabilities.
              </p>
              <div className="mt-10 flex items-start gap-x-6">
                {/* <Link
                  href="/marketplace"
                  className="rounded-4xl text-lg bg-indigo-600 px-12 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Explore
                </Link> */}
                <Link href="/about" className="text-sm font-semibold leading-6 text-gray-600 border border-gray-600 rounded-3xl px-8 py-3 bg-white">
                  Learn more
                </Link>
              </div>
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
                <Link
                  href="/dashboard"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  View Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
