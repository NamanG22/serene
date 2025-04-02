'use client'

import Header from '@/components/Header'
import Image from 'next/image'

// Mock data - replace with actual API call
const photographer = {
  id: '1',
  name: 'Studio Luminance',
  type: 'studio',
  specialties: ['Wedding', 'Portrait', 'Commercial'],
  rating: 4.8,
  reviewCount: 156,
  imageUrl: '/studio1.jpg',
  location: 'New York, NY',
  priceRange: '$500-$2000',
  description: 'Professional photography studio specializing in weddings, portraits, and commercial photography. Our team of experienced photographers brings creativity and technical excellence to every shoot.',
  portfolio: [
    '/portfolio1.jpg',
    '/portfolio2.jpg',
    '/portfolio3.jpg',
    '/portfolio4.jpg',
    '/portfolio5.jpg',
    '/portfolio6.jpg',
  ],
  services: [
    {
      name: 'Wedding Photography',
      price: '$2000',
      duration: '8 hours',
      description: 'Complete wedding day coverage including engagement shoot',
    },
    {
      name: 'Portrait Session',
      price: '$500',
      duration: '2 hours',
      description: 'Professional portrait session with retouched photos',
    },
    {
      name: 'Commercial Shoot',
      price: '$1500',
      duration: '4 hours',
      description: 'Product or brand photography with commercial usage rights',
    },
  ],
}

export default function PhotographerDetail() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          {/* Hero Section */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative h-96 overflow-hidden rounded-lg">
              <Image
                src={photographer.imageUrl}
                alt={photographer.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-900">{photographer.name}</h1>
                <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                  {photographer.type}
                </span>
              </div>
              <p className="mt-2 text-lg text-gray-600">{photographer.location}</p>
              <div className="mt-4 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-5 w-5 ${
                      i < photographer.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-gray-600">({photographer.reviewCount} reviews)</span>
              </div>
              <p className="mt-4 text-gray-600">{photographer.description}</p>
              <div className="mt-6">
                <h2 className="text-lg font-semibold text-gray-900">Specialties</h2>
                <div className="mt-2 flex flex-wrap gap-2">
                  {photographer.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900">Portfolio</h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {photographer.portfolio.map((image, index) => (
                <div key={index} className="relative aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                  <Image
                    src={image}
                    alt={`Portfolio ${index + 1}`}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900">Services & Pricing</h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {photographer.services.map((service) => (
                <div
                  key={service.name}
                  className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                  <p className="mt-2 text-sm text-gray-600">{service.description}</p>
                  <div className="mt-4">
                    <p className="text-2xl font-bold text-gray-900">{service.price}</p>
                    <p className="text-sm text-gray-600">{service.duration}</p>
                  </div>
                  <button
                    className="mt-4 w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
                  >
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
} 