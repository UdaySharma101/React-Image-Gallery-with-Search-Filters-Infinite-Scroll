import React, { useState } from 'react'
import { Search, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
export const Nav = () => {
    const [open, setOpen] = useState(false)
    let toggle = () => {
        setOpen(!open)
    }

    return (
        <nav className='w-full h-19 bg-white shadow-sm'>
            <div className='max-w-7xl w-full mx-auto px-5 py-3  h-full flex items-center justify-between '>

                <h1 className="text-2xl font-bold tracking-wide">
                    <span className="text-[#3B82F6] font-bold tracking-wide">Dev</span>
                    <span className="text-[#111827] font-bold tracking-wide">Gallery</span>
                </h1>

                {/* <div className='relative w-1/3'>
                    <input type="text" placeholder='Search for free' className='hidden bg-gray-200 sm:block px-12 py-2  w-full max-w-xl rounded-xl md:mx-3  outline-none hover:bg-gray-300 ' />
                    <Search className='hidden sm:block absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black cursor-pointer' size={16} strokeWidth={2} />

                </div> */}
                <div className="relative md:hidden">
                    <button
                        onClick={toggle}
                        className="font-semibold cursor-pointer text-gray-600 hover:text-black transition"
                    >
                        {open ? <X strokeWidth={1.75} /> : <Menu strokeWidth={1.75} />}
                    </button>

                    <div className={`absolute right-0 top-12 z-50 w-52 rounded-2xl border border-gray-100 bg-white/95 backdrop-blur-md shadow-xl shadow-black/10 p-2 transition-all duration-300 ease-in-out origin-top-right
                       ${open
                            ? "opacity-100 translate-y-0 scale-100"
                            : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
                        }`}>
                        <a
                            className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-black transition"
                            href="#"
                        >
                            Categories
                        </a>

                        <a
                            className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-black transition"
                            href="#"
                        >
                            Favorites
                        </a>

                        <a
                            className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-black transition"
                            href="#"
                        >
                            About
                        </a>
                    </div>
                </div>

                <ul className='hidden md:flex items-center justify-end  gap-10'>
                    <li className='font-semibold cursor-pointer text-gray-600 hover:text-black transition'>Categories</li>
                    <Link className='font-semibold cursor-pointer text-gray-600 hover:text-black transition' to='/saved'>Saved</Link>
                    <li className='font-semibold cursor-pointer text-gray-600 hover:text-black transition'>About</li>
                </ul>

            </div>
        </nav>
    )
}
