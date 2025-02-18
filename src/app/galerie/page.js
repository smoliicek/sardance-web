import React from 'react';
import Navbar from "../../components/navbar";
import Footer from '../../components/footer';

export default function Kontakt() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow p-8 sm:p-20 flex flex-col items-center justify-center">
        <div className="mt-20 text-center">
          <h1 className="text-4xl font-bold mb-8">Galerie</h1>
          <p>abc</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}