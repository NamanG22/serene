import Link from 'next/link'
import { GoHomeFill } from "react-icons/go";

export default function Header() {
  return (
    <>
      {/* Spacer div to prevent content from going under fixed header */}
      <div className="h-16" />
      
      {/* Fixed header */}
      <header className="fixed top-0 left-0 right-0 shadow-sm z-50">
        <nav className="mx-auto px-12 sm:px-16 lg:px-28">
          <div className="justify-between py-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex">
                <Link href="/" className="flex items-center">
                  <span className="text-2xl font-bold text-white">Serene</span>
                </Link>         
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
            <div className="flex items-center">
              <div className="hidden sm:flex sm:space-x-8">
                <Link
                  href="/"
                  className="inline-flex items-center pt-1 text-sm font-medium text-white border-gray-900"
                >
                  <GoHomeFill className="h-6 w-6"/>
                </Link>
                <Link
                  href="/marketplace"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:border-b-2 transition-all"
                >
                  Marketplace
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:border-b-2 transition-all"
                >
                  About
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <hr className='text-white/15 w-[85%] mx-auto'/>
      </header>
    </>
  )
} 