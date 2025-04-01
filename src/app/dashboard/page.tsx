'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'

interface ApiResponse {
  message: string
  timestamp: string
}

export default function Dashboard() {
  const [apiData, setApiData] = useState<ApiResponse | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => {
        setApiData(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        setLoading(false)
      })
  }, [])

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
        
        <div className="bg-white shadow sm:rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">API Response</h2>
          
          {loading ? (
            <p className="text-gray-600">Loading...</p>
          ) : apiData ? (
            <div className="space-y-4">
              <div className="border-b pb-4">
                <p className="text-sm font-medium text-gray-500">Message</p>
                <p className="mt-1 text-gray-900">{apiData.message}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Timestamp</p>
                <p className="mt-1 text-gray-900">{new Date(apiData.timestamp).toLocaleString()}</p>
              </div>
            </div>
          ) : (
            <p className="text-red-600">Failed to load data</p>
          )}
        </div>
      </div>
    </>
  )
} 