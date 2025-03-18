import React from "react";

export default function Header() {
    return (
        <header className="bg-white fixed top-0 w-full z-10 shadow-sm">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img src="/images/elemes.jpg" alt="Elemes Logo" className="h-8 w-auto" />
                    <span className="text-lg font-bold text-blue-600">elemes.id</span>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex">
                    <ul className="flex space-x-6 text-gray-700 font-medium">
                        <li><a href="#" className="hover:text-green-600">Home</a></li>
                        <li><a href="#" className="hover:text-green-600">About</a></li>
                        <li className="relative flex items-center">
                            <a href="#" className="hover:text-green-600">Promotions</a>
                            <span className="absolute top-[-8px] right-[-18px] bg-red-500 text-white text-xs px-1 py-0.5 rounded-full text-[10px]">HOT</span>
                        </li>
                        <li><a href="#" className="hover:text-green-600">Blogs</a></li>
                        <li><a href="#" className="hover:text-green-600">Contact Us</a></li>
                    </ul>
                </nav>

                {/* Buttons */}
                <div className="flex items-center space-x-4">
                   <button className="text-gray-700 hover:text-gray-900 text-sm">Masuk</button>
                   <button className="bg-[#8BAC3E] hover:bg-[#7A942E] text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                    Daftar Sekarang
                  </button>
                </div>
            </div>
        </header>
    );
}
