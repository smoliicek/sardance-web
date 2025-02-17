import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full max-w-6xl fixed top-4 left-1/2 transform -translate-x-1/2 flex items-center justify-between p-4 bg-white bg-opacity-90 rounded-lg shadow-lg z-50">
      <div className="flex items-center ml-4">
        <Link href="/" legacyBehavior>
          <a>
            <Image src="/sar_dance.png" alt="Logo" width={75} height={75} priority="true" />
          </a>
        </Link>
      </div>
      <ul className="flex space-x-4 mr-4">
        <li>
          <Link legacyBehavior href="/nabidka">
            <a className="text-black bg-gray-200 rounded-full px-4 py-2 hover:bg-gray-300 hover:shadow-lg hover:shadow-[#cb3298]/50 transition duration-300">Co nabízíme?</a>
          </Link>
        </li>
        <li>
            <Link legacyBehavior href="/prihlaska">
          <a href="#" className="text-black bg-gray-200 rounded-full px-4 py-2 hover:bg-gray-300 hover:shadow-lg hover:shadow-[#cb3298]/50 transition duration-300">Přihláška</a>
            </Link>
        </li>
        <li>
            <Link legacyBehavior href="/o-clenstvi">
          <a href="#" className="text-black bg-gray-200 rounded-full px-4 py-2 hover:bg-gray-300 hover:shadow-lg hover:shadow-[#cb3298]/50 transition duration-300">O členství</a>
            </Link>
        </li>
        <li>
            <Link legacyBehavior href="/kontakt">
          <a href="#" className="text-black bg-gray-200 rounded-full px-4 py-2 hover:bg-gray-300 hover:shadow-lg hover:shadow-[#cb3298]/50 transition duration-300">Kontakt</a>
            </Link>
        </li>
      </ul>
    </nav>
  );
}