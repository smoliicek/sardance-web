'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const itemBase = 'text-black bg-[#eaa7cf] rounded-full lg:mb-0 hover:bg-[#d472a9] hover:shadow-lg hover:shadow-[#eaa7cf]/50 transition duration-300 flex items-center justify-center text-center';

  return (
    <>
      <nav className="w-full max-w-6xl fixed top-4 left-1/2 transform -translate-x-1/2 flex flex-col lg:flex-row items-center justify-between p-4 bg-white bg-opacity-90 rounded-lg shadow-lg z-50">
        <div className="flex items-center justify-center w-full lg:w-auto">
          <Link href="/" legacyBehavior>
            <a>
              <Image src="/sar_dance.png" alt="Logo" width={75} height={75} priority />
            </a>
          </Link>
        </div>

        <div className="lg:hidden mt-4 lg:mt-0">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>

        <ul
          className={`lg:flex lg:space-x-4 mr-4 ${isOpen ? 'flex flex-col space-y-6 p-6 w-full items-center my-auto' : 'hidden'} lg:block mt-4 lg:mt-0`}
        >
          <li className={isOpen ? 'w-full flex justify-center px-4' : undefined}>
            <Link legacyBehavior href="/nabidka">
              <a className={`${itemBase} ${isOpen ? 'w-full max-w-xs py-3 text-lg text-center leading-tight whitespace-normal' : 'px-4 py-2 text-base'}`}>Co nabízíme?</a>
            </Link>
          </li>

          <li className={isOpen ? 'w-full flex justify-center px-4' : undefined}>
            <Link legacyBehavior href="/prihlaska">
              <a className={`${itemBase} ${isOpen ? 'w-full max-w-xs py-3 text-lg text-center leading-tight whitespace-normal' : 'px-4 py-2 text-base'}`}>Přihláška</a>
            </Link>
          </li>

          <li className={isOpen ? 'w-full flex justify-center px-4' : undefined}>
            <Link legacyBehavior href="/o-clenstvi">
              <a className={`${itemBase} ${isOpen ? 'w-full max-w-xs py-3 text-lg text-center leading-tight whitespace-normal' : 'px-4 py-2 text-base'}`}>O členství</a>
            </Link>
          </li>

          <li className={isOpen ? 'w-full flex justify-center px-4' : undefined}>
            <Link legacyBehavior href="/fotky">
              <a className={`${itemBase} ${isOpen ? 'w-full max-w-xs py-3 text-lg text-center leading-tight whitespace-normal' : 'px-4 py-2 text-base'}`}>Fotogalerie</a>
            </Link>
          </li>

          <li className={isOpen ? 'w-full flex justify-center px-4' : undefined}>
            <Link legacyBehavior href="/kontakt">
              <a className={`${itemBase} ${isOpen ? 'w-full max-w-xs py-3 text-lg text-center leading-tight whitespace-normal' : 'px-4 py-2 text-base'}`}>Kontakt</a>
            </Link>
          </li>
        </ul>
      </nav>

      {pathname !== '/' && (
        <div className={`block lg:hidden ${isOpen ? 'h-[100px]' : 'h-24'}`} aria-hidden="true" />
      )}
    </>
  );
}