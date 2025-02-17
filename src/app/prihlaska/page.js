import React from 'react';
import Navbar from "../../components/navbar";
import Footer from '../../components/footer';

export default function Prihlaska() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow p-8 sm:p-20 flex flex-col items-center">
        <div className="mt-20 text-center">
          <h1 className="text-4xl font-bold mb-8">Přihláška</h1>
          <p className="text-lg mb-8">
            Připraven udělat další krok a stát se členem? To nás těší. Přihlášku a řád klubu vyplňují i stávající členi a to vždy začátku prvního pololetí. Ke stažení je najdeš zde:
          </p>
          <div className="flex space-x-4 justify-center">
            <a href="/prihlaska.pdf" download className="text-black bg-gray-200 rounded-full px-4 py-2 hover:bg-gray-300 hover:shadow-lg hover:shadow-[#cb3298]/50 transition duration-300">
              <i className="fas fa-download mr-2 text-black"></i>Přihláška
            </a>
            <a href="/rad_klubu.pdf" download className="text-black bg-gray-200 rounded-full px-4 py-2 hover:bg-gray-300 hover:shadow-lg hover:shadow-[#cb3298]/50 transition duration-300">
              <i className="fas fa-download mr-2 text-black"></i>Řád klubu
            </a>
          </div>
        </div>

        <div className="mt-10 text-center">
          <h1 className="text-2xl font-bold mb-4">Odevzdání přihlášky</h1>
          <p>Přihlášku buď vytiskni a přines ji na trénink, nebo ji naskenovanou pošli na email trener@sar-dance.cz</p>
          <h1 className="text-2xl font-bold mt-5 mb-4">Platba školného</h1>
          <p>Školné pro 1. pololetí je nutno uhradit do 21.9.2024, na 2. pololetí do 31.1.2025</p>
          <p>Školné se platí na bankovní účet 123-232630247/0100 vedený u KB</p>
          <p>Do poznámky uveďte jméno a přijímení člena, do variabilního symbolu uveďte datum narození ve formátu DDMMRRRR (např. 03.06.2010 -{'>'} 03062010)</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}