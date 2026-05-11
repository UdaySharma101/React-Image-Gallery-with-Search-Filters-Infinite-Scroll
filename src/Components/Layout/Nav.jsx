import React from 'react'
import { Search,Menu } from 'lucide-react'
export const Nav = () => {
    return (
        <nav className='w-full bg-white shadow-sm'>
            <div className='max-w-7xl w-full mx-auto px-5 py-3  flex items-center justify-between '>

                <h1 className="text-2xl font-bold tracking-wide">
                    <span className="text-[#3B82F6] font-bold tracking-wide">Dev</span>
                    <span className="text-[##111827] font-bold tracking-wide">Gallery</span>
                </h1>

                  <div className='relative w-1/3'>
                  <input type="text" placeholder='Search for free' className='hidden bg-gray-200 sm:block px-12 py-2  w-full max-w-xl rounded-xl md:mx-3  outline-none hover:bg-gray-300 ' />
                  <Search className='hidden sm:block absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black cursor-pointer' size={16} strokeWidth={2} />

                  </div>
                <button className='md:hidden font-semibold cursor-pointer text-gray-600 hover:text-black   '>
                    <Menu className='hover:text-black' strokeWidth={1.75} />
                </button>

                <ul className='hidden md:flex items-center justify-end  gap-10'>
                    <li className='font-semibold cursor-pointer text-gray-600 hover:text-black transition'>Categories</li>
                    <li className='font-semibold cursor-pointer text-gray-600 hover:text-black transition'>Favroutes</li>
                    <li className='font-semibold cursor-pointer text-gray-600 hover:text-black transition'>About</li>
                </ul>

            </div>
        </nav>
    )
}
