import Header from '@/components/Header'

export default function About() {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">About Serene</h1>
        
        <div className="prose prose-lg">
          <p className="text-gray-600">
            Serene is a modern web application built with Next.js, showcasing the power
            of full-stack development. It features a clean, responsive design and
            demonstrates the seamless integration between frontend and backend
            functionality.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Key Features
          </h2>
          
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Modern React with Next.js 14</li>
            <li>Type-safe development with TypeScript</li>
            <li>Beautiful UI with Tailwind CSS</li>
            <li>Server-side rendering and API routes</li>
            <li>Responsive design for all devices</li>
          </ul>
        </div>
      </div>
    </>
  )
} 