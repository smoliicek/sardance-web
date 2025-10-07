import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from "../../components/navbar";
import Footer from '@/components/footer';

export default function Nabidka() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="min-h-screen p-8 sm:p-20 flex flex-col items-center">
      <div className="mt-20 text-center">
        <h1 className="text-4xl font-bold mb-8">Co nabízíme?</h1>
      </div>

      <div className="p-8 pb-20 sm:p-20 flex flex-col lg:flex-row">
      <div className="lg:w-1/2 flex flex-col items-center space-y-4">
          <Image src="/klub.jpg" alt="Image 1" width={500} height={500} loading='lazy'/>
        </div>

        <div className="lg:w-1/2 flex flex-col items-center justify-center">
          <p className="text-center mt-4">
            Chceš se naučit tančit? Viděl si Star Dance a chtěl by ses naučit něco podobného?<br></br>Nebo jsi už tanečník a chceš se zlepšit? Přijď k nám do klubu, kde trénujeme latinskoamerické (Samba, Cha-cha, Rumba, Paso-doble, Jive) a standartní (Waltz, Valčík, Tango, Slowfox, Quickstep) tance.<br></br>Trénujeme děti a mládežníky od 6 do 21 let.<br></br> Zaujali jsme tě? Klikni a dozvíš se víc:
          </p>
          <Link legacyBehavior href="/o-clenstvi">
          <a className="mt-4 text-black bg-gray-200 rounded-full px-4 py-2 hover:bg-gray-300 hover:shadow-lg hover:shadow-[#cb3298]/50 transition duration-300">O členství</a>
          </Link>
        </div>
      </div>
      
      <div className="p-8 pb-20 sm:p-20 flex flex-col lg:flex-row">
        <div className="lg:w-1/2 flex flex-col items-center justify-center">
          <p className="text-center">
            Chcete tancem oživit svůj maturitní ples, firemní večírek nebo jinou akci?<br></br>To jste zde správně! Vystoupení STT + LAT zabere okolo 20-30 minut. Pro více informací nás kontaktujte:
          </p>
          <Link legacyBehavior href="/kontakt">
          <a className="mt-4 mb-4 text-black bg-gray-200 rounded-full px-4 py-2 hover:bg-gray-300 hover:shadow-lg hover:shadow-[#cb3298]/50 transition duration-300">Kontakt</a>
          </Link>
        </div>
        <div className="lg:w-1/2 flex flex-col items-center space-y-4">
          <Image src="/vystoupeni.jpg" alt="Image 1" width={300} height={300} loading='lazy'/>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}