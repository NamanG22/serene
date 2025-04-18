'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import { RiSearchFill } from "react-icons/ri";
import { FaCaretRight } from "react-icons/fa6";
import Link from 'next/link';
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

// const specialtyOptions = [
//   'Wedding',
//   'Portrait',
//   'Commercial',
//   'Nature',
//   'Events',
//   'Fashion',
//   'Product',
//   'Real Estate',
// ]

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
    <div className='bg-[#ebefea] min-h-screen w-full'>
      <Header />
      {/* Hero Banner Section */}
      <div className='relative w-full h-[50vh]'>
        <img 
          src="/marketHero2.jpg" 
          alt="background" 
          className='w-full h-full object-cover object-[100%_60%] rounded-b-4xl' 
        />
        <div className='absolute bottom-[15%] left-28 space-y-4'>
          <p className='text-white/70'>by Nova</p>
          <h1 className='flex flex-col text-4xl font-bold text-white'>
            Welcome to <span className='text-6xl'>Marketplace</span>
          </h1>
          <p className='text-white'>Browse through our curated list of photographers and studios.</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto px-4 sm:px-6 lg:px-28 py-8 text-black">
        <div className="flex gap-8">
          {/* Main Content Area (2/3) */}
          <div className="w-2/3 space-y-6">
            {/* Search Bar */}
            <div className="w-full flex items-center">
              <Link href='/' className='flex items-center text-center space-x-1'>
                <h1 className='text-sm '>Manage </h1>
                <h1 className='text-sm '> Bookings </h1>
                <h1 className='text-sm px-4'> | </h1>
              </Link>
              <div className='flex items-center'>
                <RiSearchFill className='text-gray-400 text-lg' />
              </div>
              <input
                type="text"
                placeholder="Search photographers or studios..."
                className="py-3 px-2 flex-auto focus:border-indigo-500 focus:outline-none placeholder:text-[14px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Link href='/' className='flex items-center text-gray-600 flex-none'>
                <h1 className='text-sm'>List your services</h1>
                <FaCaretRight className='text-gray-600 text-lg' />
              </Link>
            </div>

            {/* Filters Section */}
            {/* <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
              <div className="flex gap-4">
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
            </div> */}

            {/* Photographer Cards */}
            <div className="space-y-4">
              {filteredPhotographers.map((photographer) => (
                <div key={photographer.id} className="bg-white h-46 rounded-xl p-2 shadow-sm flex gap-6">
                  <div className="w-1/3 bg-black rounded-xl">
                    <img
                      src={photographer.imageUrl}
                      alt={photographer.name}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                  <div className="w-2/3 space-y-3 flex flex-col">
                    <div className="flex justify-between items-start">
                      <div className='flex justify-center items-center'>
                        <h2 className="text-lg font-semibold ">{photographer.name}</h2>
                        <p className='text-gray-600 px-2'>|</p>
                        <p className="text-gray-600 text-sm">{photographer.location}</p>
                      </div>
                      <span className="text-gray-600">{photographer.priceRange}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">★</span>
                      <span>{photographer.rating}</span>
                      <span className="text-gray-500">({photographer.reviewCount} reviews)</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {photographer.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leaderboard Section (1/3) */}
          <div className="w-1/3">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Top Photographers</h2>
              <div className="space-y-4">
                {photographers
                  .sort((a, b) => b.rating - a.rating)
                  .slice(0, 5)
                  .map((photographer, index) => (
                    <div key={photographer.id} className="flex items-center gap-4 p-2 hover:bg-gray-50 rounded-lg">
                      <span className="text-2xl font-bold text-gray-400">#{index + 1}</span>
                      <div className="flex-1">
                        <h3 className="font-semibold">{photographer.name}</h3>
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="text-yellow-500">★</span>
                          <span>{photographer.rating}</span>
                          <span className="mx-1">•</span>
                          <span>{photographer.reviewCount} reviews</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 