import Link from "next/link";

export default function HomeHero(){
    return(
        <div className='relative mt-0 w-full max-h-screen z-10'>
            <div className='w-full h-screen'>
                <div className='w-full h-full'>
                    <img 
                    src="/browse-bg-2.jpg" 
                    alt="heroimage"
                    className="w-full h-full object-cover"
                    />
                </div>
            </div>

            <div className="absolute bottom-20 isolate pt-14 self-end px-12 sm:px-16 lg:px-28">
                <div className="mx-auto max-w-2xl">
                    <div className="text-left">
                    <p className="my-4 text-sm leading-8 text-white/70">
                        by Nova
                    </p>
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Welcome to Serene
                    </h1>
                    <p className="mt-4 text-md leading-8">
                    The Visual Creator Hub — Events, Brands & More
                    </p>
                    <div className="mt-10 flex items-start gap-x-6">
                        {/* <Link
                        href="/marketplace"
                        className="rounded-4xl text-lg bg-indigo-600 px-12 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Explore
                        </Link> */}
                        <Link href="/about" className="text-sm font-semibold leading-6 text-gray-600 border border-gray-600 rounded-3xl px-8 py-3 bg-white">
                        Learn more
                        </Link>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

