import Link from 'next/link'

export default function Header() {
  return (
    <>
      {/* Fixed header */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <nav className="mx-auto px-12 sm:px-16 lg:px-28">
          <div className="justify-between flex items-center py-4">

            <div className='flex items-center space-x-4'>
              <div className="flex items-center justify-between">
                <div className="flex">
                  <Link href="/" className="flex items-center">
                    <span className="text-[28px] font-bold text-white">Serene</span>
                  </Link>         
                </div>
              </div>
              <div className="flex items-center">
                <div className="hidden sm:flex sm:space-x-8">
                  <p className='text-white/40 ml-4'>
                    |
                  </p>
                  <Link
                    href="/marketplace"
                    className="inline-flex items-center px-1 pt-1 text-[14px] text-white hover:border-b-2 transition-all"
                  >
                    Marketplace
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center px-1 pt-1 text-[14px] text-white hover:border-b-2 transition-all"
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-1 pt-1 text-[14px] text-white hover:border-b-2 transition-all"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex items-center">
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center rounded-md border-2 border-white px-4 py-1.5 text-sm font-medium text-white hover:bg-white hover:text-gray-900 transition-all"
                >
                  Sign in
                </Link>
            </div>
          </div>
            <hr className='text-white/15 w-[90%] mx-auto'/>
        </nav>
      </header>
    </>
  )
} 