import Link from 'next/link'

export default function Header() {
  return (
    <>
      {/* Spacer div to prevent content from going under fixed header */}
      <div className="h-16" />
      
      {/* Fixed header */}
      <header className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-md shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-bold text-white">Serene</span>
              </Link>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  href="/"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white border-b-2 border-gray-900"
                >
                  Home
                </Link>
                <Link
                  href="/marketplace"
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-gray-900 hover:border-b-2 hover:border-gray-900 transition-all"
                  >
                  Marketplace
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-gray-900 hover:border-b-2 hover:border-gray-900 transition-all"
                >
                  About
                </Link>
                <Link
                  href="/dashboard"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-gray-900 hover:border-b-2 hover:border-gray-900 transition-all"
                >
                  Dashboard
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
} 