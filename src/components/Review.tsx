export default function Review() {
  return (
    <div className='relative bg-black min-h-screen -mt-50'>
        <div className="absolute inset-0 w-full h-full z-0 bg-gradient-to-r from-[#3B1E54] to-[#9B7EBD]">
            <img 
              src="/review-bg.jpg" 
              alt="browse background" 
              className="w-full h-full object-cover object-[10%_100%]"
            />
            <div className="absolute inset-0" />
          </div>
        <div className='flex flex-col items-center'>
            <h1 className='text-white text-4xl font-bold'>What our customers say</h1>
            <p className='text-white text-sm'>Read what our customers have to say about us</p>
        </div>
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white shadow-md shadow-white/10">
          <div className="flex items-center space-x-4">
            {/* User Image */}
            <div className="h-[300px] w-1/2 overflow-hidden">
              <img 
                src="/loginBack.jpg" 
                alt="User profile"
                className="h-full w-full object-cover"
              />
            </div>
            
            {/* User Info and Review */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <div className="flex items-center mt-1">
                
              </div>
              <p className="mt-2 text-gray-600">
              `&#34;`Absolutely amazing experience! The service was top-notch and exceeded all my expectations. 
                I would highly recommend this to anyone looking for quality and reliability.
              </p>
              <p className="mt-2 text-sm text-gray-500">Posted on August 12, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}