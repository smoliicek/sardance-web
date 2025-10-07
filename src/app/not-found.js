import React from 'react';
import Navbar from "../components/navbar";
import Footer from '../components/footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow p-8 sm:p-20 flex flex-col items-center justify-center">
        <div className="mt-20 text-center">
          <h1 className="text-4xl font-bold mb-8">Stránka nebyla nalezena.</h1>
          <p className="text-lg mb-4">
            Omlouváme se, ale stránka kterou hledáte nebyla nalezena (server ohlásil chybu 404). Tlačítkem níže odtančíte zpět na domovskou stránku. 
          </p>

           <a href="/" className="text-black bg-gray-200 rounded-full px-4 py-2 hover:bg-gray-300 hover:shadow-lg hover:shadow-[#cb3298]/50 transition duration-300">
              <i className="fas fa-home mr-2 text-black"></i>Domů
            </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}