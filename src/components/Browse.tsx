// import { ReactNode } from 'react';
import Link from 'next/link';
  
// const categories = [
//     {
//         name: 'Weddings & Personal Events',
//         icon: <FaUserFriends size={28} />,
//     },
//     {
//         name: 'Corporate Events & Parties',
//         icon: <FaBriefcase size={28} />,
//     },
//     {
//         name: 'Creators & Influencers',
//         icon: <FaCameraRetro size={28} />,
//     },
//     {
//         name: 'Product Shoots',
//         icon: <FaBoxOpen size={28} />,
//     },
//     {
//         name: 'Real Estate & Commercial',
//         icon: <FaBuilding size={28} />,
//     },
// ];

// interface CategoryCardProps {
//     icon: ReactNode;
//     name: string;
// }

// function CategoryCard({ icon, name }: CategoryCardProps) {
//     return (
//         <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-2xl p-5 hover:shadow-xl hover:scale-105 transition-all cursor-pointer">
//             <div className="text-indigo-600 mb-3">{icon}</div>
//             <p className="text-center text-sm font-semibold text-gray-700">{name}</p>
//         </div>
//     );
// }

export default function Browse(){
    return(
        <section className="relative py-10 px-12 sm:px-16 lg:px-28 min-h-screen">
          <div className="absolute inset-0 w-full h-full z-0 bg-gradient-to-r from-[#3B1E54] to-[#9B7EBD]">
            <img 
              src="/reflect.png" 
              alt="browse background" 
              className="w-full h-full object-cover object-[10%_100%]"
            />
            <div className="absolute inset-0" />
          </div>
          <div className="relative z-10 flex w-full h-full items-center justify-center">
            <div className='min-h-screen flex justify-center pt-[10%]'>
                <div className="">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl flex flex-col leading-20">
                            Capture Every Moment, Your Way
                        </h1>
                        <p className="mt-4 text-md">
                        Professional photography for every occasion and need.
                        </p>
                        <p className="mt-4 text-md">
                        Find the perfect match for your specific requirements.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link href="/marketplace" className="text-sm font-semibold leading-6 text-gray-600 border border-gray-600 rounded-3xl px-8 py-3 bg-white">
                                Explore marketplace
                            </Link>
                            <Link href="/about" className="text-sm font-semibold leading-6 text-gray-600 border border-gray-600 rounded-3xl px-8 py-3 bg-white">
                                About us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='w-1/2 flex space-x-8 justify-center'>
            
                <div className=''>
                    <div className='mt-8 w-full h-[60%] rounded-[80px] bg-cover' style={{ backgroundImage: 'url("/wedding.jpg")', backgroundPosition: '47% center' }}></div>
                    <div className='mt-4 w-full h-[45%] rounded-[80px] bg-cover' style={{ backgroundImage: 'url("/wedding.jpg")', backgroundPosition: 'top center' }}></div>
                </div>
                <div className='w-[25%]'>
                    <div className='-mt-28 w-full h-[60%] rounded-[80px] bg-cover' style={{ backgroundImage: 'url("/wedding.jpg")', backgroundPosition: '75% center' }}></div>
                    <div className='mt-8 w-full h-[50%] rounded-[80px] bg-cover' style={{ backgroundImage: 'url("/wedding.jpg")', backgroundPosition: 'bottom center' }}></div>
                </div>
                <div className='w-[25%]'>
                    <div className='mt-24 w-full h-[70%] rounded-[80px] bg-cover' style={{ backgroundImage: 'url("/wedding.jpg")', backgroundPosition: '60% center' }}></div>
                    <div className='mt-4 w-full h-[40%] rounded-[80px] bg-cover' style={{ backgroundImage: 'url("/wedding.jpg")', backgroundPosition: '40% center' }}></div>
                </div> */}
                {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
                    {categories.map((category, idx) => (
                        <CategoryCard key={idx} icon={category.icon} name={category.name} />
                    ))}
                </div> */}
            {/* </div> */}
          </div>

        </section>
    )
}