'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import PhotographerCard from '@/components/PhotographerCard'

// Mock data - replace with actual API call
const photographers = [
  {
    id: '1',
    name: 'Studio Luminance',
    type: 'studio',
    specialties: ['Wedding', 'Portrait', 'Commercial'],
    rating: 4.8,
    reviewCount: 156,
    imageUrl: '/studio1.jpg',
    location: 'New York, NY',
    priceRange: '$500-$2000',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    type: 'individual',
    specialties: ['Nature', 'Events'],
    rating: 4.9,
    reviewCount: 89,
    imageUrl: '/photographer1.jpg',
    location: 'Los Angeles, CA',
    priceRange: '$200-$800',
  },
  // Add more mock data as needed
]

const specialtyOptions = [
  'Wedding',
  'Portrait',
  'Commercial',
  'Nature',
  'Events',
  'Fashion',
  'Product',
  'Real Estate',
]

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<string>('all')

  const filteredPhotographers = photographers.filter((photographer) => {
    const matchesSearch = photographer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      photographer.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'all' || photographer.type === selectedType;
    const matchesSpecialties = selectedSpecialties.length === 0 ||
      photographer.specialties.some((s) => selectedSpecialties.includes(s));
    // Add price range filtering logic
    return matchesSearch && matchesType && matchesSpecialties;
  });

  return (
    <>
      <Header />
      <div className='absolute top-0 left-0 w-full h-[50%] z-10 rounded-b-3xl'>
        <img 
          src="/marketHero2.jpg" 
          alt="background" 
          className='w-full h-full object-cover object-[100%_60%] rounded-b-3xl' 
        />
        <div className='absolute bottom-[34%] left-28 z-10'>
          <h1 className='flex flex-col text-4xl font-bold'>
            Welcome to <span className='text-6xl'>Marketplace</span>
          </h1>
          <p className='text-gray-500'>
            Browse through our curated list of photographers and studios to find the perfect fit for your event.
          </p>
        </div>
      </div>

      <div className='bg-white w-full h-screen z-20'>
        
      </div>
      {/* <main className="min-h-screen bg-gray-50 pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8 space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search photographers or studios..."
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <select
                className="rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="studio">Studios</option>
                <option value="individual">Individuals</option>
              </select>
              <select
                className="rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <option value="all">All Prices</option>
                <option value="budget">Budget ($100-$500)</option>
                <option value="mid">Mid-Range ($501-$1000)</option>
                <option value="premium">Premium ($1000+)</option>
              </select>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {specialtyOptions.map((specialty) => (
                <button
                  key={specialty}
                  onClick={() => {
                    setSelectedSpecialties((prev) =>
                      prev.includes(specialty)
                        ? prev.filter((s) => s !== specialty)
                        : [...prev, specialty]
                    )
                  }}
                  className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                    selectedSpecialties.includes(specialty)
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {specialty}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPhotographers.map((photographer) => (
              <PhotographerCard
                key={photographer.id}
                id={photographer.id}
                name={photographer.name}
                type={photographer.type as "studio" | "individual"}
                specialties={photographer.specialties}
                rating={photographer.rating}
                reviewCount={photographer.reviewCount}
                imageUrl={photographer.imageUrl}
                location={photographer.location}
                priceRange={photographer.priceRange}
              />
            ))}
          </div>
        </div>
      </main> */}
    </>
  )
} 