import Link from 'next/link';

const Navigation = () => {
   return (
      <>
         <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
               <div className="relative flex items-center justify-between h-16">
                  <Link href="/" className="text-white text-2xl font-bold">Home</Link>
                  <Link href="/about" className="text-white text-2xl font-bold">About</Link>
               </div>
            </div>
         </nav>
      </>
   )
}

export default Navigation