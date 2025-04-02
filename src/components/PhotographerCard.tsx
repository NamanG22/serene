import Image from 'next/image'
import Link from 'next/link'

interface PhotographerCardProps {
  id: string
  name: string
  type: 'studio' | 'individual'
  specialties: string[]
  rating: number
  reviewCount: number
  imageUrl: string
  location: string
  priceRange: string
}

export default function PhotographerCard({
  id,
  name,
  type,
  specialties,
  rating,
  reviewCount,
  imageUrl,
  location,
  priceRange,
}: PhotographerCardProps) {
  return (
    <Link href={`/marketplace/${id}`} className="group">
      <div className="relative overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
        <div className="aspect-w-3 aspect-h-2">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
              {type}
            </span>
          </div>
          <p className="mt-1 text-sm text-gray-500">{location}</p>
          <div className="mt-2 flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-4 w-4 ${
                  i < rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-sm text-gray-500">({reviewCount})</span>
          </div>
          <div className="mt-2">
            <div className="flex flex-wrap gap-1">
              {specialties.map((specialty) => (
                <span
                  key={specialty}
                  className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-900">{priceRange}</span>
            <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-500">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
} 