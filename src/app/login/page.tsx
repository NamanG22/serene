'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Comic_Neue, Indie_Flower, Merriweather } from 'next/font/google'

const indieFlower = Indie_Flower({
  subsets: ['latin'],
  weight: ['400'],
});

const comicNeue = Comic_Neue({
  subsets: ['latin'],
  weight: ['400'],
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400'],
});

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      // TODO: Implement actual authentication
      console.log('Login attempt:', { email, password })
      router.push('/dashboard')
    } catch (err) {
      setError('Invalid email or password'+err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 login-box">
      <div className="w-full max-w-7xl min-h-[700px] overflow-hidden flex rounded-4xl shadow-2xl">
        {/* Left side - Image */}
        <div className="hidden md:block w-1/2 relative bg-transparent login-box-in">
          <div className="absolute inset-0 rounded-4xl">
            <div className={`${merriweather.className} text-3xl p-4 h-1/2`}>
              <p className='text-sm text-center'>&quot;A camera captures what the eye sees,</p>
              <p className='text-sm text-center'>but a photograph reveals the beauty the heart feels.&quot;</p>
            </div>
            <div className={`${merriweather.className} text-3xl p-4 h-1/2 flex flex-col justify-end`}>
              <h1 className="text-5xl font-bold mb-4 flex flex-col">
                <span>Welcome to Serene</span>
                </h1>
              <p className="text-sm">Discover and book the best photographers</p>
              <p className="text-sm">for your special moments</p>
            </div>
          </div>
        </div>

        {/* Right side - Login form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
          <div className="mx-auto text-center text-black flex flex-col h-full justify-center">
            <h2 className={`${merriweather.className} text-4xl font-bold mb-1`}>
              Welcome Back
            </h2>
            <p className="mb-12 text-sm">
              Enter your details below to login to your account
            </p>

            <form className="space-y-6 flex flex-col gap-3" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-left">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="block w-full appearance-none rounded-lg px-3 py-3 placeholder-gray-400 placeholder:text-[12px] bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-left">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="block w-full appearance-none rounded-lg px-3 py-3 placeholder-gray-400 placeholder:text-[12px] bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-[12px] text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-[12px]">
                  <Link href="/forgot-password" className="font-medium hover:text-indigo-500">
                    Forgot Password
                  </Link>
                </div>
              </div>

              {error && (
                <div className="text-red-600 text-sm">{error}</div>
              )}

              <div className="">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex w-full justify-center rounded-lg border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Signing in...' : 'Sign In'}
                </button>
              </div>
            </form>

          </div>
          <div className="mx-auto text-black text-center space-y-4">
            <p className="text-sm">Don't have an account? <Link href="/register" className="font-bold hover:text-indigo-500">Sign Up</Link></p>
            <p className="text-sm">Back to <Link href="/" className="font-bold hover:text-indigo-500">Home</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
} 