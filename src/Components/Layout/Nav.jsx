import React, { useState } from 'react'
import { Search, Menu, X } from 'lucide-react'
export const Nav = () => {
    const [open, setOpen] = useState(false)
    let toggle = () => {
        setOpen(!open)
    }

    return (
        <nav className='w-full h-20 bg-white shadow-sm'>
            <div className='max-w-7xl w-full mx-auto px-5 py-3  h-full flex items-center justify-between '>

                <h1 className="text-2xl font-bold tracking-wide">
                    <span className="text-[#3B82F6] font-bold tracking-wide">Dev</span>
                    <span className="text-[##111827] font-bold tracking-wide">Gallery</span>
                </h1>

                <div className='relative w-1/3'>
                    <input type="text" placeholder='Search for free' className='hidden bg-gray-200 sm:block px-12 py-2  w-full max-w-xl rounded-xl md:mx-3  outline-none hover:bg-gray-300 ' />
                    <Search className='hidden sm:block absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black cursor-pointer' size={16} strokeWidth={2} />

                </div>
                <button onClick={toggle} className='relative md:hidden font-semibold cursor-pointer text-gray-600 hover:text-black   '>
                    {open ? <div className="md:hidden flex flex-col items-end justify-center  gap-4 mt-4">
                        <X onClick={() => setOpen(false)} strokeWidth={1.75}  />
                        <div className='absolute top-20 flex flex-col shadow-lg h-30 px-13 py-5  gap-2 border-2  transform transition-transform duration-500 ease-in-out'>
                            <a href="#">Categories</a>
                            <a href="#">Favorites</a>
                            <a href="#">About</a>
                        </div> 
                    </div>
                        : <Menu className='hover:text-black' strokeWidth={1.75} />}
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
