import React from 'react';
import Navbar from "../../components/navbar";
import Footer from '../../components/footer';

export default function Kontakt() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow p-8 sm:p-20 flex flex-col items-center justify-center">
        <div className="mt-20 text-center">
          <h1 className="text-4xl font-bold mb-8">Kontakt</h1>
          <p className="text-lg mb-4">
            Email: <a href="mailto:trener@sardance.cz" className="text-blue-500">trener@sardance.cz</a>
          </p>
          <p className="text-lg">
            Telefon - Šárka Moravová: <a href="tel:+420604911657" className="text-blue-500">+420 604 911 657</a>
          </p>
          <p className="text-lg mb-8">
            Telefon - Richard Gardlo: <a href="tel:+420777122459" className="text-blue-500">+420 777 122 459</a>
          </p>
          <p className="text-lg mb-8">
            IČO: 08234621
          </p>  
          <p className="text-lg mb-8">
            Stížnosti ohledně webových stránek a jejich obsahu zasílejte na email: <a href="mailto:manager@smoliicek.cz" className="text-blue-500">manager@smoliicek.cz</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}