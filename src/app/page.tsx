import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-full h-screen z-0 fixed top-16 left-0">
        <img className="w-full h-full object-cover" src="/background.jpg" alt="background" />
      </div>
      {/* Hero Section */}
      <div className='absolute top-16 left-0 w-full h-screen z-10'>

        <div className="bg-white">
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Welcome to Serene
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  A modern full-stack application built with Next.js, featuring a beautiful UI
                  and powerful backend capabilities.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="/dashboard"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                  <a href="/about" className="text-sm font-semibold leading-6 text-gray-900">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Image Reveal - 200px space */}
        {/* <div className="h-[200px]" /> */}

        {/* Black Section
        <div className="bg-black text-white">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Built for Modern Development
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Experience the perfect blend of performance, scalability, and developer experience
                with our Next.js powered platform.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                <div className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-white">Fast Performance</dt>
                  <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">Optimized for speed with server-side rendering and static generation capabilities.</p>
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-white">Type Safety</dt>
                  <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">Built with TypeScript for enhanced developer experience and code reliability.</p>
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-white">Modern Stack</dt>
                  <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">Leveraging the latest web technologies and best practices for modern applications.</p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div> */}
        {/* Background Image Reveal - 200px space */}
        <div className="h-[300px]" />

        {/* Final White Section */}
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
