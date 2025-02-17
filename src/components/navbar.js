'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full max-w-6xl fixed top-4 left-1/2 transform -translate-x-1/2 flex items-center justify-between p-4 bg-white bg-opacity-90 rounded-lg shadow-lg z-50">
      <div className="flex items-center ml-4">
        <Link href="/" legacyBehavior>
          <a>
            <Image src="/sar_dance.png" alt="Logo" width={75} height={75} priority="true" />
          </a>
        </Link>
      </div>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>
      <ul className={`lg:flex space-x-4 mr-4 ${isOpen ? 'block' : 'hidden'} lg:block`}>
        <li>
          <Link legacyBehavior href="/nabidka">
            <a className="text-black bg-gray-200 rounded-full px-4 py-2 mb-4 lg:mb-0 hover:bg-gray-300 hover:shadow-lg hover:shadow-[#cb3298]/50 transition duration-300">Co nabízíme?</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/prihlaska">
            <a className="text-black bg-gray-200 rounded-full px-4 py-2 mb-4 lg:mb-0 hover:bg-gray-300 hover:shadow-lg hover:shadow-[#cb3298]/50 transition duration-300">Přihláška</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/o-clenstvi">
            <a className="text-black bg-gray-200 rounded-full px-4 py-2 mb-4 lg:mb-0 hover:bg-gray-300 hover:shadow-lg hover:shadow-[#cb3298]/50 transition duration-300">O členství</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/kontakt">
            <a className="text-black bg-gray-200 rounded-full px-4 py-2 mb-4 lg:mb-0 hover:bg-gray-300 hover:shadow-lg hover:shadow-[#cb3298]/50 transition duration-300">Kontakt</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}